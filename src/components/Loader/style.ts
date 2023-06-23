import styled from "styled-components";


export const Container = styled.div`
    
        
    @keyframes rotating {
        to {
            transform: rotate(1turn)
        }
    }
    position: absolute;
    margin: 40vh 50vh;
    animation: rotating 0.5s infinite;
    border: 6px solid #fff;
    border-radius: 50%;
    border-bottom: 6px solid #003488;
    height: 50px;
    width: 50px;
        
    
    
`;