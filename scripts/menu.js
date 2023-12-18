"use strict";
var immediateEvent=false;
var menuCheck = function(){
    let status = document.querySelector('.div-mobile-menu').style.display;
    if(status==="block" && immediateEvent === false){                
        document.querySelector('.div-mobile-menu').style.display = 'none';
    }
    immediateEvent = false;
}
document.body.onclick = menuCheck;
function showMobileMenu(){
    let status = document.querySelector('.div-mobile-menu').style.display;
    if(status === 'none' || status === ''){
        document.querySelector('.div-mobile-menu').style.display = 'block'; 
        immediateEvent = true;
    }else{
        document.querySelector('.div-mobile-menu').style.display = 'none';
    }
}