var chai = require('chai');

var expect = chai.expect;

describe("the class keyword", function(){
	"use strict";
	
	it("can have a constructor", function(){
		
		class Employee 
		{
			constructor(name)
			{
				this._name = name;
			}

			getName()
			{
				return this._name;
			}
		}

		let e1 = new Employee("Raymond");
		let e2 = new Employee("Boles");

		expect(e1.getName()).to.equal("Raymond");
		expect(e2.getName()).to.equal("Boles");
		
	});

});