import React, { useState } from "react";
import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import Info from "./Info";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [sumvalue, setsumvalues] = useState([]);
  const [meanvalue, setmeanvalues] = useState([]);
  const [medianvalue, setmedianvalues] = useState([]);
  const [modevalue, setmodevalue] = useState([]);
  const [countvalue, setcountvalue] = useState([]);
  const [maxvalue, setmaxvalue] = useState([]);
  const [minvalue, setminvalue] = useState([]);
  const [rangevalue, setrangevalue] = useState([]);
  const [geomeanvalue, setgeomean] = useState([]);
  const [stddevvalue, setstddev] = useState([]);
  const [variancevalue, setvariance] = useState([]);
  const [samplestddevvalue, setsamplestddev] = useState([]);
  const [samplevariancevalue, setsamplevariance] = useState([]);


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
      <Button onClick={refresh} id="reset">Reset</Button>
      <br/>
      <div id="wrapper">
      <p>Mean: {meanvalue}</p>
      <p>Median: {medianvalue}</p>
      <p>Sum: {sumvalue}</p>
      <p>Mode: {modevalue}</p> 
      <p>Count: {countvalue}</p>
      <p>Minimum: {minvalue}</p>
      <p>Maximum: {maxvalue}</p>
      <p>Range: {rangevalue}</p>
      <p>Geometric Mean: {geomeanvalue}</p>
      <p>Standard Deviation: {stddevvalue}</p>
      <p>Variance: {variancevalue}</p>
      <p>Sample Standard Deviation: {samplestddevvalue}</p>
      <p>Sample Variance: {samplevariancevalue}</p>
      </div>
      <br/>
      <Info />
      <br/>
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
    setsumvalues(sumvalue => {
      var sum = 0;
      for (var i=0; i<userarray.length; i++) {
        sum += parseFloat(userarray[i]);
      }
      return sum;
    });
    setmeanvalues(meanvalue => {
      var total = 0;
      for(var i = 0; i < userarray.length; i++) {
        total += parseFloat(userarray[i]);
      var mean = total / userarray.length;
      }
      return mean;
    });
    setmedianvalues(medianvalue => {
      if (userarray.length === 0) return 0;
      var medianarray =[...userarray]
      medianarray.sort(function(a,b){
        return a-b;
      });
      console.log(medianarray)
      var half = Math.floor(medianarray.length / 2);
      console.log(half)
      if (medianarray.length % 2){
        var median = medianarray[half];
      }
      else {
        median = (parseFloat((medianarray[half - 1])) + parseFloat(medianarray[half])) / 2.0;
      }
      return median;
    });
    setmodevalue(modevalue => {
      var map = {};
      for (var i=0; i<userarray.length; i++) {
          if (map[userarray[i]] === undefined) {
              map[userarray[i]] = 0;
          }
          map[userarray[i]] += 1;
      }
      var greatestFreq = 0;
      var returnedmode = "";
      var greatestFreqArray =[]
      for (var prop in map) {
          if (map[prop] === greatestFreq) {
            greatestFreqArray.push(prop);
          }
          if (map[prop] > greatestFreq) {
              greatestFreqArray = [];
              greatestFreq = map[prop];
              greatestFreqArray.push(prop);
          }
      }
      console.log(greatestFreqArray)
      console.log(greatestFreqArray)
      if (greatestFreq<=1) {
        returnedmode = "There are no repeated items.";
      }
      if (greatestFreq>1) {
        returnedmode = (greatestFreqArray + " is repeated " + greatestFreq + " times.");
      };
      return returnedmode;
    });
    setcountvalue(countvalue => {
      var count = userarray.length
      return count;
    });
    setminvalue(minvalue => {
      var minarray =[...userarray]
      minarray.sort(function(a,b){
        return a-b;
      });
      return minarray[0];
    });
    setmaxvalue(maxvalue => {
      var maxarray = [...userarray]
      maxarray.sort(function(a,b){
        return a-b;
      });
      return maxarray[(maxarray.length-1)];
    });
    setrangevalue(rangevalue => {
      var rangearray = [...userarray]
      rangearray.sort(function(a,b){
        return a-b;
      });
      return rangearray[(rangearray.length-1)] - rangearray[0];
    });
    setgeomean(geomeanvalue => {
      var product = 1.0;
      for (var i=0; i<userarray.length; i++) {
        product = product * userarray[i];
      }
      var geomean = Math.pow(product, 1.0 / userarray.length);
      return geomean;
    });
    setstddev(stddevvalue => {
      var total = 0;
      for(var i = 0; i < userarray.length; i++) {
        total += parseFloat(userarray[i]);
      var mean = total / userarray.length;
      }
      var stddevarray = [...userarray]
      return Math.sqrt(stddevarray.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / userarray.length)
    });
    setvariance(variancevalue => {
      var total = 0;
      for(var i = 0; i < userarray.length; i++) {
        total += parseFloat(userarray[i]);
      var mean = total / userarray.length;
      }
      var variancearray = [...userarray]
      return (variancearray.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / userarray.length)
    });
    setsamplestddev(samplestddevvalue => {
      var total = 0;
      for(var i = 0; i < userarray.length; i++) {
        total += parseFloat(userarray[i]);
      var mean = total / userarray.length;
      }
      var samplestddevarray = [...userarray]
      return Math.sqrt(samplestddevarray.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / (userarray.length-1))
    });
    setsamplevariance(samplevariancevalue => {
      var total = 0;
      for(var i = 0; i < userarray.length; i++) {
        total += parseFloat(userarray[i]);
      var mean = total / userarray.length;
      }
      var samplevariancearray = [...userarray]
      return (samplevariancearray.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / (userarray.length-1))
    });
  }
  function refresh(){
    window.location.reload("Refresh")
  }
}

export default App;
