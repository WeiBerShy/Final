import React from 'react'
import {useContext} from 'react'
import {Context} from '../context/Context'
import { Link } from 'react-router-dom'
import Card from './Card'
import styles from '../styles/card.module.css'



function Home() {

  const {data} = useContext(Context)

  return ( 

      <div className={styles.card} >
          {!data? 'Cargando...':data.map((data)=>{
            return ( 
              <Link to={`/pokemon/${data.id}`} key={data.id} className={styles.link}>  
                <Card data={data} key={data.name}/>     
              </Link>                   
          )})}         
      </div>  
  )
}

export default Home