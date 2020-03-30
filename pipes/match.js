
module.exports = function match(options, array, regex, key) {
	
	console.log("TYPE OF ", typeof key, typeof regex)
	if (typeof key === 'undefined')
		throw new Error('Match only works with a key');

	if (typeof regex === 'undefined')
		throw new Error('Match only works with a regex');

	var re = new RegExp(regex)


	var filter2 = (obj, predicate) => 
    Object.keys(obj)
          .filter( key => predicate(obj[key]) )
          .reduce( (res, key) => (res[key] = obj[key], res), {} );

	


	return filter2(array, function(actual) {

		console.log("KEY")

		if (key) {
			if (typeof actual[key] === 'undefined')
				throw new Error("Key "  + key  + " does not exist");

			return actual[key].match(re)
		}
		else
			return actual.toString().match(re)
	});	
}
