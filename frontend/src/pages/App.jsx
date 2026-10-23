import { useAuth0 } from "@auth0/auth0-react";
import { useAppUser } from "./../hooks/appUser";
import { HeroesGrid } from "./../components/App/HeroesGrid";



function App() {
    const {
    isLoading, 
    isAuthenticated

  } = useAuth0();

  const {appUser, isLoading: isAppUserLoading} = useAppUser();

  if (!appUser && !isAppUserLoading && isAuthenticated) {
    return <p className="justify-center text-center my-8 ">No hay un perfil disponible.</p>;
  }

  return (
    <>
      {isLoading && (
        <div className="w-full "><p className="justify-center text-center my-8 ">Cargando...</p></div>
      
      )}
      {!isAuthenticated && !isAppUserLoading && (
        <div className="w-full "><p className="justify-center text-center my-8 ">Inicie sesión para poder usar la aplicación</p></div>
      )}
      {(!isLoading && isAuthenticated) && (
        <>
          <div className=" text-center text-xl font-bold my-4">Seleccione un personaje para reclutar</div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center gap-6">
            <HeroesGrid></HeroesGrid>
          </div>
        </>
      )}
    </>
  )
}

export default App
