var LangConverter = (function(spanish) {

var englishToSpanish = {
    Merry: "Alegre",
    Christmas: "Navidad",
    and: "y",
    Happy: "Contento",
    New: "Nuevo",
    Year: "año",
  };
  var translatedSpanish = [];
    spanish.getSpanish = function(addedLang) {
         for (var prop in englishToSpanish) {
             for (var i = 0; i < addedLang.length; i++) {
                if (addedLang[i] === prop) {
                    translatedSpanish.push(englishToSpanish[prop]);
                }
            }
        }
        LangConverter.setLangConverter(translatedSpanish);

    };
return spanish;
})(LangConverter || {});