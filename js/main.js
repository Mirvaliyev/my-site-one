
// bio
setTimeout(function(){
  $('.bio_p').css({
    'transform':'translateX(0px)',
    'opacity':'1'
  });
},500)
setTimeout(function(){
  $('.bio_h1').css({
    'transform':'translateX(0px)',
    'opacity':'1'
  });
},800)
setTimeout(function(){
  $('.bio_span').css({
    'transform':'translateX(0px)',
    'opacity':'1'
  });
},1000)

// little_menu animation
let n=1;
$(".little_menu").click(
  function(){
      $(".navbar").toggleClass("open");
      
      $('.span1').toggleClass('span1_add');
      $('.span2').toggleClass('span2_add');
      $('.span3').toggleClass('span3_add');
      $(".ms").toggleClass("span_add");
  }
);

setInterval(function(){
  if(window.innerWidth<=560){
  $('.nav').click(function () { 
      $(".navbar").removeClass("open");  
      $('.span1').removeClass('span1_add');
      $('.span2').removeClass('span2_add');
      $('.span3').removeClass('span3_add');
      $(".ms").removeClass("span_add");
  });
  }
},10)

// section and  navbar
let section=document.querySelectorAll("section");
let navitem=document.querySelectorAll(".nav");
let sal=document.querySelector('.s_a');
let sectionbottom;
let sectiontop;
let sectop;
let secbottom;
let about=document.querySelector('.about')
navitem[0].style.color="yellowgreen";
navitem[0].classList.add('nav_span');
function scrollActive(){
  let sy=window.pageYOffset+$(window).height();
  let sy2=window.pageYOffset;
  sectop=section[3].offsetTop+about.offsetHeight;
  secbottom=section[3].offsetHeight+sectop-about.offsetHeight;
  if(sy>=sectop-5&&sy<secbottom-5){
    $('._html div').addClass('add1');
    $('._css div').addClass('add2');
    $('._scss div').addClass('add3');
    $('._bootstrap div').addClass('add4');
    $('._javascript div').addClass('add5');
    $('._jquery div').addClass('add6');
  }
  for(let i=0;i<section.length;i++){
    sectiontop=section[i].offsetTop;
    sectionbottom=section[i].offsetHeight+sectiontop;
    if(sy2>=sectiontop-5&&sy2<sectionbottom-5){
      navitem[i].style.color="yellowgreen";
      navitem[i].classList.add('nav_span');
    }
    else{
      navitem[i].style.color="rgb(185,185,185)";
      navitem[i].classList.remove('nav_span');
    }
  }
}
window.addEventListener('scroll', scrollActive);

const folioleft = ScrollReveal({
  distance: '200px',
  duration: 2000,
  opacity:0,
  origin: 'left',
})
folioleft.reveal('.left, ._html, ._css, ._scss, ._bootstrap, ._javascript, ._jquery', { interval: 300 });

const folioright = ScrollReveal({
  distance: '200px',
  duration: 2000,
  opacity:0,
  origin: 'right',
})
folioright.reveal('.right, .r2', { interval: 300 });

const foliobottom = ScrollReveal({
  distance: '200px',
  duration: 2000,
  opacity:0,
  origin: 'bottom',
})
foliobottom.reveal('.foliobottom', { interval: 300 });




// let img=document.querySelectorAll('.news_img')
// let array_i = $.map(img, function(value, index) {
//   return [value];
// });

// about



// snowfall
const cnv=document.getElementById('cnv')
const ctx=cnv.getContext('2d')

cnv.width=(window.innerWidth)
cnv.height=(window.innerHeight)
ctx.fillStyle='#fff'
class Drop{
  constructor(){
    this.x=Math.random()*cnv.width
    this.y=Math.random()*cnv.height
    this.r=Math.random()*4.5
    this.v=Math.random()*1.5
  }
  make(){
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.r, 0, Math.PI*2)
    ctx.fill()
    ctx.closePath()

    this.y+=this.v
    if(this.y>cnv.height){
      this.x=Math.random()*cnv.width
      this.y=0
    }
  }
}
let drops=[]
for(let i=0;i<750;i++) drops.push(new Drop())
function animation(){
  ctx.clearRect(0, 0, cnv.width, cnv.height)
  drops.forEach((drop)=>{drop.make()})
  requestAnimationFrame(animation)
}
animation()

