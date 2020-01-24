// business logic
var output = function(input) {
  if (input >=0) {
    var numArrs = Array.from(Array(input +1).keys());  

    for (var i=0; i < numArrs.length; i++)
    if (numArrs.includes(3)) {
      numArr = numArr[numArr.indexOf("3")].replace("3", "I'm sorry, Dave. I'm afraid I can't do that.");
    }

    return numArrs;
  } else {
    alert("Please, enter a Positive Number");
    location.reload();
  }
}




// user interface logic
$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("input#number").val());
    
 
  

    var result = output(input);
    $("#output").text(result);    
  });
});