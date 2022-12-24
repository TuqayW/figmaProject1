gsap.registerPlugin(ScrollTrigger);

const scroll = (ref,op1,op2,x1,x2,y1,y2) => {
 
    gsap.fromTo(
    ref,
    {
      opacity: op1,
      x: x1,
      y: y1
    },
    {
      scrollTrigger: {
        trigger: ref,
        start: "center 80%",
      },
      opacity: op2,
      x: x2,
      y: y2,
    }
  );

};
scroll('.left2',0,1,-70,0,0,0)
scroll('.right2',0,1, 70,0,40,0)

var tl = gsap.timeline({repeat: -1});
tl.to('.left2', {duration: 1, y: '-=5',duration:1});
tl.to('.left2', {duration: 1, y: '+=5',duration:1});


let nav = document.querySelector('nav')
let left = document.querySelector('.left')
let right = document.querySelector('.right')

gsap.fromTo('nav',{opacity:0,y:-100,scale:1},{opacity:1,y:0,scale:1,duration:1})
gsap.fromTo('.left',{opacity:0,x:-100,scale:1},{opacity:1,x:0,scale:1,duration:1})
gsap.fromTo('.right',{opacity:0,x:100,scale:1},{opacity:1,x:0,scale:1,duration:1})