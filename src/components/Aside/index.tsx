import { Container,Nav,Menu,MenuOption } from "./style";
import { useNavigate } from "react-router-dom";
import {BiSolidUserCircle} from "react-icons/bi";
import {genres} from "../../data/genres";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import {setCurrentUser} from "../../redux/reducers/userReducer"
import { RootState } from "../../redux/store";

type props = {
    toggleFunc:()=>void,
    toggle:boolean
}

export const Aside = ({toggle,toggleFunc}:props) => {
    
    const{token} = useSelector((state:RootState) => state.user )
    const dispatch = useDispatch();
    const nav = useNavigate();
   
    const redirect = (e:React.MouseEvent<HTMLLIElement>) => {
       
        toggleFunc();
        const element = e.target as HTMLLIElement;
        nav(`filter/${element.textContent}`)
        
       
    }

    const handleAuth = () => {
        if(token !== null){
            dispatch(setCurrentUser(null))
            nav("/auth/")
        }else{
            nav("/auth/")
        }
    }
    return(



        <Container toggle={toggle.toString()}>
            <Nav>
                <Menu>
                    <MenuOption onClick={()=>{handleAuth(),toggleFunc()}}>
                        {
                            token === null 
                            ?
                            <span>
                                <BiSolidUserCircle/>LogIn
                            </span>
                            :
                            <span>
                                <BiSolidUserCircle/>Logout
                            </span>
                        }
                    </MenuOption>
                    <h3>Filters:</h3>
                    <MenuOption onClick={()=>{nav("/"),toggleFunc()}}>
                        <p>All</p>
                    </MenuOption>
                    {genres.map((item,index)=>(
                        <MenuOption onClick={redirect} key={index}>
                            <p>
                                {item}
                            </p>
                        </MenuOption>
                    ))}

                </Menu>
            </Nav>
        </Container>
    )
}