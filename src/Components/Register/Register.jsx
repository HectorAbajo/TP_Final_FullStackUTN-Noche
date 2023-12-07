import "./Register.css";
import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useUserContext } from "../UserContext/UserProvider";

function Register(){
    const baseDatos = "https://647a6fc7d2e5b6101db05b33.mockapi.io/usuarios";
    const {lista} = useUserContext();
    const [isRegistered, setIsRegistered] = useState(false);
    let listCompared = [];

    const [nuevoUsuario, setNuevoUsuario] = useState({
        nombre:"",
        password:"",
        email:"",
        telefono:"",
        permiso:"autorizado"
    })

    const handleInput = (e)=> {
        setNuevoUsuario((prev)=> ({...prev, [e.target.name] : e.target.value}));
    }

    const compartionUsers = () => {
        const userCompared = {email: nuevoUsuario.email};
        listCompared = lista.filter((user)=>( user.email == userCompared.email));
        return listCompared
    }

    const metodPost = (url,usuario) =>{
        fetch(url, 
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(usuario),
            })
            .then(()=> location.reload())
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        compartionUsers();
        if((lista.length > 0) && (listCompared.length < 1)){ 
            metodPost(baseDatos,nuevoUsuario);
            setIsRegistered(true);
        }
        else if(listCompared.length > 0){alert("Ya existe un Usuario con ese Email")};
        return listCompared = [];
    }

    function userList(url){
        fetch(url)
        .then(respuesta => respuesta.json())
        .then(datos => setLista(datos))  
        
        .catch(err => console.error(err, "sin internet"))
    };

    useEffect(() => {
            userList(baseDatos);
            setIsRegistered(false);
            },
        []);
    
    return(

            <form className="formRegister" onSubmit={handleSubmit}>
                <div className="contenedorInput">
                    <label htmlFor="inputNombre">Nombre y Apellido</label>
                    <input onChange={handleInput} name="nombre" type="text" id="inputNombreRegister" required/> 
                </div>
                <div className="contenedorInput">
                    <label htmlFor="inputEmail">Email</label>
                    <input onChange={handleInput} name="email" type="email" id="inputEmailRegister" required/> 
                </div>
                <div className="contenedorInput">
                    <label htmlFor="inputTelefono">Telefono</label>
                    <input onChange={handleInput} name="telefono" type="number" id="inputTelefonoRegister" required/> 
                </div>
                <div className="contenedorInput">
                    <label htmlFor="inputPassword">Password</label>
                    <input onChange={handleInput} name="password" type="password" id="inputPasswordRegister" required/> 
                </div>
                <div className="contenedorInputSubmit">
                    <input onClick={handleSubmit} type="submit" id="inputSubmitRegister" /> 
                </div>
               {isRegistered ? <Navigate to="/login"/> : <></>}
            </form>
    )
}

export default Register
