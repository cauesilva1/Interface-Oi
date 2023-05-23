import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import { Button } from "react-bootstrap";
import { Table } from "react-bootstrap";
import Header from "./Header.jsx"

function Home() {
  return (
    

      <><Header />
      
      <body>
      <div className="container">
        <div className="ladoD">
          <div className="table-left">
            <form action="" method="post" className="form">
                <h3>adicione sua nota aqui:</h3>
              <div className="form-princ">
            <label htmlFor="" className="input">
                Titulo:
                <input 
                type="text" 
                // value={titulo}
                />
              </label>
              <label htmlFor="" className="input">
                Nota:
                <input 
                type="text" 
                // value={nota}
                />
              </label>
              </div>
              <div>
              <input type="radio" id="huey" name="prioridade" className="input-radio" value="huey" checked />
              <label for="huey">Prioridade</label>
              </div>
              <div>
              <input type="radio" id="huey" name="prioridade" className="input-radio" value="huey" checked />
              <label for="huey">Não Prioridade</label>
              </div>

            </form>
          </div>
          <div>
            <div className="divFinal">
              <h1>Ultima nota adicionada Foi:</h1>
              <h2>Titulo</h2>
            </div>
          </div>

        </div>
        <div className="ladoE">
          <Table className="table-head" striped bordered hover>
            <thead>
              <tr>
                <th>Titulo:</th>
                <th>Nota:</th>
                <th>Prioridade:</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Teste</td>
                <td>Teste1</td>
                <td>true or false</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </body>
    
    </>
  );
}

export default Home;
