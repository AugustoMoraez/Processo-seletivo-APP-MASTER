//components
import { Container,VoidList,SearchOptions,Input,InputButton,InputContainer,GenreOptions } from "./style";
import { GridContainer } from "../../components/GridContainer/style";
import { GridItem } from "../../components/GirdItem";
import { ItemGameList } from "../../types/ItemGameList";
import { useState,KeyboardEvent,useEffect } from "react";
import {BsSearch} from "react-icons/bs";
import {getItemSearch} from "../../helpers/getItemSearch";
import {getGamesToGenre} from "../../helpers/getGamesToGenre"
import { genres } from "../../data/genres";


type prop = {
    gamesList:ItemGameList[]
}



export const FavoritesPage = ({gamesList}:prop) => {
    const[list,setList] = useState<ItemGameList[]>(gamesList);
    const[inputText,setInputText] = useState("");
    const[selectValue,setSelectValue] = useState("");

    useEffect(()=>{
        setList(gamesList)
    },gamesList)

    const setFilterForName = (gameName:string) => {
        setList(getItemSearch(gameName,gamesList))
    }
   
    //handle select

    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        if(e.target.value === "All"){
            setList(gamesList);
        }else{
            const list = getGamesToGenre(gamesList,e.target.value);
            setList(list);
        }
        setSelectValue(e.target.value);
    };


    ////////////////////
    //handle Input

    const handleInputText = (e:React.ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value);
    }


    const PressEnter = (e:KeyboardEvent) => {
        if(e.key === "Enter"){
            setFilterForName(inputText)
        }
    }
    ///////////////////////////////////////////////////
    return (
        <Container>
            <SearchOptions>
                <GenreOptions value={selectValue} onChange={handleSelect} >
                    <option value="All">All</option>
                    {genres.map((item,index)=>(
                        <option key={index} value={item}>{item}</option>
                    ))}
                </GenreOptions>
                <InputContainer>
                    <Input onKeyDown={PressEnter} onChange={handleInputText} value={inputText} placeholder="Ex: Overwatch 2"/>
                    <InputButton onClick={()=>setFilterForName(inputText)}><BsSearch/></InputButton>
                </InputContainer>
            </SearchOptions>
            <GridContainer>
                {
                    list.length === 0 ?
                    <VoidList>
                        GAME NO FOUND
                    </VoidList>
                    :
                    list.map((item)=>(
                        <GridItem key={item.id} item={item}/>
                    ))
                }
            </GridContainer>
        </Container>

    )
}