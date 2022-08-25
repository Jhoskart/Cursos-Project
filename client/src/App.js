import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ListadoDeCursos from './components/listadoDeCursos/ListadoDeCursos';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ListadoDeCursos />} />
      </Routes>
    </div>
  );
}

export default App;
