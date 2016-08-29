var langConverter = (function(italianConverter) {

    document.getElementById("translate").addEventListener("click", translateText);
    var translateVoice = document.getElementById("talk");

    var keyPair = {
        MERRY: "Allegro",
        CHRISTMAS: "Aatal",
        AND: "e",
        HAPPY: "Contento",
        NEW: "Nuovo",
        YEAR: "Anno"
    };


    italianConverter.translateitalian = function() {
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
  langConverter.translateitalian();
}
translateVoice.addEventListener('click', function(event) {
    responsiveVoice.speak(output.innerHTML);
});

return italianConverter;

})(langConverter || {});
