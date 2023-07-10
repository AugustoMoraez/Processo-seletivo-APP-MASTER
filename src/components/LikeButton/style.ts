import styled from "styled-components";

type prop = {
    liked:"true"|"false"
}

export const Container = styled.div<prop>`
    svg{
        font-size: 25px;
        color: ${(prop)=>prop.liked === "true" ? "red" : "#cccccc"};
    }
`;