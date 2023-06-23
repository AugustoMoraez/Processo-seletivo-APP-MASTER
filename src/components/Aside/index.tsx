import { Container,Nav,Menu,MenuOption } from "./style";
import { useNavigate } from "react-router-dom";

type props = {
    toggleFunc:()=>void,
    toggle:boolean
}

const genre = [
    'Shooter',
    'MMOARPG',
    'ARPG',
    'Fighting',
    'Action RPG',
    'Battle Royale',
    'MMORPG',
    'MOBA',
    'Sports'
]


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
                    <h3>Filtros por gênero:</h3>
                    <MenuOption onClick={()=>{nav("/"),toggleFunc()}}>
                        TODOS
                    </MenuOption>
                    {genre.map((item,index)=>(
                        <MenuOption onClick={redirect} key={index}>
                            {item}
                        </MenuOption>
                    ))}

                </Menu>
            </Nav>
        </Container>
    )
}