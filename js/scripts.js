// =============business logic=============
function output(input) {
  if (input >=0) {
    return rangeOfNumber(input);
  } else {
    alert("Error: Please, enter a Positive Number");
    location.reload();
  }
}

function rangeOfNumber(input) {
  var numArr = Array.from(Array(input +1).keys());
  //var numArr = [];
  for (var i=0; i <= numArr.length; i++) {
    if (numArr.indexOf(3)) {
      var numContain3 = numArr[numArr.indexOf(3)].toString();
      numContain3.replace("3", "I'm sorry, Dave. I'm afraid I can't do that.")
  }
 
      //return numArr.replace("3", "I'm sorry, Dave. I'm afraid I can't do that.");
      

      // var numContain3 = numArr[numArrStr.indexOf(3)].toString();
      // numContain3.replace("3", "I'm sorry, Dave. I'm afraid I can't do that.");
      // return numArrStr;
  return numArr;
}
}



// =========user interface logic===========
$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("input#userInput").val());
    $("#output").text(output(input));
  });
});