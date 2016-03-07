var chai = require('chai');

var expect = chai.expect;

describe("the class keyword", function(){
	"use strict";
	
	it("can invoke super methods", function(){
		
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
			constructor(title, name)
			{
				super(name);
				this._title = title;				
			}

			get title()
			{
				return this._title;
			}

			doWork()
			{
				return `${this._name} is working`;
			}
		}

		let e1 = new Employee("Developer", "Raymond");

		expect(e1.name).to.equal("Raymond");
		expect(e1.title).to.equal("Developer");
		
	});

});