import './App.css';
import Header from './Header/Header.js';
import Footer from './Footer/Footer.js';
import Main from './Main/Main.js';
import { animals } from './data.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header greeting="Welcome to my animal sanctuary!" className="header" />

        <Main animals={animals} />

        <Footer email="contact for inquiries: delaney@sanctuaryqueen.com" />
      </header>
    </div>
  );
}

export default App;
