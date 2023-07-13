//components
import { Container,VoidList,SearchOptions,Input,InputButton,InputContainer,GenreOptions } from "./style";
import { GridContainer } from "../../components/GridContainer/style";
import { GridItem } from "../../components/GirdItem";
import { ItemGameList } from "../../types/dataCard";
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
    const[genreSeleted,setGenreSeleted] = useState("All");

    useEffect(()=>{
        const list  =  genreSeleted === "All" ? gamesList : getGamesToGenre(gamesList,genreSeleted)
        setList(list)
    },[gamesList])

    
    //handle select

    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setGenreSeleted(e.target.value);
        if(e.target.value === "All"){
            setList(gamesList);
        }else{
            const list = getGamesToGenre(gamesList,e.target.value);
            setList(list);
        }
    };


    ////////////////////
    //handle Input
    

    const handleInputText = (e:React.ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value);
        const currentGenre = genreSeleted;
        const list = currentGenre === "All" ? gamesList : getGamesToGenre(gamesList,currentGenre);
        setList(getItemSearch(e.target.value,list))
        
    }


    const PressEnter = (e:KeyboardEvent) => {
        if(e.key === "Enter"){
            setList(getItemSearch(inputText,list))
        }
    }
    ///////////////////////////////////////////////////
    return (
        <Container>
            <SearchOptions>
                <GenreOptions value={genreSeleted} onChange={handleSelect} >
                    <option value="All">All</option>
                    {genres.map((item,index)=>(
                        <option key={index} value={item}>{item}</option>
                    ))}
                </GenreOptions>
                <InputContainer>
                    <Input onKeyDown={PressEnter} onChange={handleInputText} value={inputText} placeholder="Ex: Overwatch 2"/>
                    <InputButton onClick={()=> setList(getItemSearch(inputText,list))}><BsSearch/></InputButton>
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