const aps = document.querySelector("h4");
const navlist = document.querySelector(".navlist");
const hero = document.querySelector(".hero");
const title = document.querySelector(".title");

const tl = gsap.timeline();
tl.fromTo(hero, 1, { height: "10%" }, { height: "100%" });
tl.fromTo(title, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=.5");
tl.fromTo(aps, 0.5, { opacity: 0, x: 20 }, { opacity: 1, x: 0 }, "-=.3");
tl.fromTo(navlist, 0.5, { opacity: 0, x: 20 }, { opacity: 1, x: 0 }, "-=.3");



gsap.to(".logo", { scrollTrigger: ".logo", opacity: 1, x: -40, duration: 1 });
gsap.to("h3", { scrollTrigger: "h3", opacity: 1, x: -40, duration: 1 });
gsap.to(".aline", { scrollTrigger: ".mess", scaleX:1, duration: 1 });


