import './App.css';
import { Header,Footer,Hello } from "./Header";
import Hello1 from "./componenet/Nasir";
import {PracticeOfComponent} from './Practice';
import Xyz,{Xyzz} from './ImportAndExport';
function App() {

  let n= 'Front End';
  
  return (
    
    <div className="App">
      <Header/>
      <Hello/>
      <Hello1/>
      <h1>{n}</h1>

      <PracticeOfComponent/>

      <Xyz/>
      <Xyzz/>
      <Footer/>
  
    </div>
  );
}

export default App;