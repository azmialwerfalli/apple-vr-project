function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
loco()


gsap.to("#page>video",{
    scrollTrigger:{
        trigger:`#page>video`,
        start:`2% top`,
        end:`bottom top`,
        scroller:`#main`
    },
    onStart:()=>{
        document.querySelector("#page>video").play()
    }
})


gsap.to("#page",{
    scrollTrigger:{
        trigger:`#page`,
        start:`top top`,
        end:`bottom top`,
        scroller:`#main`,
        pin:true
    }
})


gsap.to("#page-bottom",{
    scrollTrigger:{
        trigger:`#page-bottom`,
        start:`5% top`,
        end:`bottom top`,
        scroller:`#main`,
        scrub:.5,
    },
    opacity:0
})



var tl = gsap.timeline({
    scrollTrigger:{
        trigger:`#page1`,
        start:`top top`,
        scrub:1,
        scroller:`#main`,
        pin:true
    }
})


tl.to("#page1>h1",{
    top:`-50%`
})






var tl1 = gsap.timeline({
    scrollTrigger:{
        trigger:`#page2`,
        start:`top top`,
        scrub:1,
        scroller:`#main`,
        pin:true
    }
})


tl1.to("#page2>h1",{
    top:`-50%`
})




var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:`#page4`,
        start:`top top`,
        scrub:1,
        scroller:`#main`,
        pin:true
    }
})


tl2.to("#page4>#center-page4",{
    top:`-50%`
})



function canvas(){
    const canvas = document.querySelector("#page7>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
  assets/main/img/360/0000.jpg
  assets/main/img/360/0001.jpg
  assets/main/img/360/0002.jpg
  assets/main/img/360/0003.jpg
  assets/main/img/360/0004.jpg
  assets/main/img/360/0005.jpg
  assets/main/img/360/0006.jpg
  assets/main/img/360/0007.jpg
  assets/main/img/360/0008.jpg
  assets/main/img/360/0009.jpg
  assets/main/img/360/0010.jpg
  assets/main/img/360/0011.jpg
  assets/main/img/360/0012.jpg
  assets/main/img/360/0013.jpg
  assets/main/img/360/0014.jpg
  assets/main/img/360/0015.jpg
  assets/main/img/360/0016.jpg
  assets/main/img/360/0017.jpg
  assets/main/img/360/0018.jpg
  assets/main/img/360/0019.jpg
  assets/main/img/360/0020.jpg
  assets/main/img/360/0021.jpg
  assets/main/img/360/0022.jpg
  assets/main/img/360/0023.jpg
  assets/main/img/360/0024.jpg
  assets/main/img/360/0025.jpg
  assets/main/img/360/0026.jpg
  assets/main/img/360/0027.jpg
  assets/main/img/360/0028.jpg
  assets/main/img/360/0029.jpg
  assets/main/img/360/0030.jpg
  assets/main/img/360/0031.jpg
  assets/main/img/360/0032.jpg
  assets/main/img/360/0033.jpg
  assets/main/img/360/0034.jpg
  assets/main/img/360/0035.jpg
  assets/main/img/360/0036.jpg
  assets/main/img/360/0037.jpg
  assets/main/img/360/0038.jpg
  assets/main/img/360/0039.jpg
  assets/main/img/360/0040.jpg
  assets/main/img/360/0041.jpg
  assets/main/img/360/0042.jpg
  assets/main/img/360/0043.jpg
  assets/main/img/360/0044.jpg
  assets/main/img/360/0045.jpg
  assets/main/img/360/0046.jpg
  assets/main/img/360/0047.jpg
  assets/main/img/360/0048.jpg
  assets/main/img/360/0049.jpg
  assets/main/img/360/0050.jpg
  assets/main/img/360/0051.jpg
  assets/main/img/360/0052.jpg
  assets/main/img/360/0053.jpg
  assets/main/img/360/0054.jpg
  assets/main/img/360/0055.jpg
  assets/main/img/360/0056.jpg
  assets/main/img/360/0057.jpg
  assets/main/img/360/0058.jpg
  assets/main/img/360/0059.jpg
  assets/main/img/360/0060.jpg
  assets/main/img/360/0061.jpg
  assets/main/img/360/0062.jpg
  assets/main/img/360/0063.jpg
  assets/main/img/360/0064.jpg
  assets/main/img/360/0065.jpg
  assets/main/img/360/0066.jpg
  assets/main/img/360/0067.jpg
  assets/main/img/360/0068.jpg
  assets/main/img/360/0069.jpg
  assets/main/img/360/0070.jpg
  assets/main/img/360/0071.jpg
  assets/main/img/360/0072.jpg
  assets/main/img/360/0073.jpg
  assets/main/img/360/0074.jpg
  assets/main/img/360/0075.jpg
  assets/main/img/360/0076.jpg
  assets/main/img/360/0077.jpg
  assets/main/img/360/0078.jpg
  assets/main/img/360/0079.jpg
  assets/main/img/360/0080.jpg
  assets/main/img/360/0081.jpg
  assets/main/img/360/0082.jpg
  assets/main/img/360/0083.jpg
  assets/main/img/360/0084.jpg
  assets/main/img/360/0085.jpg
  assets/main/img/360/0086.jpg
  assets/main/img/360/0087.jpg
  assets/main/img/360/0088.jpg
  assets/main/img/360/0089.jpg
  assets/main/img/360/0090.jpg
  assets/main/img/360/0091.jpg
  assets/main/img/360/0092.jpg
  assets/main/img/360/0093.jpg
  assets/main/img/360/0094.jpg
  assets/main/img/360/0095.jpg
  assets/main/img/360/0096.jpg
  assets/main/img/360/0097.jpg
  assets/main/img/360/0098.jpg
  assets/main/img/360/0099.jpg
  assets/main/img/360/0100.jpg
  assets/main/img/360/0101.jpg
  assets/main/img/360/0102.jpg
  assets/main/img/360/0103.jpg
  assets/main/img/360/0104.jpg
  assets/main/img/360/0105.jpg
  assets/main/img/360/0106.jpg
  assets/main/img/360/0107.jpg
  assets/main/img/360/0108.jpg
  assets/main/img/360/0109.jpg
  assets/main/img/360/0110.jpg
  assets/main/img/360/0111.jpg
  assets/main/img/360/0112.jpg
  assets/main/img/360/0113.jpg
  assets/main/img/360/0114.jpg
  assets/main/img/360/0115.jpg
  assets/main/img/360/0116.jpg
  assets/main/img/360/0117.jpg
  assets/main/img/360/0118.jpg
  assets/main/img/360/0119.jpg
  assets/main/img/360/0120.jpg
  assets/main/img/360/0121.jpg
  assets/main/img/360/0122.jpg
  assets/main/img/360/0123.jpg
  assets/main/img/360/0124.jpg
  assets/main/img/360/0125.jpg
  assets/main/img/360/0126.jpg
  assets/main/img/360/0127.jpg
  assets/main/img/360/0128.jpg
  assets/main/img/360/0129.jpg
  assets/main/img/360/0130.jpg
  assets/main/img/360/0131.jpg
  assets/main/img/360/0132.jpg
  assets/main/img/360/0133.jpg
  assets/main/img/360/0134.jpg
  assets/main/img/360/0135.jpg
  assets/main/img/360/0136.jpg
  assets/main/img/360/0137.jpg
  assets/main/img/360/0138.jpg
  assets/main/img/360/0139.jpg
  assets/main/img/360/0140.jpg
  assets/main/img/360/0141.jpg
  assets/main/img/360/0142.jpg
  assets/main/img/360/0143.jpg
  assets/main/img/360/0144.jpg
  assets/main/img/360/0145.jpg
  assets/main/img/360/0146.jpg
  assets/main/img/360/0147.jpg
  assets/main/img/360/0148.jpg
  assets/main/img/360/0149.jpg
  assets/main/img/360/0150.jpg
  assets/main/img/360/0151.jpg
  assets/main/img/360/0153.jpg
  assets/main/img/360/0154.jpg
  assets/main/img/360/0155.jpg
  assets/main/img/360/0156.jpg
  assets/main/img/360/0157.jpg
  assets/main/img/360/0158.jpg
  assets/main/img/360/0159.jpg
  assets/main/img/360/0160.jpg
  assets/main/img/360/0161.jpg
  assets/main/img/360/0162.jpg
  assets/main/img/360/0163.jpg
  assets/main/img/360/0164.jpg
  assets/main/img/360/0165.jpg
  assets/main/img/360/0166.jpg
  assets/main/img/360/0167.jpg
  assets/main/img/360/0168.jpg
  assets/main/img/360/0169.jpg
  assets/main/img/360/0170.jpg
  assets/main/img/360/0171.jpg
  assets/main/img/360/0172.jpg
  assets/main/img/360/0173.jpg
  assets/main/img/360/0174.jpg
  assets/main/img/360/0175.jpg
  assets/main/img/360/0176.jpg
  assets/main/img/360/0177.jpg
  assets/main/img/360/0178.jpg
  assets/main/img/360/0179.jpg
  assets/main/img/360/0180.jpg
  assets/main/img/360/0181.jpg
  assets/main/img/360/0182.jpg
  assets/main/img/360/0183.jpg
  assets/main/img/360/0184.jpg
  assets/main/img/360/0185.jpg
  assets/main/img/360/0186.jpg
  assets/main/img/360/0187.jpg
  assets/main/img/360/0188.jpg
  assets/main/img/360/0189.jpg
  assets/main/img/360/0190.jpg
  assets/main/img/360/0191.jpg
  assets/main/img/360/0192.jpg
  assets/main/img/360/0193.jpg
  assets/main/img/360/0194.jpg
  assets/main/img/360/0195.jpg
  assets/main/img/360/0196.jpg
  assets/main/img/360/0197.jpg
  assets/main/img/360/0198.jpg
  assets/main/img/360/0199.jpg
 `;
  return data.split("\n")[index];
}

const frameCount = 198;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page7>canvas`,
    //   set start end according to preference
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.min(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({

  trigger: "#page7>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
//   set start end according to preference
  start: `top top`,
  end: `600% top`,
});
}
canvas();



function canvas1(){
  const canvas = document.querySelector("#page18>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
render();
});

function files(index) {
var data = `
.//Apple vision canvas images/Vision00001.png
.//Apple vision canvas images/Vision00002.png
.//Apple vision canvas images/Vision00003.png
.//Apple vision canvas images/Vision00004.png
.//Apple vision canvas images/Vision00005.png
.//Apple vision canvas images/Vision00006.png
.//Apple vision canvas images/Vision00007.png
.//Apple vision canvas images/Vision00008.png
.//Apple vision canvas images/Vision00009.png
.//Apple vision canvas images/Vision00010.png
.//Apple vision canvas images/Vision00011.png
.//Apple vision canvas images/Vision00012.png
.//Apple vision canvas images/Vision00013.png
.//Apple vision canvas images/Vision00014.png
.//Apple vision canvas images/Vision00015.png
.//Apple vision canvas images/Vision00016.png
.//Apple vision canvas images/Vision00017.png
.//Apple vision canvas images/Vision00018.png
.//Apple vision canvas images/Vision00019.png
.//Apple vision canvas images/Vision00020.png
.//Apple vision canvas images/Vision00021.png
.//Apple vision canvas images/Vision00022.png
.//Apple vision canvas images/Vision00023.png
.//Apple vision canvas images/Vision00024.png
.//Apple vision canvas images/Vision00025.png
`;
return data.split("\n")[index];
}

const frameCount = 25;

const images = [];
const imageSeq = {
frame: 1,
};

for (let i = 0; i < frameCount; i++) {
const img = new Image();
img.src = files(i);
images.push(img);
}

gsap.to(imageSeq, {
frame: frameCount - 1,
snap: "frame",
ease: `none`,
scrollTrigger: {
  scrub: 0.15,
  trigger: `#page18`,
  //   set start end according to preference
  start: `top top`,
  end: `80% top`,
  scroller: `#main`,
},
onUpdate: render,
});

images[1].onload = render;

function render() {
scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
var canvas = ctx.canvas;
var hRatio = canvas.width / img.width;
var vRatio = canvas.height / img.height;
var ratio = Math.max(hRatio, vRatio);
var centerShift_x = (canvas.width - img.width * ratio) / 2;
var centerShift_y = (canvas.height - img.height * ratio) / 2;
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.drawImage(
  img,
  0,
  0,
  img.width,
  img.height,
  centerShift_x,
  centerShift_y,
  img.width * ratio,
  img.height * ratio
);
}
ScrollTrigger.create({

trigger: "#page18",
pin: true,
// markers:true,
scroller: `#main`,
//   set start end according to preference
start: `top top`,
end: `80% top`,
});
}
canvas1();



var tl3 = gsap.timeline({
  scrollTrigger:{
      trigger:`#page21`,
      start:`top top`,
      scrub:1,
      scroller:`#main`,
      pin:true
  }
})


tl3.to("#page21>#troff",{
  opacity:0
})

var tl4 = gsap.timeline({
  scrollTrigger:{
      trigger:`#page22`,
      start:`top top`,
      scrub:1,
      scroller:`#main`,
      pin:true
  }
})


tl4.to("#page22>#snroff",{
  opacity:0
})



gsap.to("#page23>img",{
  scrollTrigger:{
    trigger:`#page23>img`,
    start:`top bottom`,
    end:`bottom 60%`,
    scrub:.5,
    scroller:`#main`
  },
  opacity:1
})
