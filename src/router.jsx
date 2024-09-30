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
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000; // Tempo atual em segundos
    
        // Se o token expirou, remove o token e redireciona para login
        if (decodedToken.exp < currentTime) {
          localStorage.removeItem('token');
          return <Navigate to="/login" />;
        }
    
        // Se o token é válido, renderiza o componente filho
        return children;
      }
    
      // Se não houver token, redireciona para login
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
                    path="/adm" element={  <Adm /> 
                    }
                /> 
            </Routes>
        </BrowserRouter>
    );
}