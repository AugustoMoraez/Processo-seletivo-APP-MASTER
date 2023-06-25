import styled from 'styled-components';


export const CardContainer = styled.div`
  width: 470px;
  padding: 3px;
  margin: 3px;
  transition: 0.5s;
  overflow: hidden;
  cursor: pointer;
  &:hover{
    background-color: rgba(0,0,0,0.1);
  }
`;

export const CoverImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

export const CardContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
`;

export const GameInfo = styled.div`
  @media (max-width:400px) {
    margin: auto;
    text-align: center;
  }
`;
export const GameName = styled.h3`
  text-align: left;
  font-size: 18px;
  color: #007bff;
  
`;

export const CompanyName = styled.p`
  margin: 2px 0;
  font-size: 14px;
  color: #666;
`;

export const Button = styled.button`
  padding: 2px 16px;
  max-width:100px;
  max-height: 50px;
  border: none;
  background-color: #007bff;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
  @media (max-width:400px) {
    display:none ;
  }
`;