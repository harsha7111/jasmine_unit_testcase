/*
suites : group of specs/tests
 
describe('description', function() {

});

specs : group of expectations

it('title', function() {

});

expectations: assertion
5+ 5 = 10 ---statement

expect 5+5 to be 10 --true
expect 5+4 to be 9 --false

 <-----note---------add the spec file in spec runner html file--------->


 disabled spec:  spec will report as pending and not be 
 just add x
   xit();

disabled suit: all the spec will be marked as pending
 xdescribe();


 matcher : function that implements a boolean comparison between actual and expected value
   (actual value).toBe(expected value)
    responsible to pass or fail  the spec

 toBe ==> ===
 ToEqual ==> deep comparison (key and values should be same use for objects)
 toBeTruthy() ==> truth value
 toBeFalsy() ==> false value
 toBeUndefined() ==> undefined value
 toBeDefined() ==> not be undefined value
 toBeNull() ==> null value
 toContain() ==> actual value to contain specific value (used for array and strings)
 toBeNaN() ==> not a number
 toThrow() ==> function to throw something
 toThrowError() ==> function to throw error (can check msg as well)
 toMatch() ==> actual value to match regular expression
 
 negative assertion( use not)
 (actual value).not.toBe(expected value)

 Custom Matchers:
  can be register by jasmine.addMatchers();

// third party matchers
   need to add jasmine.matchers file to use it

// nested suits
  to organize the specs better 

 setup -- beforeEach, beforeAll
 teardown -- to clean up  afterEach, afterAll
//beforeEach
  executed before each spec in the suit in which it is called

//beforeAll
  executed only once before all the spec in the suit in which it is called

//afterEach
  executed after each spec in the suit in which it is called

//afterAll
  executed only once after all the spec in the suit in which it is called

 */

describe('calculator.js', function () {      //filename
    
    describe('Calculator', function() {     // class name
        let calculator;
        beforeEach( function() {
            calculator = new Calculator();
        });
        it('should initialize the total', function() {
            //const calculator = new Calculator();   
            expect(calculator.total).toBe(0);
        });
    
        it('can be instantiated', function() {
           // const calculator = new Calculator();
            const calculator1 = new Calculator();
            //calculator.total = 10;
            expect(calculator).toBeTruthy();
            expect(calculator).toEqual(calculator1);
        });
    
        it('has common operations', function() {
            //const calculator = new Calculator();
            expect(calculator.add).not.toBeUndefined();
            expect(calculator.subtract).not.toBeUndefined();
            expect(calculator.multiply).toBeDefined();
            expect(calculator.divide).toBeDefined();
        });

        describe('add', function() {       // methods 
            it('should add number to total', function () {
               // const calculator = new Calculator();   //get the instance  add the file in spec runner file to get the instance
                calculator.add(5);                       // call the function
                expect(calculator.total).toBe(5);
            });
        });
        describe('subtract', function() {
            it('should subtract number from total', function () {
               // const calculator = new Calculator();   
                calculator.total = 35;
                calculator.subtract(5);                       
                expect(calculator.total).toBe(30);
            });
        });
        describe('multiply', function() {
            it('should multiply total by number', function () {
               // const calculator = new Calculator();   
                calculator.total = 100;
                calculator.multiply(2);                       
                expect(calculator.total).toBe(200);
            });
            it('does not handle NaN', function() {
               // const calculator = new Calculator();
                calculator.total = 20;
                calculator.multiply('a');
                expect(calculator.total).toBeNaN();
            });
        });
        describe('divide', function() {
            it('should divide total by number', function () {
                //const calculator = new Calculator();   
                calculator.total = 100;
                calculator.divide(5);                       
                expect(calculator.total).toBe(20);
            });
            it('handles divide be zero', function() {
                //const calculator = new Calculator();
                //expect(calculator.divide(0)).toThrow();   give error
                expect(function() {calculator.divide(0)}).toThrow();
                expect(function() {calculator.divide(0)}).toThrowError(Error);
                expect(function() {calculator.divide(0)}).toThrowError(Error, 'cannot divide by zero');
            });
        });
    
    });

});