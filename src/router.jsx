import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Login from "./pages/login/login";
import Adm from "./pages/adm/adm";
import Auto_cadastro from "./pages/auto-cadastro";
import Cadastrado from "./pages/cadastrado";
import React from 'react';
import { Navigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import Chat from "./components/bot";
import PageJitsi from "./pages/PaginaJistimeet";
import ChamarChat from "./components/teste_boy";
import Page404 from "./pages/page404";


export default function Navegacao() {


    const PrivateRoute = ({ children }) => {
      const token = localStorage.getItem('token');
    
      
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
                <Route path="/chat" element={<ChamarChat/>} />
                <Route path="/" element={<App/>} />
                <Route path="/login" element={<Login />} />
                <Route path="/auto_cadastro" element={<Auto_cadastro />} />
                <Route path="/cadastrado" element={<Cadastrado />} />
                <Route path="/reuniao" element={<PrivateRoute><PageJitsi/></PrivateRoute>} />
                <Route path='*' element={<Page404/>}/>
                

                 <Route
                    path="/adm" element={ <PrivateRoute>
                      <Adm/>
                    </PrivateRoute> }
                  />  
                 </Routes>
        </BrowserRouter>
    );
}