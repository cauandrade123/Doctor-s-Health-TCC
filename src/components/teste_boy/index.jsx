import { useState } from "react";
import Chat from "../bot";

export default function sla () {

    const [chamar , setChamar] = useState(Chat);


    return (

        

        <main>
            <button onClick={chamar }>
                <img src="" alt="" />
            </button>
        </main>
    );
}