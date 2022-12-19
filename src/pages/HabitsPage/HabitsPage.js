import styled from "styled-components";
import NavBar from "../../components/NavBar";
import Habit from "../../components/Habit";
import Footer from "../../components/Footer";
import { useState, useEffect } from 'react';
import { useAuth } from "../../providers/auth";
import axios from "axios";
import { useHabits } from "../../providers/userHabits";

export default function HabitsPage() {
    const { addHabits, setAddHabits } = useHabits()
    const [HabitsArr, setHabitsArr] = useState([])
    const { userToken } = useAuth();
    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
    const nohabits = "Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!"

    const config = {
        headers: {
            "Authorization": `Bearer ${userToken}`
        }
    }

    useEffect(() => {
        const promise = axios.get(URL, config)

        promise.then(res => {
            setHabitsArr(res.data)
        })
        promise.catch(err => alert(err.response.data.message))
    }, []);


    function addHabit() {
        setAddHabits([...addHabits, 1])
    }

    return (
        <PageContainer>
            <NavBar />
            <HabitsContainer>
                <AddHabitContainer>
                    <h1>Meus Hábitos</h1>
                    <button onClick={addHabit}>+</button>
                </AddHabitContainer>
                {HabitsArr.length != 0 ? 
                HabitsArr.map((item) => item) : 
                <>{addHabits.map((item,index) => <Habit />)}<p>{nohabits}</p></>}
            </HabitsContainer>
            <Footer />

        </PageContainer>
    );
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    width: 375px;
    height: 667px;
    margin-top: 70px;
    background-color: #F2F2F2;
`;

const HabitsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 338px;
    p{
        margin-top: 8px;
    }
`;

const AddHabitContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 77px;
    color: #126BA5;
    button{
        background-color: #52B6FF;
        width: 40px;
        height: 35px;
        border-radius: 4.63636px;
        color: white;
        border: none;
    }
`;





