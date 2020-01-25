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
  var numArr = [];
  for (var i=0; i <= input; i++) {
    numArr.push(" " + i);
   // return numArr;
   if (numArr[i] == 3) {
      var numArrThree = numArr.map(function(item) {
        return item == 3 ? " I'm sorry, Dave. I'm afraid I can't do that. " : item;
      });
      return numArrThree;
    } 
    // } else  if (numArr[i] == 2) {
    //   var numArrTwo = numArr.map(function(item) {
    //     return item == 2 ? "Boop!" : item;
    //   });
    //   return numArrTwo;
    // }


  }
}
// function rangeOfNumber(input){
//   var numArr = [];
//   for (var i=0; i <= input; i++) {
//     numArr.push(i);}
//     return numArr; 
// }    

      //var numArr = Array.from(Array(input +1).keys());

// =========user interface logic===========
$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("input#userInput").val());
    $("#output").text(output(input));
  });
});