import React from 'react';
import Header from './components/Header';
import Meme from './components/Meme';
import Footer from './components/Footer';
import './styles.css';


function App() {
  return (
    <div className="App">
      <Header />
      <Meme />
      <Footer />
    </div>
  );
}

export default App;
