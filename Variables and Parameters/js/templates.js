var chai = require('chai');

var expect = chai.expect;

describe("template literals", function(){
	"use strict";
	
	it("can easily combine literals and data", function(){
		
		let doWork = function(name)
		{
			return `Hello, ${name}`;
		}

		let result = doWork("Raymond");
		expect(result).to.equal("Hello, Raymond");
	});


	it("can help build URLs", function(){

		let category = "music";
		let id = 2112;

		let url = `http://apiservicer/${category}/${id}`;

		expect(url).to.equal("http://apiservicer/music/2112");

	});

	it("can use tags", function(){

		let upper = function(strings, ...values)
		{
			let result = "";

			for(var i=0; i< strings.length; i++)
			{
				result += strings[i];

				if(i < values.length)
				{
					result += values[i];
				}
			}

			return result.toUpperCase();
		};

		var x = 1;
		var y = 3;
		var result = upper `${x} + ${y} is ${x+y}`;

		//strings = ["", " + ", " is ", ""]
		//values = [1, 3, 4]

		expect(result).to.equal("1 + 3 IS 4");

	});

});