import GlobalStyle from "./styles/GlobalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HabitsPage from "./pages/HabitsPage/HabitsPage";
import HistoryPage from "./pages/HIstoryPage/HistoryPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import TodayPage from "./pages/TodayPage/TodayPage";


function App() {
  return (
    <>
      <GlobalStyle />
      TrackIt
      <BrowserRouter>
        <Routes>
          <Route path="/habitos" element={<HabitsPage />} />
          <Route path="/historico" element={<HistoryPage />} />
          <Route path="/" element={<LoginPage />} />
          <Route path="/cadastro" element={<SignupPage />} />
          <Route path="/hoje" element={<TodayPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
