var LangConverter = (function(russian) {

    // document.getElementById("translate").addEventListener("click", translatedRussian);

    var englishToRussian = {
        Have: "иметь",
        Merry: "веселый",
        Christmas: "рождество",
        And: "а также",
        Happy: "счастливый",
        New: "новый",
        Year: "год"
    };

    var translatedRussian = [];
  russian.getRussian = function(addedLang) {
     for (var prop in englishToRussian) {
       for (var i = 0; i < addedLang.length; i++) {
        if (addedLang[i] === prop) {
          translatedRussian.push(englishToRussian[prop]);
        }
      }
    }
    LangConverter.setLangConverter(translatedRussian);
  };
return russian;

})(LangConverter || {});