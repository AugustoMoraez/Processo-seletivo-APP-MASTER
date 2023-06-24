import styled from "styled-components";

export const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  background-color: #f8f8f8;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height:100vh;
  padding-top: 120px;
`;

export const Thumbnail = styled.img`
  width: 100%;
  max-width:700px;
  height: auto;
  margin-bottom: 16px;
  border-radius: 4px;
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 8px;
  color: #333;
`;

export const Description = styled.p`
  font-size: 16px;
  margin-bottom: 16px;
  text-align: center;
  color: #333;
`;

export const Details = styled.p`
  font-size: 14px;
  margin-bottom: 8px;
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
  background-color: #333;
  padding: 10px 20px;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #555;
  }
`;