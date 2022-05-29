import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(GSDevTools, DrawSVGPlugin);

const mainTL = gsap.timeline();

function setStage() {
    let tl = gsap.timeline();

    tl.set("#aphrodite",{ alpha:0})
    .set("circle",{alpha:0})
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
    tl.to("#coffeebean2", {duration:3, rotate:0, svgOrigin: "618.36px 356.35px", alpha: 1}, "coffee+=.5")
    .to("#coffeebean3", {duration:3, rotate:0, svgOrigin: "618.36px 356.35px", alpha: 1}, "coffee+=.5")
    .to("#coffeebean4", {duration:3, rotate:0, svgOrigin: "618.36px 356.35px", alpha: 1},"coffee+=.5")
    .to("#coffeebean5", {duration:3, rotate:0, svgOrigin: "618.36px 356.35px", alpha: 1},"coffee+=.5")
    .to("#coffeebean6", {duration:3, rotate:0, svgOrigin: "618.36px 356.35px", alpha: 1},"coffee+=.5")
    
    return tl;
}

mainTL.add(setStage())
.add(rotateBeans)



GSDevTools.create();