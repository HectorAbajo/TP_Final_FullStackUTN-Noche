import { NavLink } from 'react-router-dom';
import { useState , useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, A11y } from 'swiper/modules';
import { useUserContext } from "../UserContext/UserProvider";
import Loading from '../isLoading/isLoading';
import "./Carrusel.css"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';


function Carrusel () {
    const { isLoged } = useUserContext();
    const miUrl= "https://647a6fc7d2e5b6101db05b33.mockapi.io/usuarios";
    const [datosApi, setDatosApi] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{

        function traerApi(url){
            fetch(url)
            .then((respuesta) => respuesta.json())
            .then((datos) =>{
                setLoading(false);
                setDatosApi(datos);
            })
            .catch(err => console.error(err, "sin internet"))
        };

        traerApi(miUrl);
        
    },[])

    return(
        <div className='containerHome'>
            <div className="contenedorCarrusel"> 
                <Swiper
                    modules={[Scrollbar, A11y]}
                    scrollbar={{ draggable: true }}
                    spaceBetween={0}
                    slidesPerView={3}               
                >{loading ? (<Loading/> ) : 
                (<div> {datosApi.map((elemento) =>(
                    <SwiperSlide className="cardCarrusel" key={elemento.id}>
                        <img className="imgCarrusel" src={elemento.avatar} alt="imagen" />                                
                    </SwiperSlide> ))}                                                                 
                </div>)
                }               
                </Swiper>
            </div>
            <article className='articleHome'>
                {isLoged? <></> : <p className='pArticle'>
                    Quieres conocer mas sobre quienes somos, que hacemos y como lo hacemos.<br/>
                    <NavLink to="/login">Logeate</NavLink> y podras acceder y despejar tus curiosidades sobre esta comunidad de aprendizaje
                </p>}
            </article>
        </div>
    )
}

export default Carrusel