import { Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./Components/ProtectedRoutes/ProtectedRoutes";
import Carrusel from './Components/Carrusel/Carrusel'
import Home from "./Components/Home/Home";
import Contacto from './Components/Contacto/Contacto'
import Login from './Components/Login/Login'
import Nosotros from './Components/Nosotros/Nosotros'
import Register from './Components/Register/Register'
import Tabla from './Components/Tabla/Tabla'
import UserProvider from "./Components/UserContext/UserProvider";

function App() {

  return (
      <UserProvider>
        <Routes>
          <Route path='/' element={<Home/>}>
            <Route index element={<Carrusel/>}/>
            <Route element={<ProtectedRoutes/>}>
                <Route path='/contacto' element={<Contacto/>}/>
                <Route path='/nosotros' element={<Nosotros/>}/>
                <Route path='/tabla' element={<Tabla/>}/> 
            </Route>
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/*' element={<h2>Not Found</h2>}/>
          </Route>
        </Routes>
      </UserProvider>
  )
}

export default App