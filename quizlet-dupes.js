;(function() {

	function dupes(input) {

		var seen = {};
		var result = {};

		var lines = input.replace(/\\r\\n/, '\n').split('\n');

		var len = lines.length;
		for (var i = 0; i < len; i ++) {

			var split = lines[i].split('\t', 2);
			var term = split[0];
			var def = split[1];

			var duplicateFound = seen[term];
			if (duplicateFound) {

				if (!result[term])
					result[term] = [duplicateFound, def]
				else
					result[term].push(def)

			}

			seen[term] = def;

		}

		return result;

	}

	if ((typeof module !== 'undefined') && module.exports)
		module.exports = dupes;
	else
		global.quizletDupes = dupes;

})(this);
