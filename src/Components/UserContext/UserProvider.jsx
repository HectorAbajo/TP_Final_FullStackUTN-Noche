import React , { createContext, useCallback, useContext, useEffect, useState } from "react";

const UserContext = createContext();

export function useUserContext() {
    return useContext(UserContext);
}

const UserProvider = ({ children }) =>{
    
    const [isLoged , setIsLoged] = useState(false);
    const [lista, setLista] = useState([]);
    const [userLogin, setUserLogin] = useState({
        email: "",
        password: ""
    });

    // const [newUser, setNewUser] = useState({
    //     imagen : "",
    //     nombre: ""
    // });

    let listCompared = [];
    
    const handleLogin = ()=>{
        setIsLoged(true);
        setNewUser({
            imagen : listCompared[0].avatar,
            nombre : listCompared[0].nombre
        });
        
        localStorage.setItem("user","true");
    }

    const handleLogout = ()=>{
        setIsLoged(false);
        setUserLogin({
            email: "",
            password: ""
        });
        localStorage.removeItem("user");
        localStorage.removeItem("newUser");
    }

    const handleInput = (e)=> {
        setUserLogin((prev)=> ({...prev, [e.target.name] : e.target.value}));
    }

    const compartionUsers = () => {
        listCompared = lista.filter((user)=>( (user.email == userLogin.email)&&(user.password == userLogin.password)));
        return listCompared    
    }  

    const clickSubmit = (e)=>{
        e.preventDefault();
        compartionUsers();
        if(listCompared.length == 1){
            handleLogin();
        }
            else if(listCompared.length == 0){alert("Usuario o Contraseña Incorrecta")};
        return listCompared 
    }

    
    function userList(url){
        fetch(url)
        .then(respuesta => {
            if(!respuesta.ok) throw new Error("error en la respuesta");
                return respuesta.json();
        })
        .then(datos => setLista(datos))  
        
        .catch(err => console.error(err, "sin internet"))
    };

    useEffect(()=>{
        const user = localStorage.getItem("user");
        if(user == "true") { 
            setIsLoged(true);
        }
    },[])

    return(
        <UserContext.Provider value={{handleInput, clickSubmit, userList, handleLogout, isLoged, lista}}>
            {children}
        </UserContext.Provider>
    );
};

export default  UserProvider