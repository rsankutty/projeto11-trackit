import styled from "styled-components";

export default function NavBar(){
    return(
        <NavContainer>
            <h1>TrackIt</h1>
            <img src="https://play-lh.googleusercontent.com/ZqSUbqjoUmb-2MpPNkzvh9O0jBiOffhdocrZRwZ2Jliwy3TJ8DawPvjZx_AonSiw7e5p" alt="profile" />
        </NavContainer>
    );
}

const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #126BA5;
    height: 70px;
    width: 375px;
    box-sizing: border-box;
    color: white;
    padding-left: 18px;
    padding-right: 18px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    position: fixed;
    top: 0px;
    img {
        border-radius: 98.5px;
        width: 51px;
        height: 51px;
    }
`;