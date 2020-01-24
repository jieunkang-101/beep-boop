// business logic
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
  return numArr;
}


    //var numArrStr = numArr.toString().split(",")
    //for (var i=0; i < numArrStr.length; i++)
    
//     if (numArr.includes(3)) {
//       var numContain3 = numArr[numArrStr.indexOf("3")].toString();
//       numContain3.replace("3", "I'm sorry, Dave. I'm afraid I can't do that.");
//       return numArrStr;
//     }


 



// user interface logic
$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("input#number").val());
    
 
  

    var result = output(input);
    $("#output").text(result);    
  });
});