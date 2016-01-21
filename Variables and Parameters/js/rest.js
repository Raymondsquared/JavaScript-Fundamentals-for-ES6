var chai = require('chai');

var expect = chai.expect;

describe("rest parameters", function(){
	"use strict";
	
	it("is like varags", function(){
		
		let doWork = function(name, ...numbers)
		{
			let result = 0;
			numbers.forEach(function(n)
			{
					result += n
			});

			return result;
		}

		let result = doWork("Raymond", 1, 2, 3)
		let result2 = doWork("Raymond")

		expect(result).to.equal(6);
		expect(result2).to.equal(0);
		
	});



});