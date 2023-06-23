import { Container,GridContainer } from "./style";
import { Load } from "../../components/Loader";
import { ErrMessage } from "../../components/ErrorMsg";
import { rootState } from '../../redux/store';
import { useSelector } from "react-redux";
import { useQuery } from "react-query";
import fetchData from "../../api/fetchData";


export const HomePage = () => {
    
    const{email}= useSelector((state:rootState)=> state.authenticate);
    const{data,isLoading,isError} = useQuery("api-data",()=>fetchData(email),{retry: false});

    return(
        <Container>
            <GridContainer>
                {isError && <ErrMessage/> }
                {isLoading && <Load/> }
                {data && data.map((item)=>(
                    <div key={item.id}>{item.title}</div>
                ))}
            </GridContainer>
        </Container>
    )
}