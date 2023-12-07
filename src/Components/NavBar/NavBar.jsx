import { NavLink } from "react-router-dom";
import { useUserContext } from "../UserContext/UserProvider";
import "./NavBar.css";
import { useState } from "react";

function NavBar(){
    const {handleLogout ,isLoged} = useUserContext();
    const [show, setShow] = useState(false);
    const toggle =()=>{
        setShow(!show)
     };
    return(
        <div className="containerNav">
            {isLoged ? <button className="btnLogout" onClick={handleLogout}>Logout</button> : <NavLink className="navLogin" to="/login">Login</NavLink>}
            
            <button onClick ={toggle} className="btnMain"><i class="fa-solid fa-bars"></i></button>
            <nav className={`navBar  ${show ? "classHidden" : ""}`} >
                <li className="liNav"><NavLink to="/">Home</NavLink></li>
                <li className="liNav"><NavLink to="/nosotros">Nosotros</NavLink></li>
                <li className="liNav"><NavLink to="/contacto">Contacto</NavLink></li>
                <li className="liNav"><NavLink to="/tabla">Tabla</NavLink></li>   
            </nav>
        </div>
    )
}

export default NavBar