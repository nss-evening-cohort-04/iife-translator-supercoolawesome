var global = " "


var langConverter = (function(translate) {
  var converterObj ={
  "merry" : "allegro",
  "christmas" : "natal",
  "god" : "dio",
  "and" : "e",
  "happy" : "contento",
  "new" : "nuovo",
  "year" : "anno"

    newItalian.getconverterObj = function(){
      return converterObj;
    };
    newItalian.setconverterObj = function(change){
    converterObj.push(change);
    };
}

})( langConverter || {});

console.log(langConverter.getconverterObj);

