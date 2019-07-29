
module.exports = function match(options, array, regex, key) {
	var re = new RegExp(regex)

	return Array.prototype.filter.call(array, function(actual) {
		if (key)
			return actual[key].match(re)
		else
			return actual.match(re)
	});	
}
