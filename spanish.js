var LangConverter = (function(spanish) {
  var spanishObject = {
    Merry: "Alegre",
    Christmas: "Navidad",
    and: "y",
    Happy: "Contento",
    New: "Nuevo",
    Year: "año"
  };
  var translatedTo = []
  spanish.translateToSpanish = function(addzInput) {

    var addzAray = addzInput.split(" ");

    for (var i = 0; i < addzInput.length; i++) {
      console.log(addzAray[i])
      for (var prop in spanishObject) {
        if (addzInput[i] === prop) {
          translatedTo.push(spanishObject[prop]);
        }
      }

    }
    var completetranslation = addzInput.join(" ")
    console.log(completetranslation)
  }

  return spanish

})(LangConverter || {});
console.log(LangConverter)
