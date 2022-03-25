import React from 'react';
import Header from './components/Header';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Premades from './pages/Premades';
import ModList from './pages/ModList';
import FAQ from './pages/FAQ';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <Header/>
        </header>
        <main className="main">
          <Routes>
            <Route path="/" element = {<Home />} />
            <Route path="/Premades" element = {<Premades />} />
            <Route path="/ModList" element = {<ModList />} />
            <Route path="/FAQ" element = {<FAQ />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
