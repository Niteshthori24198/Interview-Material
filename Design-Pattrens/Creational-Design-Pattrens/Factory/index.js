var A = /** @class */ (function () {
    function A() {
    }
    A.getInstance = function () {
        if (A.a == undefined) {
            var instance = new A();
            A.a = instance;
        }
        return A.a;
    };
    A.prototype.hello = function () {
        console.log('hyy');
    };
    return A;
}());
var Bakshi = A.getInstance();
var Nitesh = A.getInstance();
Bakshi.hello();
Nitesh.hello();
console.log(Bakshi === Nitesh);
