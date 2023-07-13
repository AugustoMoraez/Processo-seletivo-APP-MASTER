//components
import { Container } from "./style";
import { GridContainer } from "../../components/GridContainer/style";
import { GridItem } from "../../components/GirdItem";
import { Banner } from "../../components/banner";
import { InputSearch } from "../../components/inputSearch";
import { Pagination } from "../../components/Pagination";
//type
import { dataCard } from "../../types/dataCard";
//helpers
import generateUserList from "../../helpers/generateUserList";
import { paginateItems } from "../../helpers/paginateArray";
//react
import { useEffect, useState } from "react";



type prop = {
    gamesList:dataCard[],
     
}

export const HomePage = ({gamesList }:prop) => {
     
    const list= generateUserList(gamesList);
    const[currentPage,setCurrentPage] = useState(1)
    const[currentItens,setItens] = useState(paginateItems(list,currentPage))
    const maxPages = parseInt(( list.length / 21 ).toFixed())

    useEffect(()=>{
        setItens(paginateItems(list,currentPage))
    },[currentPage])

    const nextPage = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        let current = currentPage 
        if(current === maxPages){
        current = 1
        setCurrentPage(current)
       }else{
        current++
        setCurrentPage(current)
       }
       
       
    }
    const backPage = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        let current = currentPage;
        if(current === 1){
            current = 1;
            setCurrentPage(current)
        }else{
            current--
            setCurrentPage(current)
        }
         
    }
    
    return(
        <Container>
            <Banner/>
            <InputSearch/>
            <GridContainer>
                 
                {currentItens.map((item)=>(
                    <GridItem item={item} key={item.game.id}/>
                ))} 
                
            </GridContainer>
        
            <Pagination backPage={()=>backPage()} nextPage={()=>nextPage()} currentPage={currentPage}/>
        
        </Container>
    )
}