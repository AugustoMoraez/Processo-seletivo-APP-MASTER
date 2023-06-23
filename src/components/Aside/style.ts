import styled from "styled-components"

type props = {
    toggle:string
}

export const Container = styled.aside<props>`
    //dimensions e posição
    width: 100%;
    max-width: ${(props)=> props.toggle === "true" ? "20vw" : "0px" };
    height: 100vh;
    top:100px ;
    right: 0px;
    position: absolute;
    position: fixed;
    
    z-index: 99;
    //style
    background-color: #061E37;
    transition: 0.5s;
    //sub-componentes
    nav{
        display:  ${(props)=> props.toggle === "true" ? "block" : "none" };
    }

    //media
    @media (max-width:600px) {
        max-width: ${(props)=> props.toggle === "true" ? "100vw" : "0px" };
    }

`;
export const Nav = styled.nav`
    //dimensao
    width: 100%;
    
`;
export const Menu = styled.ul`
    //display
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const MenuOption = styled.li`
    //dimensao e posição
    width: 100%;
    text-align: center;
    padding: 10px;
    //style
    transition: 0.5s;

    a{
        color: #fff;
        font-size: 20px;
    }
    //hover
    &:hover{
        opacity: 0.3;
    }
    
`;