import React, { useState } from "react";
import Header from "./components/Header";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Premades from "./pages/Premades";
import ModList from "./pages/ModList";
import FAQ from "./pages/FAQ";
import CommissionPopUp from "./components/CommissionPopUp";
import "./styles/App.css";

function App() {
  const [commissionClicked,setCommissionClicked] = useState(false);

  function handleCommissionClick(toggle){
    setCommissionClicked(toggle);
  }
  
  return (
    <div className="App">
      <HashRouter basename="/">
      {
        commissionClicked && <CommissionPopUp onCommissionClicked={handleCommissionClick}/>
      }
        <header className="App-header">
          <Header onCommissionClicked={handleCommissionClick}/>
        </header>
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Premades" element={<Premades />} />
            <Route path="/ModList" element={<ModList />} />
            <Route path="/FAQ" element={<FAQ />} />
          </Routes>
        </main>
      </HashRouter>
    </div>
  );
}

export default App;
