//components
import { Container,Nav,Menu,MenuOption,BarElement } from "./style";
//icon
import {BiSolidUserCircle} from "react-icons/bi";
//data
import {genres} from "../../data/genres";
//firebase
import {auth} from "../../services/firebaseConfig";
//hooks
import { useNavigate } from "react-router-dom";
import { useSignOut } from 'react-firebase-hooks/auth';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import {setCurrentUser} from "../../redux/userReducer"
//types
import { RootState } from "../../redux/store";

type props = {
    toggleFunc:()=>void,
    toggle:boolean
}

export const Aside = ({toggle,toggleFunc}:props) => {
    
    const{token} = useSelector((state:RootState) => state.user )
    const [signOut] = useSignOut(auth);
    const dispatch = useDispatch();
    const nav = useNavigate();
   
    const redirect = (e:React.MouseEvent<HTMLLIElement>) => {
        toggleFunc();
        const element = e.target as HTMLLIElement;
        nav(`filter/${element.textContent}`)       
    }
    const handleAuth = async() => {
        if(token !== null){
            await signOut();
            dispatch(setCurrentUser(null))
        }
        nav("/auth/")
        toggleFunc()
    }
    const redirectFavoritePage = () => {
        if(token !== null){
            nav("/favorites")
        }else{
            nav("/auth/")
        }
        toggleFunc()
    }
    
    return(
        <Container toggle={toggle.toString()}>
            <Nav>
                <Menu>
                    <MenuOption onClick={()=>{handleAuth()}}>
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
                    <MenuOption onClick={redirectFavoritePage}>
                        <p>Favorites</p>
                    </MenuOption>
                    {genres.map((item,index)=>(
                        <MenuOption onClick={redirect} key={index}>
                            <BarElement />
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