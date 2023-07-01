import React from 'react'
import { useParams } from 'react-router-dom'


function Pokemon({data}) {

  const {id} = useParams()
  const pokemon = data.find(datas => datas.id == id)
  

  if(!pokemon) return <h1>No se encontro el pokemon</h1>

  return (
    <div>
        <img src={pokemon.sprites.other['official-artwork'].front_default} alt="hola" ></img>
        {pokemon.id==7 ? <h2>Vamo a Calmarno</h2>:<h1>{pokemon.name}</h1>}
        <h3>Habilidad: {pokemon.abilities[0]?.ability.name}</h3>
        <h3>Habilidad oculta: {pokemon.abilities[1]?.ability.name}</h3>
        <h3>Tipo: {pokemon.types[0]?.type.name} {pokemon.types[1]?.type.name} </h3>
    </div>
  )
}

export default Pokemon