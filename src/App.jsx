import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar.jsx";
import Testimonials from "./Testimonials.jsx";

function App() {
    const handleSubmit = event => {
    // event.preventDefault(); <-- This statement will stop reloading page when form is submitted
    alert('Form Submitted. You have successfully subscribed Machau Residencies!')
    }
  return (
    <div>
      <Navbar />
      <div className="App">
      <header className="App-header">
        <h1 style={{marginTop: "6vh", marginBottom: "-3vh"}}>TOP REVIEWS</h1>
        <Testimonials />
      </header>
    </div>
    <div className="wrapper">
      <h2 style={{marginTop: "5vh"}}>FILL THIS FORM TO SUBSCRIBE US</h2>
      <form onSubmit={handleSubmit}>
      <fieldset>
         <label>
           <h5 style={{marginTop: "-2vh"}}>Name</h5>
           <input style={{width: "30vw", height: "5vh"}} name="name" />
           <h5 style={{marginTop: "3vh"}}>E-mail</h5>
           <input style={{width: "30vw", height: "5vh"}} email="email" />
           <h5 style={{marginTop: "3vh"}}>Mobile Number</h5>
           <input style={{width: "30vw", height: "5vh"}} mobile="mobile" />
           <h5 style={{marginTop: "3vh"}}>Room Number</h5>
           <input style={{width: "30vw", height: "5vh"}} roomnumber="roomnumber" />
         </label>
       </fieldset>
       <button type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
}

export default App
