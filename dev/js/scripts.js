import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(GSDevTools, DrawSVGPlugin, MorphSVGPlugin);
MorphSVGPlugin.convertToPath("#circle");


const mainTL = gsap.timeline();


function setStage() {
    let tl = gsap.timeline();

    tl.set("#aphrodite",{ alpha:0})
    .set("#aphroditecutout",{ alpha:0})
    .set("#blink", {alpha:0})
    .set("#eye", {alpha:0})
    .set("#circle",{ rotate:149, transformOrigin:"center center"})
    .set("#circle2",{ opacity:0})
    .set("#connectinglines",{alpha:0})
    .set("#coffeebean2", {rotate:-300, svgOrigin: "618.36px 356.35px", alpha: 1})
    .set("#coffeebean3", {rotate:-240, svgOrigin: "618.36px 356.35px", alpha: 1})
    .set("#coffeebean4", {rotate:-180, svgOrigin: "618.36px 356.35px", alpha: 1})
    .set("#coffeebean5", {rotate:-120,svgOrigin: "618.36px 356.35px", alpha: 1})
    .set("#coffeebean6", {rotate:-60, svgOrigin: "618.36px 356.35px", alpha: 1})
    
    return tl;
}

function rotateBeans() {
    let tl = gsap.timeline();
    tl.to("#coffeebean2", {duration:1.5, rotate:0, svgOrigin: "618.36px 356.35px", alpha: 1}, "coffee+=.5")
    .to("#coffeebean3", {duration:1.5, rotate:0, svgOrigin: "618.36px 356.35px", alpha: 1}, "coffee+=.5")
    .to("#coffeebean4", {duration:1.5, rotate:0, svgOrigin: "618.36px 356.35px", alpha: 1},"coffee+=.5")
    .to("#coffeebean5", {duration:1.5, rotate:0, svgOrigin: "618.36px 356.35px", alpha: 1},"coffee+=.5")
    .to("#coffeebean6", {duration:1.5, rotate:0, svgOrigin: "618.36px 356.35px", alpha: 1},"coffee+=.5")
    .from("#circle", {duration: 1.5, drawSVG: "0%"})
    .to("#circle2", {opacity:1, duration: 1, morphSVG: {shape: "#connectinglines", type: "rotational", origin:"center"}})
    .from("#aphroditecutoutstroke", {alpha:1, duration: 2, drawSVG: "0%"},"cutout")
    .to("#aphroditecutout", {alpha:1, duration:1.5},"cutout+=1.5")
    .to("#aphrodite", {alpha:1, duration:2}, "aphrodite")
    .to("#eye", {alpha:1, duration:2},"aphrodite")
    .to("#blink", {alpha:1, duration:2},"aphrodite")
    .to("#eye", {alpha:0, duration:0.2})
    .to("#eye", {alpha:1, duration:0.2},"aphrodite+=3")
    return tl;
}

mainTL.add(setStage())
.add(rotateBeans)



GSDevTools.create();