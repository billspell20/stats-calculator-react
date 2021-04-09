import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
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
      <Footer />
    </div>
  );
  function handleInput(e) {
      e.currentTarget.value = e.currentTarget.value.replace(/[^0-9.,-]/g, '');
  }
  function getValues(e) {
    e.preventDefault();
    var textarea = document.getElementById('uservalues');
    console.log(textarea.value.split(','));
  }
}

export default App;
