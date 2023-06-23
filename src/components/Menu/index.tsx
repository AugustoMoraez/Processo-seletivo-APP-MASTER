import { IconMenu,MenuBar } from "./style";

type props = {
    toggleFunc:()=>void
}

export const Menu = ({toggleFunc}:props) => {
    return(
       
       
        <IconMenu onClick={toggleFunc}>
            <MenuBar/>
            <MenuBar/>
            <MenuBar/>
        </IconMenu>
      
       
    )
}