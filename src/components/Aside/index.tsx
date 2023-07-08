import { Container,Nav,Menu,MenuOption } from "./style";
import { useNavigate } from "react-router-dom";
import {BiSolidUserCircle} from "react-icons/bi"
import {genres} from "../../data/genres" 

type props = {
    toggleFunc:()=>void,
    toggle:boolean
}

export const Aside = ({toggle,toggleFunc}:props) => {

    const nav = useNavigate();
    const redirect = (e:React.MouseEvent<HTMLLIElement>) => {
       
        toggleFunc();
        const element = e.target as HTMLLIElement;
        nav(`filter/${element.textContent}`)
        
       
    }

    return(
        <Container toggle={toggle.toString()}>
            <Nav>
                <Menu>
                    <MenuOption onClick={()=>{nav("/auth/"),toggleFunc()}}>
                        <span>
                            <BiSolidUserCircle/>Entrar
                        </span>
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