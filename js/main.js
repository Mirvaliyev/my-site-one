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

// section and  navbar
let section=document.querySelectorAll("section");
let navitem=document.querySelectorAll(".nav");
let sectionbottom;
let sectiontop;
navitem[0].style.color="rgb(185, 185, 185)";
navitem[0].classList.add('nav_span');
function scrollActive(){
  let sy=window.pageYOffset;
    for(let i=0;i<section.length;i++){
      sectiontop=section[i].offsetTop;
      sectionbottom=section[i].offsetHeight+sectiontop;
      if(sy>=sectiontop-5&&sy<sectionbottom-5){
        navitem[i].style.color="rgb(185, 185, 185)";
        navitem[i].classList.add('nav_span');
      }
      else{
        navitem[i].style.color="black";
        navitem[i].classList.remove('nav_span');
      }
    }
}
window.addEventListener('scroll', scrollActive);

// start
// setTimeout(function(){
//   $('.load_gif').css({
//     'display':'none'
//   })
// },4000)

const folioleft = ScrollReveal({
  distance: '100px',
  duration: 2000,
  origin: 'left',
})
folioleft.reveal('.folioleft, .left, .mail', { interval: 0 });

const folioright = ScrollReveal({
  distance: '100px',
  duration: 2000,
  origin: 'right',
})
folioright.reveal('.folioright, .right, .adres', { interval: 0 });





// let img=document.querySelectorAll('.news_img')
// let array_i = $.map(img, function(value, index) {
//   return [value];
// });

let boyi
let eni
setTimeout(function(){
  window.location
  eni=window.outerWidth
  boyi=window.outerHeight
  if(eni<=560){
    $('.bio').height(boyi);
    $('.news').height(boyi);
  }
},10)
