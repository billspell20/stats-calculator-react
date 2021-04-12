import React, { useState } from "react";
import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [uservalue, setvalues] = useState([]);

  return (
    <div className="App">
      <Header />
      <h2 id="introtext">
        Provide your values, separated by a comma with no spaces, in the below
        text box. (i.e. 100,200,300)
      </h2>
      <form onSubmit={getValues}>
      <textarea id="uservalues" name="uservalues" rows="5" cols="70" placeholder="Enter values here" onKeyUp={handleInput}>
      </textarea>
      <br/>
      <Button type='submit'>Calculate</Button>
      </form>
      <br/>
      <Button onClick={refresh}>Reset</Button>
      <br/>
      <p>Sum: {uservalue}</p>
      <Footer />
    </div>
  );
  function handleInput(e) {
      e.currentTarget.value = e.currentTarget.value.replace(/[^0-9.,-]/g, '');
  }
  function getValues(e) {
    e.preventDefault();
    var textarea = document.getElementById('uservalues');
    var userarray = textarea.value.split(',');
    console.log(userarray)
    setvalues(uservalue => {
      var sum = 0;
      for (var i=0; i<userarray.length; i++) {
        sum += parseFloat(userarray[i]);
      }
      return sum;
    });
  }
  function refresh(){
    window.location.reload("Refresh")
  }
}

export default App;
