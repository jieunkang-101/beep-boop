// business logic
var output = function(input) {

}




// user interface logic
$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("input#number").val());
    var numArr = Array.from(Array(input +1).keys());  
    console.log(numArr);
 
  

    var result = output(input);
    $("#output").text(result);    
  });
});