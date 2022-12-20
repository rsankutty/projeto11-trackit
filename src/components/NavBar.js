import styled from "styled-components";
import { useAuth } from "../providers/auth";


export default function NavBar(){
    const {userImage} = useAuth()

    return(
        <NavContainer data-test="header">
            <h1>TrackIt</h1>
            <img src={userImage} alt="profile" />
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
    font-family: 'Playball', cursive;
    font-size: 38.982px;
    img {
        border-radius: 98.5px;
        width: 51px;
        height: 51px;
    }
`;