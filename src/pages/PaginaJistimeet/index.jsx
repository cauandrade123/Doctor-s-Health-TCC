import JitsiMeet from "../../components/JitsiMeet/JitsiMeet";
import { useLocation } from "react-router-dom";



export default function PageJitsi() {

    const location = useLocation();
    const { nome } = location.state || {}; 


    return (
        <div className="div-JitsiMeet">
        <JitsiMeet 
        nm_Sala={`SALA DE ${nome}`}
        />
        </div>
    )
}