// import React, { useEffect, useRef } from 'react';
// import DailyIframe from '@daily-co/daily-js';

// export default function VideoCall() {
//     const videoContainerRef = useRef(null);

//     useEffect(() => {
//         const callFrame = DailyIframe.createFrame(videoContainerRef.current, {
//             showLeaveButton: true,
//             iframeStyle: {
//                 width: '100%',
//                 height: '100%',
//             },
//         });

//         callFrame.join({ url: 'https://your-domain.daily.co/your-room' });

//         return () => callFrame.leave();
//     }, []);

//     return <div ref={videoContainerRef} style={{ width: '100%', height: '100vh' }} />;
// }
