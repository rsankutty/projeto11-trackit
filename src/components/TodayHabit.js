import styled from "styled-components";
import { Checkbox } from 'react-ionicons'
import axios from "axios";
import { useAuth } from "../providers/auth";
import { useState } from "react";



export default function TodayHabit({ TodayHabitsArr }) {


    const [doneClicked,setDoneClicked] = useState(TodayHabitsArr.done)
    const { userToken } = useAuth();
    const config = {
        headers: {
            Authorization: `Bearer ${userToken}`,
        },
    };

    function habitDone() {

        if (doneClicked === false) {
            const URL =
                `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${TodayHabitsArr.id}/check`;

            const promise = axios.post(URL, {}, config);

            promise.then((res) => {
                console.log(res)
                setDoneClicked(true)
            });
            promise.catch((err) => alert(err.response.data.message));
        } else {
            const URL =
                `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${TodayHabitsArr.id}/uncheck`;

            const promise = axios.post(URL, {}, config);

            promise.then((res) => {
                console.log(res)
                setDoneClicked(false)
            });
            promise.catch((err) => alert(err.response.data.message));
        }


    }


    console.log('todayhabit', TodayHabitsArr)
    return (
        <HabitContainer>
            <HabitCard>
                <Wrapper>
                    <h1>{TodayHabitsArr.name}</h1>
                    <p>{`Sequência atual: ${TodayHabitsArr.currentSequence} dias`}</p>
                    <p>{`Seu recorde: ${TodayHabitsArr.highestSequence} dias`}</p>
                </Wrapper>
                <Checkbox
                    onClick={habitDone}
                    color={doneClicked? '#8FC549' : '#E7E7E7'}
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
