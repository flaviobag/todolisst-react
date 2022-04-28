import Header from './components/Header/Header';
import Form from './components/Form/Form';
import List from './components/List/List';
import './App.css';
import React from 'react';


function App() {
  const [cards, setCards] = React.useState([
    {id: 1, title: "Qualquer coisa"},
    {id: 2, title: "Outra Coisa"},
    {id: 3, title: "Repete a outra coisa"}
  ])
  
  return (
    <div className="container">
      <div className="main-card">
        <Header/>
        <main>
          <Form/>
          <List cards={cards}/>
          <button onClick={() => setCards([...cards,{id: 4, title: "Repete a outra coisa de novo"}])}>click me</button>
        </main>
      </div>
    </div>
  );
}

export default App;
