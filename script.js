function loadingAnimation(){
    var tl=gsap.timeline();
tl.from(".line h1",{
    y:150,
    stagger:.25,
    delay:0.6,
    duration:.5
})
tl.from("#line1-part1",{
    opacity:0,
    onStart:function(){
        var counter=document.querySelector("#line1-part1 h5");
        var change=0;
        setInterval(function(){
            if(change<100){
                counter.innerHTML=change++;
                // console.log(change)
            }
            else{
                change=100;
                counter.innerHTML=change;
            }
        },33)
    }
})
tl.to(".line h2",{
    animationName:"anime",
    opacity:1
})
tl.to("#loader",{
    opacity:0,
    delay:3,
    duration:0.2
})
tl.from("#page1",{
    y:1600,
    delay:0.1,
    opacity:0,
    duration:0.5,
    ease:Power4
})
tl.to("#loader",{
    display:"none"
})
tl.from("#nav",{
    opacity:0
})
tl.from(".hero h1,#hero3 h2",{
    y:120,
    stagger:.2
})
}
function cursorAnimation(){
    document.addEventListener("mousemove",function(dets){
        gsap.to("#crsr",{
            left:dets.x,
            top:dets.y
        })
    })
    
    Shery.makeMagnet("#nav-part2 h4");
}
loadingAnimation();
cursorAnimation();