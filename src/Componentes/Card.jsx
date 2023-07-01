import React, { useContext, useState } from 'react'
import styles from '../styles/card.module.css'
import { Context } from '../context/Context';

function Card({data}) {

  const {addFav} = useContext(Context)
  
  const handleButtonClick = (event,data) => {
    event.preventDefault();
    addFav(data)
  };
  
  return (
    <div key={data.id} className={styles.pkmconteiner}>
        <button onClick={(e)=>handleButtonClick(e,data)}>Fav</button>
        <img className={styles.imgp} src={data.sprites.other['official-artwork'].front_default} alt="hola" ></img>
        <h1>{data.name}</h1> 
    </div>
  )
}

export default Card