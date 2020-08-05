function Calculator() {
    this.total = 0;
}

Calculator.prototype.add = function(number) {
    return this.total = this.total + number;
}

Calculator.prototype.subtract = function(number) {
    return this.total = this.total - number;
}

Calculator.prototype.multiply = function(number) {
    return this.total = this.total * number;
}

Calculator.prototype.divide = function(number) {
    if(number === 0) 
        throw new Error('cannot divide by zero');
    return this.total = this.total / number;
}

Object.defineProperty(Calculator.prototype, 'version', {
    get: function() {
       return '0.1'
    //    return fetch('').then(function(result){
    //      return result.json()
    //    })
    //    .then(function(json) {
    //         return json.version
    //    });
    },
    enumerable: true,
    configurable: true
});