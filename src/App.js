import Header from './components/Header/Header';
import Form from './components/Form/Form';
import List from './components/List/List';
import './App.css';


function App() {
  return (
    <div className="container">
      <div className="main-card">
        <Header/>
        <main>
          <Form/>
          <List/>
        </main>
      </div>
    </div>
  );
}

export default App;
