import React from 'react'
import './App.css';
import Body from './Body';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
        <div className="app_header">
          <Header />
        </div>
      <div className="app_body">
        <Body />
      </div>
      <div className="app_footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
