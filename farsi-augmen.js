//
// Variable to hold the final language output. Default to 0.
// var langConverter = 0;
// Variable to hold phrase that the user selects
//var selectedLang;
var langConverter = (function(converter) {

  var farsiLang = {
    'merry': mobārak,
    'christmas': kerismas,
    'and': waw,
    'happy': mobārak,
    'new': no,
    'year': sale,
    '' : 0
 };

 // Augment the original object with another method
 converter.setFarsi = function(newFarsi) {
    return farsiLang[newFarsi];
  };

 // Return the new, augmented object with the new method on it
  return converter;
})(langConverter);

//return {
// farsiConvert: farsiTranslate();
// getFarsiLang: function()
// return farsiLang;
// },

// setFarsiLang: function(newFarsi){
  // farsiLang = newFarsi;
// },
// };
// })(langConverter || {});