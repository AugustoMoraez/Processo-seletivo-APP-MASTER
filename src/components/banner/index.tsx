import { BannerContainer,Button,ContentContainer,Description,ContainerDescription,Title } from "./style";


 
export const Banner = () => {
    return (
        <BannerContainer>
            <ContentContainer>
                <ContainerDescription>
                    <Title>League of Legends</Title>
                    <Description>
                        Junte-se a milhões de jogadores e embarque em emocionantes partidas em League of Legends.
                         Escolha seu campeão,
                        domine habilidades únicas e vença seus oponentes. Não perca tempo, teste agora mesmo!
                    </Description>
                </ContainerDescription>
                <Button href="https://www.freetogame.com/runeterra" target="_blank">
                    Ver Mais
                </Button>
            </ContentContainer>
        </BannerContainer>
    )
}