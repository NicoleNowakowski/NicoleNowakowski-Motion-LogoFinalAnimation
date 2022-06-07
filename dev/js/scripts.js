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
    .set("#coffeebean1", { alpha: 0, rotate:-360, scale:0, transformOrigin:"center center" })
    .set("#coffeebean2", {rotate:-300, svgOrigin: "618.36px 356.35px", alpha: 0})
    .set("#coffeebean3", {rotate:-240, svgOrigin: "618.36px 356.35px", alpha: 0})
    .set("#coffeebean4", {rotate:-180, svgOrigin: "618.36px 356.35px", alpha: 0})
    .set("#coffeebean5", {rotate:-120,svgOrigin: "618.36px 356.35px", alpha: 0})
    .set("#coffeebean6", {rotate:-60, svgOrigin: "618.36px 356.35px", alpha: 0})
    
    return tl;
}

function rotateBeans() {
    let tl = gsap.timeline();
    tl .to("#coffeebean1", {duration:1.5, alpha: 1, rotate:0, scale:1, transformOrigin:"center center"})
    .to("#coffeebean2", {duration:0, alpha: 1}, "coffee")
    .to("#coffeebean3", {duration:0, alpha: 1}, "coffee")
    .to("#coffeebean4", {duration:0, alpha: 1}, "coffee")
    .to("#coffeebean5", {duration:0, alpha: 1}, "coffee")
    .to("#coffeebean6", {duration:0, alpha: 1}, "coffee")

    .to("#coffeebean2", {duration:1.5, rotate:0, svgOrigin: "618.36px 356.35px", alpha: 1},"coffee")
    .to("#coffeebean3", {duration:1.5, rotate:0, svgOrigin: "618.36px 356.35px", alpha: 1},"coffee")
    .to("#coffeebean4", {duration:1.5, rotate:0, svgOrigin: "618.36px 356.35px", alpha: 1},"coffee")
    .to("#coffeebean5", {duration:1.5, rotate:0, svgOrigin: "618.36px 356.35px", alpha: 1},"coffee")
    .to("#coffeebean6", {duration:1.5, rotate:0, svgOrigin: "618.36px 356.35px", alpha: 1},"coffee")
    
    .to("#beanoutline1", {duration:1.5, stroke:"#DA9C8B"},"color")
    .to("#beanoutline2", {duration:1.5, stroke:"#DA9C8B"},"color")
    .to("#beanoutline3", {duration:1.5, stroke:"#DA9C8B"},"color")
    .to("#beanoutline4", {duration:1.5, stroke:"#DA9C8B"},"color")
    .to("#beanoutline5", {duration:1.5, stroke:"#DA9C8B"},"color")
    .to("#beanoutline6", {duration:1.5, stroke:"#DA9C8B"},"color")
    .to("#innerbean1", {duration:1.5, fill:"#DA9C8B"},"color")
    .to("#innerbean2", {duration:1.5, fill:"#DA9C8B"},"color")
    .to("#innerbean3", {duration:1.5, fill:"#DA9C8B"},"color")
    .to("#innerbean4", {duration:1.5, fill:"#DA9C8B"},"color")
    .to("#innerbean5", {duration:1.5, fill:"#DA9C8B"},"color")
    .to("#innerbean6", {duration:1.5, fill:"#DA9C8B"},"color")
  //note: I tried just giving them all a class so that I wouldn't have to have this much excessive code 
  //but for some reason it broke and didn't work. :(
  
    .from("#circle", {duration: 1.5, drawSVG: "0%"},"color")
    .to("#circle2", {opacity:1, duration: 1, morphSVG: {shape: "#connectinglines", type: "rotational", origin:"center"}})
    .from("#aphroditecutoutstroke", {alpha:1, duration: 1.5, drawSVG: "0%"},"cutout")
    .to("#aphroditecutout", {alpha:1, duration:1.5},"cutout")
    .to("#aphrodite", {alpha:1, duration:2.5}, "aphrodite")
    .to("#eye", {alpha:1, duration:2.5},"aphrodite")
    .to("#blink", {alpha:1, duration:2.5},"aphrodite")

    .to("#eye", {alpha:0, duration:0.5},"aphrodite+=2.5")
    .to("#eye", {alpha:1, duration:0.8},"aphrodite+=3.5")
    .to("#eye", {alpha:1, duration:0.5})
 
    
   
    
    return tl;
}

mainTL.add(setStage())
.add(rotateBeans)



//GSDevTools.create();