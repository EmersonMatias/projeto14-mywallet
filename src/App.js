import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";
import Initial from "./Initial";
import SignIn from "./SignIn";
import SignUp from "./SignUp"

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />

      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/cadastrar" element={<SignUp />} />
        <Route path="/inicio" element={<Initial />} />
      </Routes>

    </BrowserRouter>
  );
}


