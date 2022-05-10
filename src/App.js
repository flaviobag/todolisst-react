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
  const [open, setOpen] = React.useState(false)

  const addNewCard = (item) => {
    setCards([...cards, item])
  }

  
  return (
    <div className="container">
      <div className="main-card">
        <Header setOpen={setOpen} open={open} />
        <main>
          {
            open && <Form addNewCard={addNewCard}/>
          }
          <List cards={cards} setCards={setCards}/>
        </main>
      </div>
    </div>
  );
}

export default App;
