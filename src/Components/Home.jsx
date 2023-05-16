import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import { Button } from "react-bootstrap";
import { Table } from "react-bootstrap";
import Header from "./Header.jsx"

function Home() {
  return (
    

      <><Header />
      
      {/* <body>
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
    </body> */}

    <body>
      <div className="container">
          <form action="/livros" method="post" className="formbooks">
            <label className="form-inputs"> Titulo:
            <input className="text-books" type="text" id="titulo" placeholder=" titulo do livro"/>
            </label>
            <button type="submit" className="input-books">Cadastrar</button>
          </form>
      </div>
    </body>
    
    </>
  );
}

export default Home;
