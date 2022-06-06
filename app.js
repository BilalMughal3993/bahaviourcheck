document.getElementById("demo").innerHTML = correctAns;

function addition() {
  let correctVal = document.getElementById("inputNo").value;
  if (isNaN(correctVal)) {
    document.getElementById("answer").innerHTML = "SORRY !! This is Not a Number "
  } else {
    if (correctVal == mainAns) {
        document.getElementById("answer").innerHTML =
          "Correct !! " + numOne + "+" + numTwo + "=" + mainAns;
      } else {
        document.getElementById("answer").innerHTML =
          "Incorrect !! " + numOne + "+" + numTwo + "=" + mainAns;
      }
    
  }
}
 function newCard(){
    document.getElementById("answer").innerHTML = ""
    document.getElementById("inputNo").value =""
     numOne= Math.floor(Math.random()*10)+1;
       numTwo= Math.floor(Math.random()*10)+1;
       correctAns = numOne + "+" + numTwo;
       mainAns = numOne+numTwo;
       document.getElementById("demo").innerHTML = correctAns


 }
