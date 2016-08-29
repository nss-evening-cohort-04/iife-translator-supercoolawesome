var langConverter = (function(italian) {
  var englishToItalian= {
  Merry:"Allegro",
  Christmas:"Aatal",
  And:"e",
  Happy:"Contento",
  New:"Nuovo",
  Year:"Anno"
};
 var translatedItalian = [];
    italian.getItalian = function(addedLang) {
         for (var prop in englishToItalian) {
             for (var i = 0; i < addedLang.length; i++) {
                if (addedLang[i] === prop) {
                    translatedItalian.push(englishToItalian[prop]);
                }
            }
        }
        LangConverter.setLangConverter(translatedItalian);
    };
return german;
})(LangConverter || {});


