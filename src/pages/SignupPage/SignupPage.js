import styled from "styled-components";
import logoTrackIt from "../../assets/logo-trackit.svg"
import { Link } from "react-router-dom";

export default function SignupPage() {
    return (
        <PageContainer>
            <img src={logoTrackIt} alt="logo trackit" />
            <Form>
                <input
                    id="email"
                    type="email"
                    placeholder="email"
                    required
                />
                <input
                    id="senha"
                    type="password"
                    placeholder="senha"
                    required
                />
                <input
                    id="nome"
                    type="text"
                    placeholder="nome"
                    required
                />
                <input
                    id="foto"
                    type="url"
                    placeholder="foto"
                    required
                />

                <button type="submit">Cadastrar</button>
            </Form>
            <Link to={"/"} >Já tem uma conta? Faça login!</Link>
        </PageContainer>
    );
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    margin-top: 68px;
    width: 375px;
`;

const Form = styled.form`
    display: flex;
    margin-top: 35px;
    margin-bottom: 25px;
    width: 303px;
    gap: 5px;
    flex-direction: column;
    font-size: 18px;
    button {
        align-self: center;
        width: 100%;
        height: 45px;
        background-color: #52B6FF;
        color: white;
        border-radius: 4.63636px;
        border: none;
    }
    input {
        ::placeholder{
            color: #DBDBDB;
        }
        height: 45px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
    }
`

