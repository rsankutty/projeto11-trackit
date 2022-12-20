import { useAuth } from "../../providers/auth";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import styled from "styled-components";


export default function HistoryPage() {
    const { userToken } = useAuth()

    return (
        <PageContainer>
            <NavBar />
            <HistoryContainer>
                <h1>Histórico</h1>
                Em breve você poderá ver o histórico dos seus hábitos aqui!
            </HistoryContainer>
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
background-color: #f2f2f2;
`;

const HistoryContainer = styled.div`
display: flex;
flex-direction: column;
width: 338px;
margin-top: 28px;
h1{
    color: #126BA5;
    font-size: 22.98px;
    margin-bottom: 18px;
}

`;