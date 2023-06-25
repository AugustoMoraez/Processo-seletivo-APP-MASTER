import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 16px;
  background-color: #f8f8f8;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width:100%;
  min-height: 100vh;
  max-width: 1140px;
  margin: auto;
  padding-top: 120px;
  color: #333;
  h2{
    margin: 30px auto 0px auto;
    text-align: center;
    span{
      color:#007BFF;
    }
  }
`;
 
export const InfoContainer = styled.div`
  width: 100%;
  display:flex;
  flex-direction: column;
  align-items:center;
  @media (max-width:1020px) {
    align-items: flex-start;
    max-width:700px;
  }
`;

export const Thumbnail = styled.img`
  width: 100%;
  max-width:700px;
  height: auto;
  margin: auto;
  margin-bottom: 16px;
  border-radius: 4px;
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 8px;
  margin-left: 20px;
  align-items: center;
  text-align: center;
  color: #333;
  @media (max-width:723px) {
    margin: auto;
  }
  
`;

export const Description = styled.p`
  font-size: 16px;
  max-width: 400px;
  margin-bottom: 16px;
  text-align: center;
  color: #333;
  @media (max-width:1020px) {
    text-align: left;   
  }
   
   
`;

export const Details = styled.p`
  font-size: 14px;
  margin-bottom: 8px;
  align-items: center;
  color: #333;

  
`;

export const Platforms = styled.p`
  font-size: 14px;
  margin-bottom: 16px;
  color: #333;
   
`;

export const DownloadLink = styled.a`
  font-size: 14px;
  text-decoration: none;
  color: #fff;
  background-color: #007BFF;
  padding: 10px 20px;
  border-radius: 4px;
  transition: 0.5s;
  margin: auto;
  margin-top: 20px;
  &:hover {
    background-color: #fff;
    color:#007BFF;
    border:1px solid #007BFF;
  }
`;
export const SubContainer = styled.div`
  display: flex;
   
  align-items: start;
  color: #333;
  @media (max-width:1020px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const FlexContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: auto;
`;
type prop ={
  tumb:string
}
export const FlexItem = styled.div<prop>`
  background: url(${props => props.tumb});
  background-position:center;
  background-size: cover;
  cursor:pointer;
  width: 100%;
  max-width:300px;
  height:150px;
  margin: 5px;
`;
