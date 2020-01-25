// =============business logic=============
function output(input) {
  if (input >=0) {
    return replace(input);
  } else {
    alert("Error: Please, enter a Positive Number");
    location.reload();
  }
}

function replace(input) {
  var numArr = Array.from(Array(input +1).keys());
  // var numArr = [];
  // for (var i=0; i <= input; i++) {
  //   numArr.push(i);}
    //return numArr;

  if (numArr.includes(3)) {
    var numThree = numArr[numArr.indexOf(3)]
    var output = numThree.toString("I'm sorry, Dave. I'm afraid I can't do that.");
    
    return numArr + output;
    } else if (numArr.includes(2)) {
      var numTwo = numArr[numArr.indexOf(2)].toString();
      var output = numTwo.replace("2", "Boop!")
      return numArr + output;
      } else if (numArr.includes(1)) {
        var numOne = numArr[numArr.indexOf(1)].toString();
        var output = numOne.replace("1", "Beep!")
        return numArr + output;
        } else {
         
        }
  
}


// function rangeOfNumber(input){
//   var numArr = [];
//   for (var i=0; i <= input; i++) {
//     numArr.push(i);}
//     return numArr; 
// }    

      

// =========user interface logic===========
$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("input#userInput").val());
    $("#output").text(output(input));
  });
});