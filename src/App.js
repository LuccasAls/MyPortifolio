import React from "react";
import "./App.css"
import Navbar from './components/Navbar';
import Getting from './components/Getting';

const App = () => {
  return (
    <div>
      <section>
        <Navbar />
        <div>
          <Getting/>
        </div>
      </section>
    </div>
  )
}
export default App