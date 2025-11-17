import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {useMockData} from './hooks/useMockData'
import { Transaction } from './types/transaction.dto';

function App() {
  const {getData} = useMockData();
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    const data = getData();
    if(data) setTransactions(data);
  },[getData]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Check you transactions here:
        </p>
        <ul>
          {transactions.map(t => <li>{t.description}: ${t.amount}</li>)}
        </ul>
      </header>
    </div>
  );
}

export default App;
