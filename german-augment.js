var LangConverter = (function(german) {
  var englishToGerman = {
    Merry: "Frohe",
    Christmas: "Weihnachten",
    And: "und",
    Happy: "glücklich",
    New: "neu",
    Year: "Jahr"
  };
  var translatedGerman = [];
  german.getGerman = function(addedLang) {
     for (var prop in englishToGerman) {
       for (var i = 0; i < addedLang.length; i++) {
        if (addedLang[i] === prop) {
          translatedGerman.push(englishToGerman[prop]);
        }
      }
    }
    LangConverter.setLangConverter(translatedGerman);
  };
return german;
})(LangConverter || {});