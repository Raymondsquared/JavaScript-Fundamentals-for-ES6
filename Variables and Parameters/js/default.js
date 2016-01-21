var chai = require('chai');

var expect = chai.expect;

describe("default parameters", function(){
	"use strict";
	
	it("provides defaults", function(){
		
		var doWork = function(name="Raymond")
		{
			return name;
		}

		var result = doWork();

		expect(result).to.equal('Raymond');
		
	});


	it("will provide a value for undefined", function(){
		
		let doWork = function(a = 1, b = 2, c = 3)
		{
			return [a,b,c];
		}

		let [a,b,c] = doWork(5, undefined);		

		expect(a).to.equal(5);
		expect(b).to.equal(2);
		expect(c).to.equal(3);
		
	});


	it("works with destructuring", function(){
		
		let doWork = function
		(
			url, 
			{data = "Raymond", cache = true}
		)
		{
			return data;
		};

		let result = doWork
		(	
			"api/test",
			{
				cache: false
			}
		);


		expect(result).to.equal("Raymond");
		
	});


});