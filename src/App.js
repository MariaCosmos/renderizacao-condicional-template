import styled, { createGlobalStyle } from "styled-components";
import TelaLogin from "./components/TelaLogin/TelaLogin";
import TelaCadastro from "./components/TelaCadastro/TelaCadastro";
import TelaUsuarioCadastrado from "./components/TelaUsuarioCadastrado/TelaUsuarioCadastrado.js";
import { useState } from "react";

const GlobalStyled = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`
const MainContainer = styled.main`
  height: 100vh;
`

function App() {

  const [tela, setTela] = useState("cadastro")

  function trocarTela (event){
    if(tela === "login"){
      setTela("cadastro")
    }else if(tela === "cadastro"){
      setTela("login")
    }
  }

  function trocarTelaCadastrado(event){
    setTela("cadastrado")
  }

  switch(tela){
    case "cadastro":
      return(
       <MainContainer >
         <GlobalStyled/>
         <TelaCadastro trocarTela={trocarTela} trocarTelaCadastrado={trocarTelaCadastrado}/>
       </MainContainer>
      )
    case "login":
      return(
       <MainContainer >
         <GlobalStyled />
         <TelaLogin trocarTela={trocarTela}/>
       </MainContainer>
      )
    case "cadastrado":
      return(
        <MainContainer >
         <GlobalStyled />
         <TelaUsuarioCadastrado/>
       </MainContainer>
      )
  }

  

  /*return (
    <MainContainer >
      <GlobalStyled />
      {tela && <TelaLogin trocarTela={trocarTela} tela={tela}/>}
      {tela && <TelaCadastro trocarTela={trocarTela} tela={tela}/>}
    </MainContainer>
  );*/
}

export default App;