import styled from "styled-components";


export default function RegisteredHabit({HabitsArr}) {
    const weekdays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

    function WeekButton({ day, index, HabitsArr }) {

        let weekBtnClicked = HabitsArr.days.includes(index)


        return (
            <ButtonDiv weekBtnClicked={weekBtnClicked}>
                {day}
            </ButtonDiv>
        )
    }



    return (
        <HabitContainer>
            <HabitCard>
                <h1>{HabitsArr.name}</h1>
                <DaysContainer>
                    {weekdays.map((day, index) => <WeekButton key={index} index={index} day={day} HabitsArr={HabitsArr}/>)}
                </DaysContainer>
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
    width: 303px;
    margin: 15px;
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
