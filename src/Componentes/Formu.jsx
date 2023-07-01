import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from '../styles/form.module.css'

function Formu() {

  const [palabra1,setPalabra1] = useState("")
  const [palabra2,setPalabra2] = useState("")
  
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'Usurio') {
      setPalabra1(value);
    } else if (name === 'Contraseña') {
      setPalabra2(value);
    }
  };
  function handleOnSubmit(palabra1) {
    
     if(palabra1.trim().length <5){
       console.error("EL USUARIO DEBE SER DE MINIMO 5 CARACTERES")
       return
     }
     navigate('/');
   }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleOnSubmit(palabra1, palabra2);
  };

  return (
    <>
      <div className={style.card}>
        <form onSubmit={handleSubmit} className={style.conteiner}>
          <div className={style.formcon}>
            <label htmlFor=""></label>
            <input type="text" name="Usurio" placeholder="Usurio"  onChange={handleInputChange} />
            <label htmlFor=""></label>
            <input type="text" name="Contraseña" placeholder="Contraseña"  onChange={handleInputChange} />
            <a href="" onClick={(e)=>e.preventDefault()}><p>Forgot your password?</p></a>
          </div>
          <div className={style.butcon}>
            <button type="submit">Enviar</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Formu;