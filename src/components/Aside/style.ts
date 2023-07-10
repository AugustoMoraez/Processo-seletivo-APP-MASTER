import styled from "styled-components"

type props = {
    toggle?:string
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
    overflow: scroll;
    z-index: 99;
    //style
    background-color: #FFF;
    box-shadow: 0px 5px 10px #333;
    transition: 0.5s;
    //sub-componentes
    &::-webkit-scrollbar{
        display: none;
    }
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
    overflow: hidden;
    
`;
export const Menu = styled.ul`
    //display
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color:#333;
    //sub-components
    h3{
        cursor: default;
    }
`;
export const MenuOption = styled.li`
    
    //dimensao e posição
    width: 100%;
    text-align: center;
    
    //style
    transition: 0.5s;
    font-weight: 600;
    
    
    color:#333;

    //sub-components
    p{
        padding: 10px;
    }
    span{
        font-size: 30px;
        //display
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 900;
        margin: auto;
    }
   
    //hover
    &:hover{
        cursor: pointer;
        color:#4BBCFB;
        background-color:rgba(0,0,200,0.1);
    }
    
`;
export const BarElement = styled.div`
    width: 90%;
    height: 1px;
    margin:auto;
    background-color: #eee;
    
`;