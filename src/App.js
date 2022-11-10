import 'react-awesome-button/dist/styles.css';
import './App.css';

import { useState } from 'react';

function App() {
  const [contador, setContador] = useState(0);
  //const [contador, setContador] = useState(0);
  const incrementar = async () => {
    console.log('Incremento');
    const res = await fetch('http://localhost:5050/add')
    const obj = await res.json();
    console.log(obj);
    console.log("Add");
    setContador(obj['value']);
  }

  const decrementar = async () => {
    console.log('Decremento');
    const res = await fetch('http://localhost:5050/sub')
    const obj = await res.json();
    console.log(obj);
    console.log("Sub");
    setContador(obj['value']);
  }

  return (
    <div className="App">
      <h1> Contador: {contador} </h1>
      <div>
      <button className="custom-btn btn-3" onClick = {incrementar}><span> Incrementar </span></button>
      <button className="custom-btn btn-7" onClick = {decrementar}><span> Decrementar </span></button>
      </div>
    </div>
  );
}

export default App;
