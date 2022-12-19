import styled from "styled-components";
import { useState, useEffect } from 'react';
import { useHabits } from "../providers/userHabits";


export default function Habit({setAddBtn}) {
    const weekdays = ['S', 'T', 'Q', 'Q', 'S', 'S']
    const {addHabits,setAddHabits} = useHabits()
    console.log('addhabits',addHabits)



    function WeekButton({ day }) {

        const [weekBtnClicked, setWeekBtnClicked] = useState(false)
        function handleBtnClick() {
            if (weekBtnClicked === false) {
                setWeekBtnClicked(true)
            } else {
                setWeekBtnClicked(false)
            }
        }

        return (
            <ButtonDiv onClick={handleBtnClick} weekBtnClicked={weekBtnClicked} >
                {day}
            </ButtonDiv>
        )
    }

    function createHabit(e) {
        e.preventDefault()
        console.log("criar habito")
    }

    function removeHabit() {
        setAddBtn(false)
    }


    return (
        <HabitContainer>
            <HabitCard>
                <Form onSubmit={createHabit}>
                    <input
                        id="habito"
                        type="text"
                        placeholder="nome do hábito"
                        required
                    />
                    <DaysContainer>
                        {weekdays.map((day, index) => <WeekButton key={index} day={day} />)}
                    </DaysContainer>
                    <ButtonsContainer>
                        <p onClick={removeHabit}>Cancelar</p>
                        <button type="submit">Salvar</button>
                    </ButtonsContainer>
                </Form>
            </HabitCard>
        </HabitContainer>
    );
}

const HabitContainer = styled.div`
    height: 180px;
    border-radius: 5px;
    background-color: white;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
`;

const HabitCard = styled.div`
    height: 180px;
    border-radius: 5px;
    background-color: white;
    width: 303px;
    height: 145px;
`;

const Form = styled.form`
    display: flex;
    margin-bottom: 8px;
    width: 303px;
    gap: 5px;
    flex-direction: column;
    font-size: 18px;
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
const ButtonDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    color: ${props => props.weekBtnClicked ? "white" : "#DBDBDB"} ;
    background-color: ${props => props.weekBtnClicked ? "#DBDBDB" : "transparent"} ;
`;

const DaysContainer = styled.div`
    display: flex;
    gap: 4px;
`;

const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 23px;
    color: #52B6FF;
    margin-top: 25px;
    button{
        background-color: #52B6FF;
        color: white;
        width: 84px;
        height: 35px;
        border-radius: 4.63636px;
        border: none;
    }
`;