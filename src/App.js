import logo from './logo.svg';
import './App.css';
import {LogIn} from "./LogInPage/LogInPage";
import './LogInPage/LogInPage.css'


function App() {
  return (
    <div className="App">
        <button className='LogInButton'>
            Login
        </button>
        <LogIn/>

    </div>
  );
}

export default App;
