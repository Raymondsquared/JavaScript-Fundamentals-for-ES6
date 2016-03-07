var chai = require('chai');

var expect = chai.expect;

describe("the class keyword", function(){
	"use strict";
	
	it("can override methods", function(){
		
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

			doWork()
			{				
				return "free";
			}

			toString()
			{
				return this.name;
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
				return "paid";
			}
		}

		let e1 = new Employee("Developer", "Raymond");
		let p1 = new Person("Steven");

		expect(p1.doWork()).to.equal("free");
		expect(e1.doWork()).to.equal("paid");		
		expect(e1.toString()).to.equal("Raymond");
		expect(p1.toString()).to.equal("Steven");
		
		let makeEveryoneWork = function(...people)
		{
			var results = [];
			for (var i=0; i<people.length; i++)
			{
				if(people[i] instanceof Person)
				{
					results.push(people[i].doWork());
				}				
			}

			return results;
		}


		expect(makeEveryoneWork(p1, e1, {})).to.eql(["free", "paid"]);

	});

});