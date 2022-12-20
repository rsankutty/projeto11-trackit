import styled from "styled-components";
import { TrashOutline } from 'react-ionicons'
import axios from "axios";
import { useAuth } from "../providers/auth";



export default function RegisteredHabit({ HabitsArr }) {
    const weekdays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
    const { userToken } = useAuth();

    const config = {
        headers: {
            Authorization: `Bearer ${userToken}`,
        },
    };
    console.log('registered', HabitsArr)

    function deleteHabit() {
        const URL =
            `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${HabitsArr.id}`;

        const promise = axios.delete(URL, config);

        promise.then((res) => {
            console.log('habito deletado')
            window.location.reload();

        });
        promise.catch((err) => alert(err.response.data.message));

    }

    function WeekButton({ day, index, HabitsArr }) {

        let weekBtnClicked = HabitsArr.days.includes(index)


        return (
            <ButtonDiv data-test="habit-day" weekBtnClicked={weekBtnClicked}>
                {day}
            </ButtonDiv>
        )
    }



    return (
        <HabitContainer data-test="habit-container">
            <HabitCard>
                <Wrapper>
                    <h1 data-test="habit-name" >{HabitsArr.name}</h1>
                    <DaysContainer>
                        {weekdays.map((day, index) => <WeekButton key={index} index={index} day={day} HabitsArr={HabitsArr} />)}
                    </DaysContainer>
                </Wrapper>
                <TrashOutline
                    data-test="habit-delete-btn"
                    color={'#666666'}
                    height="15px"
                    width="15px"
                    onClick={deleteHabit}
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

const Wrapper = styled.div`
   
`;


const HabitCard = styled.div`
    border-radius: 5px;
    background-color: white;
    width: 303px;
    margin: 15px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    h1{
        margin-bottom: 8px;
        color: #666666;

    }
`;


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
