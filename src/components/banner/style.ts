import styled from "styled-components";
import bg from "../../assets/images/bg.jpg"
 

export const BannerContainer = styled.div `
  position: relative;
  width: 100%;
  height: 400px;
  background: url(${bg});
  background-position: bottom ;
  background-size: cover;
  overflow: hidden;
`;

export const ContentContainer = styled.div`
  height:inherit;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 16px;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ContainerDescription = styled.div`
  text-align: center;
  font-size: 16px;
  margin-bottom: 16px;
`;
export const Title = styled.h3`
  font-size: 50px;
  margin-bottom: 16px;
  cursor: default;
  @media (max-width:440px) {
      font-size: 30px;
  }
`;
export const Description = styled.p`
  font-size:16px;
  width:100%;
  font-weight: 200;
  max-width:500px;
  margin-bottom: 16px;
  cursor: default;
`;

export const Button = styled.a`
  display: inline-block;
  font-size: 14px;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  background-color: #007BFF;
  color: #fff;
  transition:0.5s;

  &:hover {
    background-color: #FFF;
    color:#007BFF;
  }
`;