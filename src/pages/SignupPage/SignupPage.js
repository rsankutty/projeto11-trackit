import styled from "styled-components";
import logoTrackIt from "../../assets/logo-trackit.svg"
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function SignupPage() {

    const navigate = useNavigate()
    const [form, setForm] = useState({
        email: '',
        password: '',
        name: '',
        image: ''
    });

    function handleForm(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    function createUser(e) {
        e.preventDefault()
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up"
        const body = form
        console.log(form)

        const promise = axios.post(URL, body)
        promise.then(res => {
            alert("Cadastro realizado com sucesso!")
            navigate("/")
        })
        promise.catch(err => alert(err.response.data.message))
    }

    return (
        <PageContainer>
            <img src={logoTrackIt} alt="logo trackit" />
            <Form onSubmit={createUser}>
                <input
                    data-test="email-input"
                    id="email"
                    type="email"
                    placeholder="email"
                    name="email"
                    onChange={handleForm}
                    value={form.email}
                    required
                />
                <input
                    data-test="password-input"
                    id="senha"
                    type="password"
                    placeholder="senha"
                    name="password"
                    onChange={handleForm}
                    value={form.password}
                    required
                />
                <input
                    data-test="user-name-input"
                    id="name"
                    type="text"
                    placeholder="nome"
                    name="name"
                    onChange={handleForm}
                    value={form.name}
                    required
                />
                <input
                    data-test="user-image-input"
                    id="image"
                    type="url"
                    placeholder="url"
                    name="image"
                    onChange={handleForm}
                    value={form.image}
                    required
                />

                <button data-test="signup-btn" type="submit">Cadastrar</button>
            </Form>
            <Link data-test="login-link" to={"/"} >Já tem uma conta? Faça login!</Link>
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

