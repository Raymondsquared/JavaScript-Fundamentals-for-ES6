var chai = require('chai');

var expect = chai.expect;

describe("destructuring", function(){
	"use strict";
	
	it("can destructure arrays", function(){
		
		var doWork = function(){
			return [1, 3, 2]
		}

		let [, x, y, z] = doWork();

		expect(x).to.equal(3);
		expect(y).to.equal(2);
		expect(z).to.be.undefined;
	});

	it("can destructure objects", function(){
		
		let doWork = function(){
			return {
				firstName: 'Raymond',
				lastName: 'Boles',
				handles:{
					twitter: '@rr',
					facebook: 'rr'
				}
			};
		};

		let { 
			firstName: first, 
			lastName,
			handles:{
				twitter: twitter, 
				facebook
			}
		} = doWork();


		expect(first).to.equal('Raymond');
		expect(lastName).to.equal('Boles');
		expect(twitter).to.equal('@rr');
		expect(facebook).to.equal('rr');

	});

	it("works with parameters", function(){
		
		let doWork = function (url, { data, cache, headers }){
			return data;
		};

		let result = doWork(
			"api/test",
			{
				data: "test",
				cache: false
			}
		);

		expect(result).to.equal("test");
	});
});