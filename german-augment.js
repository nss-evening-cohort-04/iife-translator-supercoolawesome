var langConverter = (function(german) {
	var translatedGerman = [];

	var englishToGerman = [{
		"merry":"Frohe",
		"christmas":"Weihnachten",
		"and":"und",
		"happy":"glücklich",
		"new":"neu",
		"year":"Jahr",
	}];

	german.getGerman = function(addedLang) {
		for (var i = 0; i < addedLang.length; i++) {
			translatedGerman.push(englishToGerman[addedLang[i]]);
		}
		var finalTranslation = translatedGerman.join(" ")
			return finalTranslation;
		// console.log(finalTranslation)
	}

return german

})(langConverter || {});