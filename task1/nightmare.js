// 'use strict';
// Testing framing that builds upon PhantomJS.
var Nightmare = require('nightmare'),
	// BBD(Behavior-driven Develpoment)/TDD(Test-driven Development) assertion library made to be paired with any js testing framework.
	should = require('chai').should();

describe('Net Direct', function(){
	// Sets main varible.
	var finalResults = [];
	var finalResultsOutput = '';
	
	// Allows each test to be given a maximum of 15 seconds.
	this.timeout(15000);

	it('should load the page', function(done){
		// Displays the Electron test browser.
		Nightmare({ show: true })
		// Navigates to netdirect inventory page.
		.goto('https://www.netdirectautosales.com/inventory/')
		// Waits till the content of the page is loaded.
		.wait('.content')
		// Test Evalution for page. 
		.evaluate(function(){
			return document.title;
		})
		// Completes any queue operations and close the electron process.
		.end()
		// Checks if the evaulation title matches.
		.then(function(result){
			result.should.equal('Lifted Trucks, SUVs, Jeep Inventory - Your Lifted Truck HQ');
			done();
		})
		// Catches errors.
		.catch(function(err){
			console.error(err);
		})
	});

	it('it should display the number of time the Chevrolet label appears on the first page results', function(done){
		Nightmare({ show: true })
		.goto('https://www.netdirectautosales.com/inventory/')
		.wait('.options')
		.click('div.heading.filter-heading-make')
		.click('a.filter-option-make.filter-value-Chevrolet')
		.wait('html')
		.evaluate(function(){
			// Grabs the length of the class car-title and pushes the html content into car model array.
			var modelOutput = [];
			for(var i=1; i<document.getElementsByClassName('car-title').length + 1; i++){
				modelOutput.push(document.querySelector('div#cars-container.vehicle-collection').children[i].children[0].children[2].children[0].innerHTML);
			}
			return modelOutput;

		})
		// Using regexp, check if the current model text is within the model array. If shown, increment chevroletMatchValue.
		.then(function(result){
			// console.log(result);
			var modelMatch = [];
			var chevroletMatchValue = 0;
			var regexp = /(^|\W)Chevrolet($|\W)+/g;
			// var regexp = /\WChevrolet\W+/g
			for(var i=0; i<result.length; i++){
				modelMatch = result[i].match(regexp);
				// console.log(result[i].match(regexp));
				if(result[i].match(regexp) == ' Chevrolet '){
					chevroletMatchValue++;
				}
			}
			done();
			// Push into final results results for later display.
			finalResults.push('Chevrolet: ' + chevroletMatchValue);
			// console.log('Chevrolet: ' + chevroletMatchValue);
		})
		.catch(function(err){
			console.error(err);
		})
	});

	it('it should display the number of time the Dodge label appears on the first page results', function(done){
		Nightmare({ show: true })
		.goto('https://www.netdirectautosales.com/inventory/')
		.wait('.options')
		.click('div.heading.filter-heading-make')
		.click('a.filter-option-make.filter-value-Dodge')
		.wait('html')
		.evaluate(function(){
			// Grabs the length of the class car-title and pushes the html content into car model array.
			var modelOutput = [];
			for(var i=1; i<document.getElementsByClassName('car-title').length + 1; i++){
				modelOutput.push(document.querySelector('div#cars-container.vehicle-collection').children[i].children[0].children[2].children[0].innerHTML);
			}
			return modelOutput;

		})
		// Using regexp, check if the current model text is within the model array. If shown, increment chevroletMatchValue.
		.then(function(result){
			// console.log(result);
			var modelMatch = [];
			var dodgeMatchValue = 0;
			var regexp = /(^|\W)Dodge($|\W)+/g;
			for(var i=0; i<result.length; i++){
				modelMatch = result[i].match(regexp);
				// console.log(result[i].match(regexp));
				if(result[i].match(regexp) == ' Dodge '){
					dodgeMatchValue++;
				}
			}
			done();
			// Push into final results results for later display.
			finalResults.push('Dodge: ' + dodgeMatchValue);
			// console.log('Dodge: ' + dodgeMatchValue);
		})
		.catch(function(err){
			console.error(err);
		})
	});

	it('it should display the number of time the Ford label appears on the first page results', function(done){
		Nightmare({ show: true })
		.goto('https://www.netdirectautosales.com/inventory/')
		.wait('.options')
		.click('div.heading.filter-heading-make')
		.click('a.filter-option-make.filter-value-Ford')
		.wait('html')
		.evaluate(function(){
			// Grabs the length of the class car-title and pushes the html content into car model array.
			var modelOutput = [];
			for(var i=1; i<document.getElementsByClassName('car-title').length + 1; i++){
				modelOutput.push(document.querySelector('div#cars-container.vehicle-collection').children[i].children[0].children[2].children[0].innerHTML);
			}
			return modelOutput;

		})
		// Using regexp, check if the current model text is within the model array. If shown, increment chevroletMatchValue.
		.then(function(result){
			// console.log(result);
			var modelMatch = [];
			var FordMatchValue = 0;
			var regexp = /(^|\W)Ford($|\W)+/g;
			for(var i=0; i<result.length; i++){
				modelMatch = result[i].match(regexp);
				// console.log(result[i].match(regexp));
				if(result[i].match(regexp) == ' Ford '){
					FordMatchValue++;
				}
			}
			done();
			// Push into final results results for later display.
			finalResults.push('Ford: ' + FordMatchValue);
			// console.log('Ford: ' + FordMatchValue);
		})
		.catch(function(err){
			console.error(err);
		})
	});

	it('it should display the number of time the GMC label appears on the first page results', function(done){
		Nightmare({ show: true })
		.goto('https://www.netdirectautosales.com/inventory/')
		.wait('.options')
		.click('div.heading.filter-heading-make')
		.click('a.filter-option-make.filter-value-GMC')
		.wait('html')
		.evaluate(function(){
			// Grabs the length of the class car-title and pushes the html content into car model array.
			var modelOutput = [];
			for(var i=1; i<document.getElementsByClassName('car-title').length + 1; i++){
				modelOutput.push(document.querySelector('div#cars-container.vehicle-collection').children[i].children[0].children[2].children[0].innerHTML);
			}
			return modelOutput;

		})
		// Using regexp, check if the current model text is within the model array. If shown, increment chevroletMatchValue.
		.then(function(result){
			// console.log(result);
			var modelMatch = [];
			var GMCMatchValue = 0;
			var regexp = /(^|\W)GMC($|\W)+/g;
			for(var i=0; i<result.length; i++){
				modelMatch = result[i].match(regexp);
				// console.log(result[i].match(regexp));
				if(result[i].match(regexp) == ' GMC '){
					GMCMatchValue++;
				}
			}
			done();
			// Push into final results results for later display.
			finalResults.push('GMC: ' + GMCMatchValue);
			// console.log('GMC: ' + GMCMatchValue);
		})
		.catch(function(err){
			console.error(err);
		})
	});

	it('it should display the number of time the Jeep label appears on the first page results', function(done){
		Nightmare({ show: true })
		.goto('https://www.netdirectautosales.com/inventory/')
		.wait('.options')
		.click('div.heading.filter-heading-make')
		.click('a.filter-option-make.filter-value-Jeep')
		.wait('html')
		.evaluate(function(){
			// Grabs the length of the class car-title and pushes the html content into car model array.
			var modelOutput = [];
			for(var i=1; i<document.getElementsByClassName('car-title').length + 1; i++){
				modelOutput.push(document.querySelector('div#cars-container.vehicle-collection').children[i].children[0].children[2].children[0].innerHTML);
			}
			return modelOutput;

		})
		// Using regexp, check if the current model text is within the model array. If shown, increment chevroletMatchValue.
		.then(function(result){
			// console.log(result);
			var modelMatch = [];
			var JeepMatchValue = 0;
			var regexp = /(^|\W)Jeep($|\W)+/g;
			for(var i=0; i<result.length; i++){
				modelMatch = result[i].match(regexp);
				// console.log(result[i].match(regexp));
				if(result[i].match(regexp) == ' Jeep '){
					JeepMatchValue++;
				}
			}
			done();
			// Push into final results results for later display.
			finalResults.push('Jeep: ' + JeepMatchValue);
			// console.log('Jeep: ' + JeepMatchValue);

			// Displays the final results.
			for(var i=0; i<finalResults.length; i++){
				finalResultsOutput += finalResults[i] + '\n';	
			}
			console.log('\n\n\nFinal Results: \n' + finalResultsOutput);
		})
		.catch(function(err){
			console.error(err);
		})
	});
});
