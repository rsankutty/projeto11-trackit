import styled from "styled-components";

export default function Habit() {
    return (
        <HabitContainer>
            <HabitCard>
                <Form>
                    <input
                        id="email"
                        type="email"
                        placeholder="email"
                        required
                    />
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
    background-color: green;
`;

const Form = styled.form`
    display: flex;
    margin-bottom: 8px;
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
        
    }
`