import React from 'react'
import './Style/App.css';

import Reviews from './Reviw';
function App() {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>Our reviews</h2>
          <div className="underline"></div>
        </div>
        <Reviews/>
      </section>
    </main>
  );
}

export default App;
