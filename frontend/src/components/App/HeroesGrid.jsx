import React, { useEffect, useState } from 'react'
import PlayerCard from '../PlayerCard'

export const HeroesGrid = () => {
    const [heroes_list, setHeroes_list] = useState([])

    useEffect(()=>{
        async function getHeroesTypes(){
            try{
                const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/v1/heroes/types`)
                if(!response.ok){
                    console.log("Se ha producido un error en el recuperado de heroes")
                }
                setHeroes_list(await response.json())
            }catch(error){
                console.error(error)
            }
        }
        getHeroesTypes()
    
    },[heroes_list]);


    async function reclutarPersonaje(personaje){
        try{
            const response = await fetch(import.meta.env.VITE_BACKEND_URL + "/")
            if (!response.ok){throw new Error("No se ha podido reclutar el personaje.")}
            const data = await response.text();
            alert(`${personaje} reclutado\nRespuesta del backend: ${data}`);
        }catch(error){
            alert(error.msg)
        }

    }

  return (
    <>
            { heroes_list.map((hero) =>  (
                <PlayerCard 
                    key={hero.id}
                    img_link={hero.photoUrl} 
                    title={hero.name} 
                    description={hero.description} 
                    badge_1={hero.badge}
                    onClick = {()=>{reclutarPersonaje(hero.title)}}
               ></PlayerCard>))}
              </>
  )
}
