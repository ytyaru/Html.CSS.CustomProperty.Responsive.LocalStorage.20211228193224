//import {FontSize} from 'js/FontSize.js';
//import {LineOfWideChars} from 'js/LineOfWideChars.js';
//const lineOfWideChars;
//import {LineOfChars} from 'js/LineOfChars.js';
//const lineOfWideChars = new LineOfChars('line-of-wide-chars', 40, 10, 50);  // 全角字数／行
//const lineOfHalfChars = new LineOfChars('line-of-half-chars', 80, 30, 140); // 半角字数／行
import {LineOfCharsFactory} from 'js/LineOfCharsFactory.js';
const charsFactory = new LineOfCharsFactory();

window.addEventListener('DOMContentLoaded', (event) => {
    console.log("DOMContentLoaded");
    console.log(`devicePixelRatio = ${window.devicePixelRatio}`);
//    initFontSize();
//    const lineOfWideChars = new LineOfWideChars();
    charsFactory.create();
    charsFactory.Wide.init();
    charsFactory.Half.init();
});
window.addEventListener('load', (event) => {
    console.log("load");
});
window.addEventListener('beforeunload', (event) => {
    console.log("beforeunload");
//    saveFontSize();
//    lineOfWideChars.save(); 
    charsFactory.Wide.save();
    charsFactory.Half.save();
});

