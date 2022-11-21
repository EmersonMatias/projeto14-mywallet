import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, redirect, Route, Routes } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";
import MyContext from "./context/MyContext";
import Initial from "./Initial";
import InputValue from "./InputValue";
import OutputValue from "./OutputValue";
import SignIn from "./SignIn";
import SignUp from "./SignUp"


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


