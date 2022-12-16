import 'react-awesome-button/dist/styles.css';
import './App.css';
import Button from './components/button';


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
      <h1 id="contador"> Contador: {contador} </h1>
      <div>
      {/* Este botón es para facilitar probar que los cambios pasan los pipelines */}
      <Button id= "btn-sum2" className="custom-btn btn-8 " onClick = {incrementar} value="Incrementar" /> 
      <Button id="btn-sum" className="custom-btn btn-3" onClick = {incrementar} value="Incrementar" /> 
      <Button id="btn-sub" className="custom-btn btn-7" onClick = {decrementar} value= "Decrementar" />
      <Button id="btn-restart" className="custom-btn btn-5" onClick = {reiniciar} value="Reiniciar" />
      </div>
    </div>
  );
}

export default App;
