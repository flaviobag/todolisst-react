import Header from './components/Header/Header';
import Form from './components/Form/Form';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="main-card">
        <Header/>
        <main>
          <Form/>
        </main>
      </div>
    </div>
  );
}

export default App;
