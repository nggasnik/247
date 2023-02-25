import React, { useState } from 'react';
import { Button, Tab, Tabs } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBContainer, MDBFooter } from "mdbreact";
import './App.css';

function App() {
  const [number, setNumber] = useState(0);
  const [generatedNumbers, setGeneratedNumbers] = useState([]);
  const [smallestPositiveNumber, setSmallestPositiveNumber] = useState(0);

  const handleNumberInput = (e) => {
    setNumber(parseInt(e.target.value));
  };

  const handleGenerate = () => {
    let arr = [];
    while (arr.length < number) {
      let random = Math.floor(Math.random() * 2000001) - 1000000;
      arr.push(random);
    }
    setGeneratedNumbers(arr);
  };

  const handleFindSmallestPositiveNumber = () => {
    let smallest = Math.random.toFixed(0);
    while (generatedNumbers.includes(smallest)) {
      smallest++;
    }
    setSmallestPositiveNumber(smallest);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Erlangga</h1>
      </header>
      <Tabs defaultActiveKey="first">
        <Tab eventKey="first" title="Tab 1">
          <div className="tab-content">
            <h2>Input Angka</h2>
            <input
              type="number"
              min="1"
              max="10000"
              value={number}
              onChange={handleNumberInput}
              className="form-control input-number"
            />
            <br />
            <Button variant="primary" onClick={() => handleGenerate()}>
              Lanjut ke Tab 2
            </Button>
          </div>
        </Tab>
        <Tab eventKey="second" title="Tab 2" disabled={!number}>
          <div className="tab-content">
            <h2>Generate Angka</h2>
            <Button variant="primary" onClick={() => handleGenerate()}>
              Generate
            </Button>
            <table className="table table-hover table-striped table-bordered">
              <thead className="table-header">
                <tr>
                  <th scope="col">No.</th>
                  <th scope="col">Angka Random</th>
                </tr>
              </thead>
              <tbody>
                {generatedNumbers.map((number, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{number}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <br />
            <Button variant="primary" onClick={() => handleFindSmallestPositiveNumber()}>
              Lanjut ke Tab 3
            </Button>
          </div>
        </Tab>
        <Tab eventKey="third" title="Tab 3" disabled={!smallestPositiveNumber}>
          <div className="tab-content">
            <h2>Bilangan Positif Terkecil</h2>
            <p>Bilangan Positif Terkecil: {smallestPositiveNumber}</p>
          </div>
        </Tab>
      </Tabs>
      <MDBFooter color="blue" className="font-small pt-4 mt-4">
        <MDBContainer fluid className="text-center">
          &copy;  {new Date().toLocaleDateString()} Erlangga 
        </MDBContainer>
      </MDBFooter>
    </div>
  );
}

export default App
