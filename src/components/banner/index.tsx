import { BannerContainer,Button,ContentContainer,Description,ContainerDescription,Title } from "./style";


 
export const Banner = () => {
    return (
        <BannerContainer>
            <ContentContainer>
                <ContainerDescription>
                    <Title>League of Legends</Title>
                    <Description>
                    Join millions of players and embark on exciting matches in League of Legends. 
                    Choose your champion, 
                    master unique skills and defeat your opponents. Don't waste time, test it right now!
                    </Description>
                </ContainerDescription>
                <Button href="https://www.freetogame.com/runeterra" target="_blank">
                    Show more
                </Button>
            </ContentContainer>
        </BannerContainer>
    )
}