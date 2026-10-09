import PlayerCard from "./components/PlayerCard"

async function reclutarPersonaje(personaje){

  try{
    const response = await fetch("http://localhost:8080/")
    if (!response.ok){throw new Error("No se ha podido reclutar el personaje.")}
    const data = await response.text();
    alert(`${personaje} reclutado\nRespuesta del backend: ${data}`);
  }catch(error){
    alert(error.msg)
  }

}


function App() {

  return (
    <>
      <div className=" text-center text-xl font-bold my-4">Seleccione un personaje para reclutar</div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center gap-6">
        <PlayerCard 
          img_link={"src/assets/warrior.png"} 
          title={"Guerrero"} 
          description={"Muro de acero. Aguanta la primera línea y no retrocede."} 
          badge_1={"Armadura"}
          onClick = {()=>{reclutarPersonaje("Guerrero")}}
          >
        </PlayerCard>
        <PlayerCard 
          img_link={"src/assets/archer.png"}
          title={"Arquero"} 
          description={"Ojo de halcón. Golpea antes de que el enemigo lo vea."} 
          badge_1={"Triple disparo"}
          onClick = {()=>{reclutarPersonaje("Arquero")}}>          </PlayerCard>
        <PlayerCard 
          img_link={"src/assets/wizard.png"}           
          title={"Mago"} 
          description={"Maestro de lo arcano. Frágil de cuerpo, temible en hechizos."} 
          badge_1={"Maná"}
          onClick = {()=>{reclutarPersonaje("Mago")}}></PlayerCard>
      </div>
    </>
  )
}

export default App
