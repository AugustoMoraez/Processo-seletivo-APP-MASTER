import { Container,Fieldset,Form } from "./style";


export const AuthPage = () => {
    return(
        <Container>
            <Fieldset>
                <legend>GamesDev</legend>
                <Form>
                    <label htmlFor="email">Seu email:</label>
                    
                    <input type="email" 
                     required name="email"
                     placeholder="email@email.com"
                     pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" />

                    <input type="submit" value="Entrar" />
                </Form>
            </Fieldset>
        </Container>
    )
}