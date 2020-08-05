describe('main.js', function () {
    describe('calculate', function() {
        it('validate expression when first number is invalid', function() {
            spyOn(window, 'updateResult').and.stub();    //spyOn(object that contain the function,function)
                                   // stub just to ensure dont call or return anything from that method.
            calculate('a+3');     // now calulate will work even if updateresult doesnt work
            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith('Operation not recognized');
            expect(window.updateResult).toHaveBeenCalledTimes(1);
        });
        it('validate expression when second number is invalid', function() {
            spyOn(window, 'updateResult');    //.and.stub is default and can be omitted
            calculate('3+a'); 
            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith('Operation not recognized');
            expect(window.updateResult).toHaveBeenCalledTimes(1);
        });
        it('validate expression when operation is null', function() {
            spyOn(window, 'updateResult');  
            calculate('3_4'); 
            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith('Operation not recognized');
            expect(window.updateResult).toHaveBeenCalledTimes(1);
        });
        it('calls add', function() {
            spyOn(Calculator.prototype,'add');
            calculate('3+4');
            expect(Calculator.prototype.add).toHaveBeenCalled();
            expect(Calculator.prototype.add).toHaveBeenCalledTimes(2);
        });
        it('calls subtract', function() {
            let spy = spyOn(Calculator.prototype,'subtract');
            calculate('4 - 3');
            expect(spy).toHaveBeenCalled();
            expect(spy).toHaveBeenCalledWith(3)
            expect(spy).toHaveBeenCalledTimes(1);
        });
        it('calls multiply', function() {
            let spy = spyOn(Calculator.prototype,'multiply');
            calculate('4 * 3');
            expect(spy).toHaveBeenCalled();
            expect(spy).not.toHaveBeenCalledWith(4);
            expect(spy).toHaveBeenCalledWith(3);
            expect(spy).toHaveBeenCalledTimes(1);
        });
        it('calls divide', function() {
            let spy = spyOn(Calculator.prototype,'divide');
            calculate('12 / 3');
            expect(spy).toHaveBeenCalled();
            expect(spy).toHaveBeenCalledWith(3);
            expect(spy).toHaveBeenCalledTimes(1);
        });
        it('calls updateResult', function() {
            spy = spyOn(window,'updateResult');
           /* spyOn(Calculator.prototype, 'add').and.callThrough();
              spyOn(Calculator.prototype, 'add').and.callFake(function(number){
               return 7;   //implement just like real function
              });
              spyOn(Calculator.prototype, 'add').and.returnValue(7); // instead of actual implementation
                                                                        just return this value
            
              spyOn(Calculator.prototype, 'add').and.returnValues(null,7);                                                                       
            */
            calculate('4+3');
            expect(spy).toHaveBeenCalled();
            expect(spy).toHaveBeenCalledWith(7);
        });
        it('does not handle error', function() {
            spyOn(Calculator.prototype, 'add').and.throwError('some error');
            expect(function() { calculate('4+4')}).toThrowError('some error');
        });

    });
    describe('updateResult', function () {
        let element;
        beforeAll(function() {
            element = document.createElement('div')
            element.setAttribute('id', 'result');
            document.body.appendChild(element);
        });
        afterAll(function() {
            element = document.getElementById('result');
            document.body.removeChild(element);
        });
        it('adds result to DOM element', function () {
            updateResult('5');
            expect(element.innerText).toBe('5');
        });
    });

    describe('showVersion', function() {
        it('calls the calculator.version', function() {
            spyOn(document,'getElementById').and.returnValue({
                innerText: null
            })
            let spy = spyOnProperty(Calculator.prototype,'version', 'get');
           /* let spy = spyOnProperty(Calculator.prototype,'version', 'get').returnValue(
                Promise.resolve()
            );
            */
            showVersion();
            expect(spy).toHaveBeenCalled();
        });
        /* it('fetches from external source', function(done) {
             spyOn(window, 'fetch').and.returnValue(Promise.resolve(new Response({"version": "0.1"})));
             Calculator.version.then(function(version){
                 expect(version).toBe('0.1');
                 done();
             })
           })*/
           /* it('fetches from external source', async function(done) {
             spyOn(window, 'fetch').and.returnValue(Promise.resolve(new Response({"version": "0.1"})));
                 let version = await Calculator.version
                 expect(version).toBe('0.1');
                 done();
           })*/
    });
});