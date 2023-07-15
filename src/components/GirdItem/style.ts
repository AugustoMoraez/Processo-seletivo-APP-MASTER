import styled from 'styled-components';


export const CardContainer = styled.div`
  width: 100%;
    padding: 15px;
    border-radius: 5px;
    color: black;
    border: 1px solid rgba(150 ,150 ,150,0.5);
    transition: all 0.5s ease 0s;
  &:hover{
    box-shadow: 0px 0px 10px #333;
  }
  
`;

export const CoverImage = styled.img`
  width: 100%;
  border-radius: 10px;
`;

export const CardContent = styled.div`
  display: flex;
  justify-content:left;
  flex-direction: column;
  align-items: left;
  padding: 5px;
  h1{
    font-size: 20px;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  p{
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 14px;
  }
  span{
    font-weight: 200;
    font-size: 13px;
  }
  button{
    margin-right: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    color:#007BFF;
    cursor: pointer;
  }
  svg{
    margin-top: 2px;
  }
`;
export const ActionCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;


`;
export const Avaliation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  margin-left: auto;

`;
export const Stars = styled.div`
  display: flex;
`;
