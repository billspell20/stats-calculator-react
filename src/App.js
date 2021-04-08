import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Statistics Calculator</h1>
      <h2>
        Provide your values, separated by a comma with no spaces, in the below
        text box. (i.e. 100,200,300)
      </h2>
      <form>
      <textarea id="uservalues" name="uservalues" rows="4" cols="50" placeholder="Enter Values Here...">
      </textarea>
      <br/>
      <input type="submit" value="Calculate"/>
      </form>
    </div>
  );
}

export default App;
