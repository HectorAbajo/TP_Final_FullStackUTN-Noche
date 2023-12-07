import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";



function Home(){

    return(
        <>
        <Header/>
        <NavBar/>
        <Outlet/>
        <Footer/>
        </>
    )
}

export default Home