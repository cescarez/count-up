
var multiples = [];


$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var finalNum = parseInt($("#number1").val());
    var multipleNum = parseInt($("#number2").val());


    if (typeof finalNum !== "number" || typeof multipleNum !== "number" || finalNum < 0 || multipleNum < 0 || $("#number1").val() === "" || $("#number2").val() === "") {
      $("#output-sentence").text("Please enter whole, positive imtegers for your numbers to be calculated.");
    } else if (multipleNum > finalNum) {
      $("#output-sentence").text("Your desginated multiple is larger than your requested final number. Please enter a multiple that is smaller than your final number.")
    } else if (typeof finalNum === "number" && typeof multipleNum === "number") {
      for (index=0; index <= finalNum; index += multipleNum) {
        multiples.push([index]);
      };
      $("#output-sentence").text("To get up to " + finalNum +", counting up by " + multipleNum + "s:");
      $("#output-numbers").text(multiples);
    };
  });
});
