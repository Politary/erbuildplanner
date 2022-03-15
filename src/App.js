import logo from './logo.svg';
import './App.css';
import {reinforceParam} from "./json/ReinforceParamWeapon";
import {equipParam} from "./json/EquipParamWeapon";
import {getCorrectStr} from "./utils/getCorrectStr";

function App() {
    const correctStr = getCorrectStr(2020100)
    console.log(correctStr);
    return (
    <div className="App">
      <button>123</button>
    </div>
  );
}

export default App;
