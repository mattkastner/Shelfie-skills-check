import React from 'react';
import axios from 'axios'

import Dashboard from './components/Dashboard/Dashboard'
import Form from './components/Form/Form'
import Header from './components/Header/Header'


import './App.css';

function App() {
  return (
    <div className="App">
      App
      <Header />
      <Dashboard />
      <Form />
    </div>
  );
}

export default App;
