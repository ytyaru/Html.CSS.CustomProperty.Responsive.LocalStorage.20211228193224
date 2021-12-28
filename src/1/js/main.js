//import {FontSize} from 'js/FontSize.js';
import {LineOfWideChars} from 'js/LineOfWideChars.js';
const lineOfWideChars;

window.addEventListener('DOMContentLoaded', (event) => {
    console.log("DOMContentLoaded");
    console.log(`devicePixelRatio = ${window.devicePixelRatio}`);
    const lineOfWideChars = new LineOfWideChars();
//    initFontSize();
});
window.addEventListener('load', (event) => {
    console.log("load");
});
window.addEventListener('beforeunload', (event) => {
    console.log("beforeunload");
//    saveFontSize();
    lineOfWideChars.save(); 
});

