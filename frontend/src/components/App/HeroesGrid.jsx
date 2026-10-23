import React, { useEffect, useState } from 'react'
import PlayerCard from '../PlayerCard'
import { useAuth0 } from '@auth0/auth0-react';

export const HeroesGrid = () => {
    const [heroes_list, setHeroes_list] = useState([])
    const {getAccessTokenSilently} = useAuth0();
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
    
    },[]);


    async function reclutarPersonaje(hero_type){
        try{
            const accessToken = await getAccessTokenSilently({
                authorizationParams: {
                    audience: import.meta.env.VITE_AUTH0_AUDIENCE,
                },
            });
            const response = await fetch(import.meta.env.VITE_BACKEND_URL + "/v1/heroes/?heroType=" + hero_type+"", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "authorization": `Bearer ${accessToken}`
                },
                body: JSON.stringify({
                    heroType: hero_type
                })
            });
            if (!response.ok){throw new Error("No se ha podido reclutar el personaje.")}
            const data = await response.text();
            alert(`Personaje reclutado\nRespuesta del backend: ${data}`);
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
                    onClick = {()=>{reclutarPersonaje(hero.id)}}
               ></PlayerCard>))}
              </>
  )
}
