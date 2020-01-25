// =============Business Logic=============
function output(input) {
  if (input >=0) {
    return rangeOfNum(input);
  } else {
    alert("Error: Please, enter a Positive Number");
    location.reload();
  }
}
function rangeOfNum(input) {
  var numArr = [];
  for (var i=0; i <= input; i++) {
    var strNumArr = i.toString();
    if (strNumArr.includes("3")) {
      numArr.push(" I'm sorry, Dave. I'm afraid I can't do that. ");
    } else if (strNumArr.includes("2")) {
      numArr.push(" Boop! ");
    } else if (strNumArr.includes("1")) {
      numArr.push(" Beep! ");
    } else {
      numArr.push(" "+ i +" ");
    }  
  }
  console.log(numArr);
  return numArr;
}

// =========User Interface Logic===========
$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("input#userInput").val());
    $("#output").hide();
    $("#output").fadeIn();
    $("#result").text(output(input));
  });
  $("#reverse").click(function(event) {
    event.preventDefault();
    var input = parseInt($("input#userInput").val());
    $("#result").text(rangeOfNum(input).reverse());
  });
});