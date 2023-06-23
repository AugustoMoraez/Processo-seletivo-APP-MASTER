import styled from 'styled-components';


export const CardContainer = styled.div`
  width: 470px;
  height: 400px;
  padding: 10px;
  border-radius: 8px;
  overflow: hidden;
`;

export const CoverImage = styled.img`
  width: 100%;
  height: 60%;
  object-fit: cover;
`;

export const CardContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
`;

export const GameInfo = styled.h3`
  @media (max-width:400px) {
    margin: auto;
    text-align: center;
  }
`;
export const GameName = styled.h3`
  
  text-align: left;
  font-size: 18px;
  color: #fefefe;
`;

export const CompanyName = styled.p`
  margin: 2px 0;
  font-size: 14px;
  color: #666;
`;

export const Button = styled.button`
  padding: 2px 16px;
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