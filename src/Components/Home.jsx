import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import { Button } from "react-bootstrap";
import { Table } from "react-bootstrap";
import minhaImagem from './images/LogoOI.png';

function Home() {
  return (
    <>
      <div>
        <header>
          <div className="green-bar">
            <img className="img" src={minhaImagem} alt="Logo-OI" />
          </div>
        </header>
      </div>
      <div>
        <body>
          <div className="container">
            <div className="ladoD">
              <div className="table-left">
                <Table className="table-head" striped bordered hover>
                  <thead>
                    <tr>
                      <th>ID:</th>
                      <th>Nome:</th>
                      <th>Valor:</th>
                      <th>Procedimento:</th>
                      <th>Profissional:</th>
                      <th>Horario:</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Caue</td>
                      <td>R$ 5,00</td>
                      <td>Fisioterapia geral</td>
                      <td>Joao figueiredo</td>
                      <td>12:00</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Caue</td>
                      <td>R$ 5,00</td>
                      <td>Fisioterapia geral</td>
                      <td>Joao figueiredo</td>
                      <td>12:00</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Caue</td>
                      <td>R$ 5,00</td>
                      <td>Fisioterapia geral</td>
                      <td>Joao figueiredo</td>
                      <td>12:00</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Caue</td>
                      <td>R$ 5,00</td>
                      <td>Fisioterapia geral</td>
                      <td>Joao figueiredo</td>
                      <td>12:00</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <div>
                <div className="divFinal">
                    <h1>informação</h1>
                </div>
              </div>
            
            </div>
            <div className="ladoE">
            <Table className="table-head" striped bordered hover>
                <thead>
                  <tr>
                    <th>ID:</th>
                    <th>Nome:</th>
                    <th>Valor:</th>
                    <th>Procedimento:</th>
                    <th>Profissional:</th>
                    <th>Horario:</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Caue</td>
                    <td>R$ 5,00</td>
                    <td>Fisioterapia geral</td>
                    <td>Joao figueiredo</td>
                    <td>12:00</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </body>
      </div>
    </>
  );
}

export default Home;
