import styled from "styled-components";
import logoTrackIt from "../../assets/logo-trackit.svg"
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function LoginPage() {

    const navigate = useNavigate()
    const [userToken,setUserToken] = useState('')

    const [form, setForm] = useState({
        email: '',
        password: '',
    });

    function handleForm(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    function login(e) {
        e.preventDefault()
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login"
        const body = form
        console.log(form)

        const promise = axios.post(URL,body)
        promise.then(res => {
            setUserToken(res.data.token)
            console.log(res.data)
            navigate("/habitos")
        })
        promise.catch(err => alert(err.response.data.message))

    }

    return (
        <PageContainer>
            <img src={logoTrackIt} alt="logo trackit" />
            <Form onSubmit={login}>
                <input
                    id="email"
                    type="email"
                    placeholder="email"
                    name="email"
                    onChange={handleForm}
                    value={form.email}
                    required
                />
                <input
                    id="senha"
                    type="password"
                    placeholder="senha"
                    name="password"
                    onChange={handleForm}
                    value={form.password}
                    required
                />

                <button type="submit">Entrar</button>
            </Form>
            <Link to={"/cadastro"} >Não tem uma conta? Cadastre-se!</Link>
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
        padding-left: 11px;
    }
`

