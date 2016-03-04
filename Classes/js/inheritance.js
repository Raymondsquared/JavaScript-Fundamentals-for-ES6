var chai = require('chai');

var expect = chai.expect;

describe("the class keyword", function(){
	"use strict";
	
	it("can have a constructor", function(){
		
		class Person 
		{
			constructor(name)
			{
				this.name = name;
			}

			get name()
			{
				return this._name;
			}

			set name(newValue)
			{
				this._name = newValue;
			}
		}

		class Employee extends Person
		{
			doWork()
			{
				return `${this._name} is working`;
			}
		}

		let e1 = new Person("Raymond");
		let e2 = new Employee("Boles");

		expect(e1.name).to.equal("Raymond");
		expect(e2.name).to.equal("Boles");
		expect(e2.doWork()).to.equal("Boles is working");

		
	});

});