var langOutput = document.getElementById("output");
var selectedLang = document.getElementById("langSelect");
var submitBtn = document.getElementById("translate");

// submitBtn.addEventListener('click', function(event) {
var translateMe = function() {
  var langOptions = selectedLang.options[selectedLang.selectedIndex];
  var langValue = langOptions.value;
  toLanguage(langValue);
  langOutput.innerHTML = LangConverter.getlangConverter();

};

function toLanguage(selected) {
  var userInput = document.getElementById("textfield").value;
  var userInputArray = userInput.split(" ");
  //    if(selected === "German"){
  //      LangConverter.getGerman(userInputArray);
  // }
  //   // if(selected === "Farsi"){
  //   //   LangConverter."  "(userInputArray)
  //   // }
  if (selected === "spanish") {
    LangConverter.translateToSpanish(userInputArray)
  };
};
console.log("testing");
document.getElementById("translate").addEventListener("click", submitBtn)
console.log(submitBtn);

function submitBtn() {
  document.getElementById("translate").innerHTML
};
console.log(toLanguage);
