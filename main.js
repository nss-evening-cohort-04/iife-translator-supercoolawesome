var langOutput = document.getElementById("output");
var submitBtn = document.getElementById("translate");
var selectedLang = document.getElementById("langSelect");

submitBtn.addEventListener('click', function(event) {
    var langOptions = selectedLang.options[selectedLang.selectedIndex];
    var langValue = langOptions.value;
    toLanguage(langValue);
    langOutput.innerHTML = LangConverter.getLangConverter();
});

function toLanguage(selected) {
    var userInput = document.getElementById("textfield").value;
    var userInputArray = userInput.split(" ");
    if(selected === "German") {
      LangConverter.getGerman(userInputArray);
    };
    if(selected === "Farsi") {
      LangConverter.getFarsi(userInputArray);
    };
    if(selected === "Italian") {
      LangConverter.getItalian(userInputArray);
    };
    if(selected === "Russian") {
      LangConverter.getRussian(userInputArray);
    };
    if (selected === "Spanish") {
      LangConverter.getSpanish(userInputArray);
    };

};

var LangConverter = (function() {
    var final = "";
    return {
        setLangConverter: function(array) {
            final = array.join(" ");
        },
        getLangConverter: function() {
            return final
        }
    }
})();