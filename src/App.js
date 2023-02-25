import React, { useState } from "react"; 
import { Button, Tab, Tabs } from "react-bootstrap"; 
import "bootstrap/dist/css/bootstrap.min.css"; 
import "./App.css"; 
 
function App() { 
  const [number, setNumber] = useState(""); 
  const [generatedNumbers, setGeneratedNumbers] = useState([]); 
  const [smallestPositiveNumber, setSmallestPositiveNumber] = useState(null); 
  const [activeTab, setActiveTab] = useState("first"); 
  const [tab1Disable, setTab1Disable] = useState(false) 
  const [tab2Disable, setTab2Disable] = useState(true) 
 
  const handleNumberInput = (e) => { 
    const input = e.target.value; 
    if (input >= 1 & input <= 10000 || input === ""){ 
      setNumber(input); 
    } 
  }; 
 
  const handleGenerate = () => { 
    // generate random numbers 
    const randomNumbers = []; 
    for (let i = 1; i < number; i++) { 
      randomNumbers.push(Math.floor(Math.random() * 2000001) - 1000000); 
    } 
    setGeneratedNumbers(randomNumbers); 
 
    // activate next tab 
    setTab2Disable(false); 
    setActiveTab("second"); 
    setTab1Disable(true); 
  }; 
 
  const handleFindSmallestPositiveNumber = () => { 
    // find smallest positive number 
    let smallestNumber = Infinity; 
    for (let i = 0; i < generatedNumbers.length; i++) { 
      const number = generatedNumbers[i]; 
      if (number > 0 && number < smallestNumber) { 
        smallestNumber = number; 
      } 
    } 
    if (smallestNumber === Infinity) { 
      smallestNumber = null; 
    } 
    setSmallestPositiveNumber(smallestNumber); 
 
    // activate next tab 
    setActiveTab("third"); 
    setTab1Disable(true); 
    setTab2Disable(true); 
  }; 
 
  const handleReset = () => { 
    setNumber(""); 
    setGeneratedNumbers([]); 
    setSmallestPositiveNumber(null); 
    setActiveTab("first"); 
  }; 
 
  return ( 
    <> 
      <div className="App"> 
        <header className="App-header"> 
          <h1>Erlangga</h1> 
        </header> 
        <div className="container"> 
          <Tabs activeKey={activeTab} onSelect={(k) => setActiveTab(k)}> 
            <Tab eventKey="first" title="Tab 1" disabled={tab1Disable}> 
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
                <Button 
                  variant="primary" 
                  onClick={handleGenerate} 
                  disabled={!number} 
                > 
                  Generate 
                </Button> 
              </div> 
            </Tab> 
            <Tab eventKey="second" title="Tab 2" disabled={tab2Disable}> 
              <div className="tab-content"> 
                <h2>Random Numbers</h2> 
                <ul> 
                  {generatedNumbers.map((number, index) => ( 
                    <li key={index}>{number}</li> 
                  ))} 
                </ul> 
                <br /> 
                <Button 
                  variant="primary" 
                  onClick={handleFindSmallestPositiveNumber} 
                  disabled={!generatedNumbers.length} 
                > 
                  Find Smallest Positive Number 
                </Button> 
              </div> 
            </Tab> 
 
            <Tab eventKey="third" title="Tab 3" disabled={smallestPositiveNumber === null}> 
              <div className="tab-content"> 
                <h2>Smallest Positive Number</h2> 
                <p>{smallestPositiveNumber}</p> 
                <br /> 
                <Button variant="primary" onClick={handleReset}> 
                  Reset 
                </Button> 
              </div> 
            </Tab> 
          </Tabs> 
        </div> 
      </div> 
 
    <div className="border border-primary position-relative " style={{top: 400}} > 
 
      <footer 
      className="w-100 " 
      style={{ height: 50 ,
}} 
    > 
      <div 
        xs={11} 
        style={{ width: "100%" }} 
        className="bg-primary h-100 d-flex flex-column justify-content-center" 
      > 
        <p 
          className="text-center text-white p-0 m-0" 
          style={{ fontSize: 18, fontWeight: "400" }} 
        > 
          &copy; {new Date().toLocaleDateString()} Erlangga 
        </p> 
      </div> 
    </footer> 
    </div> 
    </> 
  ); 
} 
 
export default App;