import { useState } from "react";
import "./contacto.css";
import { Link } from "react-router-dom";

function Contacto(){
    const [file, setFile] = useState(true);
    const messege = ()=>{alert("Email enviado")}
    return(
        <>
        <div className="contenedorFormulario">
            <form action="">
                <div className="contenedorInput">
                    <label htmlFor="Nombre">Nombre y Apellido</label>
                    <input type="text" name="Nombre" id="inputNombre" required/> 
                </div>
                <div className="contenedorInput">
                    <label htmlFor="Email">Email</label>
                    <input type="email" name="Email" id="inputEmail" required/> 
                </div>
                <div className="contenedorCheck">
                    <label htmlFor="">Razon de Contacto</label>
                    <div className="form-check">
                        <input onClick={()=>setFile(false)} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                        <label className="form-check-label" htmlFor="flexRadioDefault">Sugerencias</label>                    
                    </div>
                    <div className="form-check">
                        <input onClick={()=>setFile(false)} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                        <label className="form-check-label" htmlFor="flexRadioDefault">Reclamos</label> 
                    </div>
                    <div className="form-check">
                        <input onClick={()=>setFile(true)} className= "form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"/>
                        <label className="form-check-label" htmlFor="flexRadioDefault">CV</label>
                    </div>
                    <div className= {`containerFile ${file ? "":"hidden"}`}>
                        <input  type="file" />
                    </div>
                    <textarea className= {`${file ? "hidden":""}`} name="textArea" id="textContact" cols="30" rows="10" placeholder="escriba su reclamo o sugerencia"></textarea>
                </div>
                <input onClick={messege} className=" btnSubmit" type="submit" value ="Enviar"/>
            </form>
        </div>
        <div>
            <p className="linkHome"><Link to="/">Home</Link></p>
        </div>
        </>
    )
}

export default Contacto