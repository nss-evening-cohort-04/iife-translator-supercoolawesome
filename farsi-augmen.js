//START LANG CONVERTER
var LangConverter = (function(farsi) {

  var englishToFarsi = {
    Merry: "mobārak",
    Christmas: "kerismas",
    and: "waw",
    Happy: "mobārak",
    New: "no",
    Year: "sale"
 };
 var translatedFarsi = [];
    farsi.getFarsi = function(addedLang) {
         for (var prop in englishToFarsi) {
             for (var i = 0; i < addedLang.length; i++) {
                if (addedLang[i] === prop) {

                    translatedFarsi.push(englishToFarsi[prop]);
                }
            }
        }
        LangConverter.setLangConverter(translatedFarsi);
    };
return farsi;
})(LangConverter || {});