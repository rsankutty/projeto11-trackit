import styled from "styled-components";
// Import react-circular-progressbar module and styles
import {
    CircularProgressbar,
    buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";



export default function Footer() {
    const percentage = 75;
    return (
        <FooterContainer>
            Hábitos
            <ProgressBarContainer>
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
            Histórico
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