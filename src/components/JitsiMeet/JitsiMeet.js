import React, {useEffect, useState} from "react";
export default function JitsiMeet({ nm_Sala}) {
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
                displayName: 'Dr. João Silva'
             }
           };
           const api = new window.JitsiMeetExternalAPI(dominio, opcoes);
        
    
           setLink(`https://${dominio}/${nm_Sala}`)
           
           return () => api.dispose()
    }, [])
    
    return <div id="div-JitsiMeet" style={{ width: '100%', height: '100vh' }}></div>;
}