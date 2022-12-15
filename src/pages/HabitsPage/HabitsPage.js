import styled from "styled-components";
import NavBar from "../../components/NavBar";
import Habit from "../../components/Habit";
import Footer from "../../components/Footer";

export default function HabitsPage() {
    return (
        <PageContainer>
            <NavBar />
            <HabitsContainer>
                <AddHabitContainer>
                    <h1>Meus Hábitos</h1>
                    <button>+</button>
                </AddHabitContainer>
                <Habit></Habit>
                <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
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
`;

const AddHabitContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 85px;
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





