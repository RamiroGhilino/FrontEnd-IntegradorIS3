import 'react-awesome-button/dist/styles.css';
import './App.css';


// TODO hacer 1 solo repo con todo

import { useEffect, useState } from 'react';

function App() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    (async () => {
      const res = await fetch(process.env.REACT_APP_BACK_URL);
      const obj = await res.json();
      console.log(obj);
      setContador(obj['value']);
    })();
  }, []);

  const incrementar = async () => {
    console.log("incrementar");
    const res = await fetch(process.env.REACT_APP_BACK_URL + '/add')
    const obj = await res.json();
    setContador(obj['value']);
  }

  const decrementar = async () => {
    
    const res = await fetch(process.env.REACT_APP_BACK_URL + '/sub')
    const obj = await res.json();
    setContador(obj['value']);
  }

  const reiniciar = async () => {
    const res = await fetch(process.env.REACT_APP_BACK_URL + '/restart')
    const obj = await res.json();
    setContador(obj['value']);
  }

  return (
    <div className="App">
      <h1> Contador: {contador} </h1>
      <div>
      <button className="custom-btn btn-3" onClick = {incrementar}><span> Incrementar </span></button>
      <button className="custom-btn btn-7" onClick = {decrementar}><span> Decrementar </span></button>
      <button className="custom-btn btn-5" onClick = {reiniciar}><span> Reiniciar </span></button>
      </div>
    </div>
  );
}

export default App;
