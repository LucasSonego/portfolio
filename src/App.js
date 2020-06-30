import React from "react";
import {
  GoLocation,
  GoOrganization,
  GoMail,
  GoMarkGithub,
} from "react-icons/go";
import logo from "./assets/logo.svg";
import { Container } from "./styles";

function App() {
  return (
    <Container>
      <div className="about">
        <div className="text">
          <h1>{"<Lucas Sônego />"}</h1>
          <div className="row">
            <GoLocation />
            <a
              href="https://www.google.com.br/maps/place/Palotina,+PR,+85950-000/@-24.3024914,-53.8605065,13z/data=!4m5!3m4!1s0x94f36e693ba7ae7d:0xbbadf6f52de74c51!8m2!3d-24.2821555!4d-53.8345983"
              target="_blank"
              rel="noopener noreferrer"
            >
              Palotina - PR
            </a>
          </div>
          <div className="row">
            <GoOrganization />
            <a
              href="http://www.palotina.ufpr.br/portal/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Universidade Federal do Paraná
            </a>
          </div>
          <div className="row">
            <GoMail />
            <a
              href="mailto:lucassonego@ufpr.br"
              target="_blank"
              rel="noopener noreferrer"
            >
              lucassonego@ufpr.br
            </a>
          </div>
          <div className="row">
            <GoMarkGithub />
            <a
              href="https://github.com/LucasSonego"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/LucasSonego
            </a>
          </div>
        </div>

        <div className="logo">
          <img src={logo} alt="" />
        </div>
      </div>
    </Container>
  );
}

export default App;
