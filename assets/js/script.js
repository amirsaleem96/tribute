function header_scroll(num){
  var elem = document.getElementsByClassName('header')[0];
  var pageHeight = window.pageYOffset;
  if(document.documentElement.clientWidth <= 992){
    num /= 2;
  }
  if(pageHeight > num){
    elem.className = 'header header-after';
  } else if (pageHeight <= num){
    elem.className = 'header header-before';
  }
}
function parallax(speed){
  var elem = document.getElementsByClassName('banner')[0];
  var pageHeight = window.pageYOffset;
  if(pageHeight < 1000){
   elem.style.transform = 'translateY('+(-(pageHeight/speed))+'px)';
 } else {
   elem.style.transform = 'translateY(0)';
 }
}
function toggle_menu (){
  var elem = document.getElementsByClassName('menu')[0];
  if(elem.className == 'menu menu-hidden'){
    elem.className = 'menu menu-visible';
  } else if(elem.className == 'menu menu-visible'){
    elem.className = 'menu menu-hidden';
  }
}
function typer(elemClass,text,speed){
  var out = document.getElementsByClassName(elemClass)[0];
  var str = text;
  var arr = str.split("");
  var final = [];
  var len = arr.length;
  var count = 0;
  var id  = setInterval(insert, speed);
  function insert(){
    if(count >= len){
      clearInterval(id);
      hide_intro();
    } else {
      final.push(arr[count]);
      out.innerHTML = final.join("");
      count++;
    }
  }
}
function isElementInViewport (elemClass){
 var elem = document.getElementsByClassName('elemClass')[0];
 var rect = elem.getBoundingClientRect();
 return (
   rect.top >= 0 &&
   rect.left >=0 &&
   rect.bottom <= (window.innerHeight || document.document.Element.clientHeight) &&
   rect.top <= (window.innerHeight || document.document.Element.clientWidth)
 );
}
function carousel_scroll (speed){
  var elem = document.getElementsByClassName('carousel-container')[0];
  var pageHeight = window.pageYOffset;
  if(pageHeight < 700){
     elem.style.transform = 'translateX(0)';
  }
  else if(pageHeight >= 700 && pageHeight <= 2300){
   elem.style.transform = 'translateX('+(-(pageHeight/speed))+'px)';
 } else {
   elem.style.transform = 'translateX(0)';
 }
}
function hide_intro(){
  window.location.href = 'home.html'
}
