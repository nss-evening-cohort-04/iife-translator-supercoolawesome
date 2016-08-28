var langConverter = (function(russianConverter) {

    document.getElementById("translate").addEventListener("click", translateText);

    var keyPair = {
        HAVE: "иметь",
        A: "a",
        MERRY: "веселый",
        CHRISTMAS: "рождество",
        AND: "а также",
        A: "a",
        HAPPY: "счастливый",
        NEW: "новый",
        YEAR: "год"
    };
    console.log(keyPair);

    russianConverter.translateRussian = function() {
        var caps= document.getElementById("textfield").value.toUpperCase();
        var translation = caps.split(" ");
        var answer = "";

        for(i=0; i<translation.length; i++) {
          if (keyPair[translation[i]] === undefined) {
            answer += translation[i].toLowerCase() + " ";
        } else {
            answer += keyPair[translation[i]]+ " ";
        }

    }
    document.getElementById("output").innerHTML = answer;
}

function translateText() {
  langConverter.translateRussian();
}

return russianConverter;

})(langConverter || {});