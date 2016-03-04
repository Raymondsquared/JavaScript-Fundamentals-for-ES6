var chai = require('chai');

var expect = chai.expect;

describe("the class keyword", function(){
	"use strict";
	
	it("can have a constructor", function(){
		
		class Employee 
		{
			constructor(name)
			{
				this.name = name;
			}

			get name()
			{
				return this._name.toUpperCase();
			}

			set name(newValue)
			{
				this._name = newValue;
			}
		}

		let e1 = new Employee("Raymond");
		let e2 = new Employee("Boles");

		expect(e1.name).to.equal("RAYMOND");
		expect(e2.name).to.equal("BOLES");

		e1.name = "Kevin";
		expect(e1.name).to.equal("KEVIN");
		
	});

});