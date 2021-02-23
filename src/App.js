
import { useContext } from 'react';
import './App.css';
import ShowGrid from './components/ShowGrid'
import { Context } from './Context';

function App() {
  const {grid,time,seTtimer,message,isflag}=useContext(Context);
  return (
    <div className="App">
      <h1>{message} {isflag && time}</h1>
      {grid.map((item,index)=>(
        <ShowGrid key={index} row={item} rowNum={index} />
      ))}

      <h1>Timer : {time}</h1>
      
      <button onClick={seTtimer}>Start</button>
    </div>
  );
}

export default App;
