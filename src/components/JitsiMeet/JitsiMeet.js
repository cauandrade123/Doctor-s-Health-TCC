import React, { useEffect, useState } from "react";

export default function JitsiMeet({ nm_Sala }) {
    const [link, setLink] = useState('');

    useEffect(() => {
        const dominio = 'meet.jit.si'; 
        const jwtToken = 'tokenSavede'; 

        const opcoes = {
            roomName: nm_Sala,
            width: "100%",
            parentNode: document.querySelector('#div-JitsiMeet'),
            configOverwrite: {
                startWithAudioMuted: true,
                startWithVideoMuted: false,
                openBridgeChannel: 'websocket'
            },
            interfaceConfigOverwrite: { SHOW_JITSI_WATERMARK: true },
            userInfo: { 
                displayName: 'Dr. Silva'
            },
            jwt: jwtToken // Adicione o token JWT aqui
        };

        const api = new window.JitsiMeetExternalAPI(dominio, opcoes);

        setLink(`https://${dominio}/${nm_Sala}`);
        localStorage.setItem('link', `https://${dominio}/${nm_Sala}`);
        
        return () => api.dispose();
    }, [nm_Sala]);

    return <div id="div-JitsiMeet" style={{ width: '100%', height: '100vh' }}></div>;
}
