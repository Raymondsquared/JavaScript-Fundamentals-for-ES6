var chai = require('chai');

var expect = chai.expect;

describe("how let works", function(){
	"use strict";
	
	it("will provide block scoping, unlike var (var)", function(){
		
		var doWork = function(flag){
			if(flag){
				var x = 3;
			}

			return x;
		};

		var result = doWork(true);
		expect(result).to.equal(3);

		/*
		var result2 = doWork(false);
		expect(result2).to.equal(3);
		*/

	});
	
	it("will provide block scoping, unlike var (let 1)", function(){		

		var doWork = function(flag){
			if(flag){
				let x = 3;				
			}

			return x;
		};

		var result = doWork(true);		
		
		expect(result).to.equal(3);

	});


	it("will provide block scoping, unlike var (let 2)", function(){		

		var doWork = function(flag){
			if(flag){
				let x = 3;
				return x;
			}
		};

		var result = doWork(true);		
		
		expect(result).to.equal(3);		

	});

	it("will provide block block scoping with for (var)", function(){		

		var doWork = function(){
			for(var i=0; i<10; i++){

			}
			return i;
		};

		var result = doWork();

		expect(result).to.equal(10);

	});


	it("will provide block block scoping with for (let 1)", function(){		

		var doWork = function(){
			for(let i=0; i<10; i++){

			}
			return i;
		};

		var result = doWork();

		expect(result).to.equal(10);

	});

	it("will provide block block scoping with for (let 2)", function(){		

		var doWork = function(){
			let i=0;
			for(; i<10; i++){

			}
			return i;
		};

		var result = doWork();

		expect(result).to.equal(10);

	});

});