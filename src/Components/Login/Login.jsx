import { Navigate, NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useUserContext } from "../UserContext/UserProvider";
import "./Login.css";

function Login(){
    const {userList,clickSubmit, handleInput, isLoged} = useUserContext();
    const baseDatos = "https://647a6fc7d2e5b6101db05b33.mockapi.io/usuarios";
    
    useEffect(()=>{userList(baseDatos)},[])
    return(

        <form className="formLogin">
            <div className="containerInput">
                <label className="labelFormLogin" htmlFor="inputEmailL">Email</label>
                <input onChange={handleInput} name="email" type="email" id="inputEmailLogin" required/> 
            </div>
            <div className="containerInput">
                <label className="labelFormLogin" htmlFor="inputPasswordL">Password</label>
                <input onChange={handleInput} name="password" type="password" id="inputPasswordLogin" required/> 
            </div>
            <div className="containerInputSubmit">
                <input onClick={clickSubmit} type="submit" id="inputSubmitRegister" value="Ingresar"/> 
            </div>
            <div className="containerNavRegister">
            <NavLink to="/register">Registrarme</NavLink>
            </div>
            {isLoged ? <Navigate to="/"/> : <></>}
        </form>
    )
}

export default Login