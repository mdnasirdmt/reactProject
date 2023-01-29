
import './App.css';
import Timer from './components/Timer1';
import Timer1 from './components/Timer';
import { Calculation } from './components/Calculation';
function App() {
  return (
    <div className="App">
      <Timer/>
      <Timer1/>
      <Calculation/>
    </div>
  );
}

export default App;
