// @ts-nocheck
"use client";

import { useState, useEffect } from "react";


export default function Doom() {
    const [doomModule, setDoomModule] = useState(null);
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (window.doomModule) {
                setDoomModule(window.doomModule);
                clearInterval(intervalId);
            }
        }, 500); 
    
        return () => clearInterval(intervalId);
    }, []);
    
    useEffect(() => {
        if (doomModule) {
            doomModule.call_js_event_kills = (kills) => {
                setCounter(kills);
            };
        }
    }, [doomModule]);
    
    return (
        <>
            <script id="doom-init" type="module">
                import loadDoom  from '/load_doom.js';
                window.doomModule = await loadDoom();
            </script>
            <div>
                Kill count: {counter}
            </div>
            <canvas id="canvas" width="800" height="600"></canvas>
        </>
    );
}