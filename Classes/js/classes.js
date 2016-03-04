var chai = require('chai');

var expect = chai.expect;

describe("the class keyword", function(){
	"use strict";
	
	it("can create a class", function(){
		
		class Employee 
		{
			doWork()
			{
				return "complete!"
			}

			getName()
			{
				return "Raymond"
			}
		}

		let e = new Employee();

		expect(e.doWork()).to.equal("complete!");
		expect(e.getName()).to.equal("Raymond");
		//expect(Employee.prototype.doWork().call(e)).to.equal("complete!");
	});

});