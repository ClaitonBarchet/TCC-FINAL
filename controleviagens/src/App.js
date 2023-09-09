
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import styles from "react"

// hooks
import { useState, useEffect } from "react";
import { useAuthentication } from "./hooks/useAuthentication";
import { NavLink } from "react-router-dom";

//context - ATUTENTICAÇAO DE USUÁRIO
import { AuthProvider } from "./context/AuthContext";
import { onAuthStateChanged } from "firebase/auth";

//pages
import Viagem from './pages/viagem/Viagem';
import Login from "./pages/login/Login";
import About from "./pages/about/About";
import Cadastrar from "./pages/cadastrar/Cadastrar";
import Histórico from "./pages/histórico/Histórico";
import Editar from "./pages/editar/Editar";
import Alterarsenha from "./pages/alterarsenha/Alterarsenha";

 function App() {
   // AUTENTICAÇAO DO USUÁRIO
   const [user, setUser] = useState(undefined)
   const {auth} = useAuthentication()
   const {logout} = useAuthentication()

   const loadingUser = user === undefined

   useEffect(()=>{

     onAuthStateChanged(auth, (user)=>{
       setUser(user)
     })
   }, [auth])

   if(loadingUser){
     return<p>Carregando...</p>
   }

  return (<div>
    <body>
    <p></p>
        <AuthProvider value={{user}}>
          <BrowserRouter>
          {/* <NavLink color="primary" to= "/"><h4>#CONTROLE DE VIAGENS#</h4></NavLink>

          <NavLink color="primary" to= "/login"><h5>LOGIN</h5></NavLink>

          <NavLink color="primary" to= "/histórico"><h5>HISTÓRICO</h5></NavLink>

          <NavLink color="primary" to= "/cadastrar"><h5>CADASTRAR</h5></NavLink>

          <NavLink color="primary" to= "/about"><h5>SOBRE</h5></NavLink>

          <NavLink color="primary" onClick={logout} ><h5>SAIR</h5></NavLink> */}




          {/* NAVBAR */}

               <nav className="navbar bg-primary navbar-expand-lg" data-bs-theme="dark">
                    <div className="container-fluid">
                    <button className="navbar-toggler" 
                              type="button" 
                              aria-haspopup="menu"
                              data-bs-toggle="collapse" 
                              data-bs-target="#navbarNav" 
                              aria-controls="navbarNav" 
                              aria-expanded="false" 
                              aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                      <ul className="navbar-nav">

                      {user && (
                        <li className="nav-item">
                          <NavLink to="/" className = {"nav-link active " + styles.brand}>  NOVA VIAGEM  </NavLink>
                        </li>
                      )}
                        
                        {user && (
                          <li className="nav-item">
                            <NavLink to="/histórico" className = {"nav-link active " + styles.brand}>  HISTÓRICO  </NavLink>
                          </li>
                        )}

                        {!user && (
                          <li className="nav-item">
                            <NavLink to="/login" className = {"nav-link active " + styles.brand}> LOGIN  </NavLink>
                          </li>
                        )}

                        {!user && (
                          <li className="nav-item">
                            <NavLink to="/cadastrar" className = {"nav-link active " + styles.brand}>  CADASTRAR  </NavLink>
                          </li>
                        )}

                          <li className="nav-item">
                            <NavLink to="/about" className = {"nav-link active " + styles.brand}>  SOBRE  </NavLink>
                          </li>

                          {user && (
                          <li className="nav-item">
                            <NavLink onClick={logout} className = {"nav-link active " + styles.brand}>  SAIR  </NavLink>
                          </li>
                        )}

                      </ul>
                    </div>
                  </div>
                </nav>




          <Routes>
            <Route  path="/" element={user ? <Viagem /> : <Navigate to="/Login" />} />
            <Route  path="/histórico" element={user ? <Histórico /> : <Navigate to="/Login" />} />
            <Route  path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
            <Route  path="/cadastrar" element={!user ? <Cadastrar /> : <Navigate to="/" />} />
            <Route  path="/about" element={<About />} />
            <Route  path="/editar" component = {Editar} element={user ? <Editar /> : <Navigate to="/Editar" />} />
            <Route  path="/alterarsenha" element={<Alterarsenha />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </body>
    </div>
  );
}

export default App;
