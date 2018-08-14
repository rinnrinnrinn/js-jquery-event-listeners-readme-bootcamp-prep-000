//define functions here
function getIt() {
  $("p").on('click', function(key) {
    alert('Hey!');
  })
}

function frameIt() {
  $("img").on("load",function() {
    
  }
}

function pressIt() {}

function submitIt() {}

$(document).ready(function() {
  getIt();
  frameIt();
  pressIt();
  submitIt();
})