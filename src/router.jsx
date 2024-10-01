import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Login from "./pages/login/login";
import Adm from "./pages/adm/adm";
import Auto_cadastro from "./pages/auto-cadastro";
import Teste from "./pages/teste/teste";
import Cadastrado from "./pages/cadastrado";
import React from 'react';
import { Navigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';


export default function Navegacao() {


    const PrivateRoute = ({ children }) => {
      const token = localStorage.getItem('token');
    
      // Verificar se o token é válido e não está expirado
      if (token) {
        const decodedoToken = jwtDecode(token);
        const tempo = Date.now() / 1000; 
    
     
        if (decodedoToken.exp < tempo) {
          localStorage.removeItem('token');
          return <Navigate to="/login" />;
        }
    
       
        return children;
      }
    
     
      return <Navigate to="/login" />;
    };
    


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>} />
                <Route path="/login" element={<Login />} />
                <Route path="/auto_cadastro" element={<Auto_cadastro />} />
                <Route path="/teste" element={<Teste />} />
                <Route path="/cadastrado" element={<Cadastrado />} />

                

                <Route
                    path="/adm" element={   <Adm/>  }
                  /> 
                
            </Routes>
        </BrowserRouter>
    );
}