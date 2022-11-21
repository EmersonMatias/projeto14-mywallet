import {  useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";
import MyContext from "./context/MyContext";
import Initial from "./pages/Initial/Initial";
import InputValue from "./pages/InputValue";
import OutputValue from "./pages/OutputValue";
import SignIn from "./pages/SignIn.js"
import SignUp from "./pages/SignUp.js"


export default function App() {
  const [dataUser, setDataUser] = useState()
  const config = { headers: { Authorization: `Bearer ${dataUser?.token}` } }

  return (
    <BrowserRouter>
      <GlobalStyle />


      <MyContext.Provider value={{ dataUser, setDataUser, config }}>

        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/cadastrar" element={<SignUp />} />
          <Route path="/inicio" element={<Initial />} />
          <Route path="/novaentrada" element={<InputValue />} />
          <Route path="/novasaida" element={<OutputValue />} />
        </Routes>

      </MyContext.Provider>
    </BrowserRouter>
  );
}


