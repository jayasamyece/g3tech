//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function postEmail(){
    document.getElementById('modal-message').style.display='block';
}
function postMessage(){
    document.getElementById('modal-message').style.display='none';
    $('#exampleModal').modal('show');
}

function postCareersMessage(){
    document.getElementById('careers-message').style.display='block';
}

window.addEventListener('message', function(event) {
  document.getElementById('modal-message').style.display='none';
  $('#exampleModal').modal('show');
}); 

emailReturnURL = ()=>{
  document.getElementById('emailReturnURL').value = window.location.href;
  console.log('Jayasamy location.href',location.href)
  let ele = document.getElementById('emailReturnURLCareer');
  if(ele){
    ele.value = window.location.href;
  }
}
emailReturnURL();
