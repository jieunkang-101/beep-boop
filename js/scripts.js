// =============business logic=============
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
      numArr.push("<li>I'm sorry, Dave. I'm afraid I can't do that.</li>");
    } else if (strNumArr.includes("2")) {
      numArr.push("<li>Boop!</li>");
    } else if (strNumArr.includes("1")) {
      numArr.push("<li>Beep!</li>");
    } else {
      numArr.push("<li>"+ i +"</li>");
    }  
  }
  console.log(numArr);
  return numArr;
}

// =========user interface logic===========
$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("input#userInput").val());
    $("#result").hide();
    $("#result").fadeIn();
    $("#output").html(output(input));
  });
});