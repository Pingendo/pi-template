'use strict';
/*
The MIT License

Copyright (c) 2010-2017 Google, Inc. http://angularjs.org

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. 

*/
module.exports = function sort(options, input, property, reverse) {
	// if (!Array.isArray(input))
	// 	throw new Error('Sort only works with arrays');
	function sortKeys(obj_1, sortFn) { 
		var key = Object.keys(obj_1) 
		.sort(sortFn);  
		
		key = reverse ? key.reverse() : key

		// Taking the object in 'temp' object 
		// and deleting the original object. 
		var temp = {}; 
			
		for (var i = 0; i < key.length; i++) { 
			temp[key[i]] = obj_1[key[i]]; 
			delete obj_1[key[i]]; 
		}  

		// Copying the object from 'temp' to  
		// 'original object'. 
		for (var i = 0; i < key.length; i++) { 
			obj_1[key[i]] = temp[key[i]]; 
		}  
		return obj_1; 
	} 

	var r = sortKeys(input, function(a, b) {
		a = input[a]
		b = input[b]
    	var textA = a[property]
    	if (textA.toUpperCase)
    		textA = textA.toUpperCase()

    	var textB = b[property]
    	if (textB.toUpperCase)
    		textB.toUpperCase();
    	
    	return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
	})


	// input.sort(function(a, b) {
		
    // 	var textA = a[property]
    // 	if (textA.toUpperCase)
    // 		textA = textA.toUpperCase()

    // 	var textB = b[property]
    // 	if (textB.toUpperCase)
    // 		textB.toUpperCase();
    	
    // 	return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
	// });

	// if (reverse)
	// 	input.reverse()

	return r
 
};