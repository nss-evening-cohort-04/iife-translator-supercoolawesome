var LangConverter = (function() {
  var final = "";
  return {
    setLangConverter: function(arr) {
      final = arr.join(" ");
    },
    getLangConverter: function() {
      return final;
    }
  };
})();
console.log(LangConverter);
