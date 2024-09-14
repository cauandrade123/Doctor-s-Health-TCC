import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Login from "./pages/login/login";
import Adm from "./pages/adm/adm";
import Auto_cadastro from "./pages/auto-cadastro";

export default function Navegacao(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/"  element={<App />} />
                <Route path="/login"  element={<Login />} />  
                <Route path="/adm"  element={<Adm />} />
                <Route path="/auto_cadastro" element= {<Auto_cadastro />} />
            </Routes>
        </BrowserRouter>
    );
}