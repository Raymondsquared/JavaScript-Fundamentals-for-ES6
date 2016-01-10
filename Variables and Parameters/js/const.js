var chai = require('chai');

var expect = chai.expect;

describe("using const", function(){
	"use strict";
	
	it("will make a variable read only", function(){
		
		const MAX_SIZE = 10;

		//MAX_SIZE = 12;

		expect(MAX_SIZE).to.equal(10);
	});

	it("can shadow outer declaration", function(){
		
		const x = 12;

		var doWork = function(){		
									
			let x = 10;
			return x;			
		};

		var result = doWork();		
		
		expect(result).to.equal(10);	

		expect(x).to.equal(12);
	});

});