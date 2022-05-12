import Header from './components/Header/Header';
import Form from './components/Form/Form';
import List from './components/List/List';
import { getItems } from "./api/config";
import './App.css';
import React from 'react';


function App() {
  const [cards, setCards] = React.useState([])
  const [open, setOpen] = React.useState(false)

  const loadItems = async () => {
    const data = await getItems()
    setCards(data)
    console.log(data)
  }
  React.useEffect(() => {
    loadItems()
  }, [])
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
