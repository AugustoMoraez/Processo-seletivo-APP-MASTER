import styled from "styled-components";

type prop = {
    isLiked:"true"|"false"
}

export const Container = styled.div<prop>`
    svg{
        font-size: 25px;
        color: ${(prop)=>prop.isLiked === "true" ? "red" : "#cccccc"};
    }
`;