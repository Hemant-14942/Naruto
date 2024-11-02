let count = document.querySelector(".count");
let vd = document.querySelector(".vd");
let music = document.querySelector(".music")
let unmute = document.querySelector(".vunmute")
let mute = document.querySelector(".vmute")



let audio = new Audio();
audio.src="./audio/a3.mp3";
let c =0;
let ans =setInterval(function(){
    count.style.transform="scale(1)";
    count.textContent=c+"%";
    c++;
    if(c>=101)
    {
    vd.play();
    vd.style.opacity=1;
    clearInterval(ans);
    audio.play();
    count.style.transform="scale(0)";
   }
},30);

music.addEventListener("click",()=>{
    if(audio.paused){
        audio.play();
        mute.style.display="none"

    }else{
        audio.pause();
        mute.style.display="block"
    }
})

let tl = gsap.timeline({
    repeat:-1
});

tl
.to(".imgslider",{
      ease:Expo.easeInOut,
      width:"100%",
      stagger:1.5,
},'a')
.to(".text .h1",{
    ease:Expo.easeInOut,
    stagger:1.5,
    top:"0",  
},'a')
.to(".text .h1",{
      ease:Expo.easeInOut,
      delay:1,
      stagger:1.5,
      top:"-100%",  
},'a')
gsap.from(".backh1", {
    scrollTrigger: {
        trigger: ".back", 
        start: "0% 40%", 
        end: "27% 10%", 
        scrub: true,
        // markers:true,
    },
    opacity: 0,
    y: 60,
    stagger: 0.1,
    duration: 1,
    ease: "back.out(1.7)",
});

//  hover animation
var myAnimation = new hoverEffect({
        parent: document.querySelector(".imgcon",),
        intensity: 0.3,
        image1: './images/naruti img/n3.jpg',
        image2: './images/naruti img/jiraya.jpg',
        displacementImage: './images/naruti img/dsip.jpg'
    });
var myAnimation = new hoverEffect({
        parent: document.querySelector(".imgcon1",),
        intensity: 0.3,
        image1: './images/naruti img/n4.jpg',
        image2: './images/naruti img/kakashi.jpeg',
        displacementImage: './images/naruti img/dsip.jpg'
    });
var myAnimation = new hoverEffect({
        parent: document.querySelector(".imgcon2",),
        intensity: 0.3,
        image1: './images/naruti img/n6.jpeg',
        image2: './images/naruti img/iruka2.jpeg',
        displacementImage: './images/naruti img/dsip.jpg'
    });
