import styled from "styled-components";
// Import react-circular-progressbar module and styles
import {
    CircularProgressbar,
    buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link, useNavigate } from "react-router-dom";



export default function Footer() {

    const navigate = useNavigate()
    const percentage = 75;



    return (
        <FooterContainer>
            <p onClick={() => navigate("/habitos")}>Hábitos</p>
            <ProgressBarContainer onClick={() => navigate("/hoje")}>
                <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                    background
                    backgroundPadding={6}
                    styles={buildStyles({
                        backgroundColor: "#52B6FF",
                        textColor: "#fff",
                        pathColor: "#fff",
                        trailColor: "transparent"
                    })}
                />
            </ProgressBarContainer>
            <p onClick={() => navigate("/historico")}>Histórico</p>
        </FooterContainer>
    );
}

const ProgressBarContainer = styled.div`
    width: 91px;
    height: 91px;
    padding-bottom: 50px;
`;

const FooterContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: white;
    height: 70px;
    width: 375px;
    color: white;
    position: fixed;
    bottom: 0px;
    color: #52B6FF;
`;