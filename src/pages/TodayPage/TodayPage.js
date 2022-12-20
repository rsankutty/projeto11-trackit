import dayjs from 'dayjs';
import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';
import styled from 'styled-components';
import TodayHabit from '../../components/TodayHabit'
import { useState, useEffect } from 'react';
import axios from "axios";
import { useAuth } from "../../providers/auth";
import { useProgress } from '../../providers/progress';


export default function TodayPage() {
    require('dayjs/locale/pt-br')
    let now = dayjs().locale('pt-br')
    let date = (now.format("DD/MM"));
    let day = (now.format("dddd"));

    function capitalize(s) {
        return s[0].toUpperCase() + s.slice(1);
    }

    day = (day.split("-")[0])
    day = capitalize(day)

    const {percentage,setPercentage} = useProgress()
    const [TodayHabitsArr, setTodayHabitsArr] = useState([]);
    const { userToken } = useAuth();
    const URL =
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";

    const config = {
        headers: {
            Authorization: `Bearer ${userToken}`,
        },
    };

    useEffect(() => {
        const promise = axios.get(URL, config);

        promise.then((res) => {
            setTodayHabitsArr(res.data);
            console.log('resdata',res.data)

        });
        promise.catch((err) => alert(err.response.data.message));
    }, []);


    return (
        <PageContainer>
            <NavBar />
            <HabitsContainer>
                <AddHabitContainer>
                    <h1 data-test="today">{`${day}, ${date}`}</h1>
                    <p data-test="today-counter" >{percentage===0?'Nenhum hábito concluído ainda':`${percentage}% dos hábitos concluídos`}</p>
                </AddHabitContainer>
                {TodayHabitsArr.map((item) => <TodayHabit setTodayHabitsArr={setTodayHabitsArr} TodayHabitsArr={item} />)}
                {/* <TodayHabit/> */}
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
background-color: #f2f2f2;
`;

const AddHabitContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 77px;
  color: #126ba5;
  font-size: 22.976px;
  p{
    color: #BABABA;
    font-size: 17.976px;
  }
`;

const HabitsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 338px;
  p {
    margin-top: 8px;
  }
`;
