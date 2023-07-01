import {createContext, useState, useEffect} from 'react'



export const Context = createContext()

export function ContextProvider(props) {

    const [data, setData] = useState([])
    const [favList, setFavList] = useState(
      localStorage.getItem("Favoritos") ? JSON.parse(localStorage.getItem("Favoritos")) : []
    )
    
    
  

  
    

    const url= 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20'
    
    const fetchApi = async ()=>{
      const response1 = await fetch(url)
      const data1 = await response1.json()
      
      for(const item of data1.results){
        const url2 = item.url;
     
        const response2 = await fetch(url2)
        const data2 = await response2.json()

        setData(preData =>[...preData, data2])
      }
    }


    useEffect(()=>{
        fetchApi()  
    },[])


    function addFav(pokemon){
  
      if(favList.some((fav)=>fav.id===pokemon.id)){
        removeFav(pokemon)
        return
      }

      const newFavs = [...favList, pokemon]
      setFavList(newFavs)
      localStorage.setItem("Favoritos", JSON.stringify(newFavs))
    }

    function removeFav(pokemon){
      const actFavs= favList.filter((poke)=>poke.id!=pokemon.id)

      setFavList(actFavs)
      localStorage.setItem("Favoritos", JSON.stringify(actFavs))
      }


  return (
    <Context.Provider value = {{data,addFav,removeFav, favList}}>
        {props.children}
    </Context.Provider>
  )
}

