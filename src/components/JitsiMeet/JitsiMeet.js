import React, {useEffect, useState} from "react";


export default function JitsiMeet({nm_Paciente, nm_Sala}) {

    const [link, setLink] = useState('')

    useEffect(() => {

           const dominio = 'meet.jit.si'
           const opcoes = {
            roomName: nm_Sala,
            width: "100%",
            parentNode: document.querySelector('#div-JitsiMeet'),
            configOverwrite: {
                startWithAudioMuted: true,
                startWithVideoMuted: false
            },
            interfaceConfigOverwrite: { SHOW_JITSI_WATERMARK: true },
            userInfo: { 
                displayName: nm_Paciente
             }
           };

           const api = new window.JitsiMeetExternalAPI(dominio, opcoes);

        
    
           setLink(`https://${dominio}/${nm_Sala}`)

           localStorage.setItem('link', link);
           console.log(link)
           
           return () => api.dispose();
        }, [nm_Paciente, nm_Sala]);


    

    return <div id="div-JitsiMeet" style={{ width: '100%', height: '100vh' }}></div>;
}