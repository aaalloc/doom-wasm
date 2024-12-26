import Module from "./websockets-doom.js";

let wad_to_load = "doom2.wad";
var commonArgs = [
    "-iwad", wad_to_load, 
    "-warp",
    "-window", 
    "-nogui", 
    "-nomusic", 
    "-config", "default.cfg", 
];


async function initModule() {
    return await Module(
        {
            noInitialRun: true,
            printErr: function (text) {
                if (arguments.length > 1) text = Array.prototype.slice.call(arguments).join(" ");
                console.error(text);
            },
            canvas: (function () {
                var canvas = document.getElementById("canvas");
                canvas.addEventListener(
                    "webglcontextlost",
                    function (e) {
                        alert("WebGL context lost. You will need to reload the page.");
                        e.preventDefault();
                    },
                    false
                );
                return canvas;
            })(),
            print: function (text) {
                console.log(text);
            },
            setStatus: function (text) {
                console.log(text);
            },
            call_js_event_kills: function (kills) {
                console.log("Kills:", kills);
            },
            totalDependencies: 0,
            monitorRunDependencies: function (left) {
                this.totalDependencies = Math.max(this.totalDependencies, left);
                this.setStatus(left ? "Preparing... (" + (this.totalDependencies - left) + "/" + this.totalDependencies + ")" : "All downloads complete.");
            },
        }
    );
}

export default async function loadDoom() {
    const myModule = await initModule();
    myModule.callMain(commonArgs);
    return myModule;
};

// window.onerror = function (event) {
//     myModule.setStatus("Exception thrown, see JavaScript console");
//     myModule.setStatus = function (text) {
//         if (text) Module.printErr("[post-exception status] " + text);
//     };
// };

