
import './App.css';
import Header from './components/Header';
import React ,{useState} from 'react';
function App() {
const [num,setNum]= useState(0);

function dec(){
  setNum(num-1);
  if(num==0){
    setNum(0);
  }
}

const inc=(n)=>{
  setNum(num+n);
}

  return (
    <div className="App">
      <Header/>
      <div className="main">
        <h1 className="heading">{num}</h1>
        <button className="g btn" onClick={()=> inc(1)} >increament</button>
        <button className="r btn" onClick={dec}>decreament</button>
      </div>
    </div>
  );
}

export default App;
