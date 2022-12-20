import styled from "styled-components";
// Import react-circular-progressbar module and styles
import {
    CircularProgressbar,
    buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useNavigate } from "react-router-dom";
import { useProgress } from "../providers/progress";
import axios from "axios";
import { useAuth } from "../providers/auth";

import { useEffect } from "react";



export default function Footer() {
    const { percentage, setPercentage } = useProgress()

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
    }, [percentage]);

    const navigate = useNavigate()


    return (
        <FooterContainer data-test="menu">
            <p data-test="habit-link" onClick={() => navigate("/habitos")}>Hábitos</p>
            <ProgressBarContainer data-test="today-link" onClick={() => navigate("/hoje")}>
                <CircularProgressbar
                    value={percentage}
                    text={`Hoje`}
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
            <p data-test="history-link" onClick={() => navigate("/historico")}>Histórico</p>
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