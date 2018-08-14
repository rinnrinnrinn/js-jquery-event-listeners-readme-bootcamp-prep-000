//define functions here
function getIt() {
  $("p").on('click', function(key) {
    alert('Hey!');
  })
}

function frameIt() {
  $("img").on("load", function() {
    $("img").addClass("tasty");
  })
}

function pressIt() {
 $(document).on('keydown', function(key) {
  if(key.which == 71){
      alert('s was pressed');
  }
}); 

}

function submitIt() {}

$(document).ready(function() {
  getIt();
  frameIt();
  pressIt();
  submitIt();
})