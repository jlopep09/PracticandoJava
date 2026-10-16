import { useAuth0 } from "@auth0/auth0-react";

const LogoutBtn = () => {
    const {
    logout: auth0Logout, 
  } = useAuth0();

  const logout = () =>
    auth0Logout({ logoutParams: { returnTo: window.location.origin } });


  return (
    <a className='w-full' onClick={logout}>Cerrar sesión</a>
  )
}

export default LogoutBtn


