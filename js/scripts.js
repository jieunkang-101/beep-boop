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
    var strNumArr = i.toString();
    if (strNumArr.includes("3")) {
      numArr.push("I'm sorry, Dave. I'm afraid I can't do that.");
    } else if (strNumArr.includes("2")) {
      numArr.push("Boop!");
    } else if (strNumArr.includes("1")) {
      numArr.push("Beep!");
    } else {
      numArr.push(i);
    }  
  }
}

      //var numArr = Array.from(Array(input +1).keys());

// =========user interface logic===========
$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("input#userInput").val());
    $("#output").text(output(input));
  });
});