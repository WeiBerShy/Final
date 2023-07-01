import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../context/Context'
import Card from './Card'
import styles from '../styles/card.module.css'
import { Link } from 'react-router-dom'

function Favoritos() {

    

    const {favList} = useContext(Context)

    
    

  return (
    <>   
        <div>
            <h2>Lista de Favoritos</h2>
        </div>
        <div className={styles.card}>
            {favList.length==0? <h2>No tienes ningun Pokemon en favoritos</h2>: favList.map((pokemon)=>{              
                return (
                    <>                      
                        <Link to={`/pokemon/${pokemon.id}`} key={pokemon.id} className={styles.link}>
                            <Card data={pokemon} />                   
                        </Link>
                    </>                
            )})}        
        </div>
    
    </>  
  )
}

export default Favoritos