import styled from "styled-components";
import { Checkbox } from 'react-ionicons'
import axios from "axios";
import { useAuth } from "../providers/auth";
import { useState } from "react";
import { useProgress } from "../providers/progress";





export default function TodayHabit({ TodayHabitsArr, setTodayHabitsArr }) {
    const { setPercentage } = useProgress()
    const [doneClicked, setDoneClicked] = useState(TodayHabitsArr.done)
    const { userToken } = useAuth();
    const config = {
        headers: {
            Authorization: `Bearer ${userToken}`,
        },
    };
    function getInfo() {
        const URL =
            "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
        const promise = axios.get(URL, config);

        promise.then((res) => {
            setTodayHabitsArr(res.data);
            console.log('resdata', res.data)
            let total = res.data.length
            let feito = 0
            for (let i = 0; i < res.data.length; i++) {
                if (res.data[i].done === true) {
                    feito += 1
                }
            }

            setPercentage(feito / total * 100)

        });
        promise.catch((err) => alert(err.response.data.message));
    }
    function habitDone() {

        if (doneClicked === false) {
            const URL =
                `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${TodayHabitsArr.id}/check`;

            const promise = axios.post(URL, {}, config);

            promise.then((res) => {
                console.log(res)
                setDoneClicked(true)
                getInfo()

            });
            promise.catch((err) => alert(err.response.data.message));
        } else {
            const URL =
                `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${TodayHabitsArr.id}/uncheck`;

            const promise = axios.post(URL, {}, config);

            promise.then((res) => {
                console.log(res)
                setDoneClicked(false)
                getInfo()
            });
            promise.catch((err) => alert(err.response.data.message));
        }


    }


    console.log('todayhabit', TodayHabitsArr)
    return (
        <HabitContainer data-test="today-habit-container">
            <HabitCard>
                <Wrapper>
                    <h1 data-test="today-habit-name" >{TodayHabitsArr.name}</h1>
                    <p data-test="today-habit-sequence">{`Sequência atual: ${TodayHabitsArr.currentSequence} dias`}</p>
                    <p data-test="today-habit-record" >{`Seu recorde: ${TodayHabitsArr.highestSequence} dias`}</p>
                </Wrapper>
                <Checkbox
                    data-test="today-habit-check-btn"
                    onClick={habitDone}
                    color={doneClicked ? '#8FC549' : '#E7E7E7'}
                    height="69px"
                    width="69px"
                />

            </HabitCard>
        </HabitContainer>
    );
}

const HabitContainer = styled.div`
    border-radius: 5px;
    background-color: white;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
`;

const HabitCard = styled.div`
    border-radius: 5px;
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 303px;
    margin: 15px;
    h1{
        margin-bottom: 8px;
        color: #666666;

    }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  p{
    font-size: 12.976px;
    color: #666666;
  }
`;
