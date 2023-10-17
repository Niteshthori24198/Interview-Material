// The Builder pattern is used to create objects in "steps". Normally we will have functions or methods that add certain properties or methods to our object.
// The cool thing about this pattern is that we separate the creation of properties and methods into different entities.
// If we had a class or a factory function, the object we instantiate will always have all the properties and methods declared in that class/factory. But using the builder pattern, we can create an object and apply to it only the "steps" we need, which is a more flexible approach.
var Nitesh = /** @class */ (function () {
    function Nitesh(income, email, relationshipstatus) {
        this.income = income;
        this.email = email;
        this.relationshipstatus = relationshipstatus;
    }
    return Nitesh;
}());
var NiteshBuilder = /** @class */ (function () {
    function NiteshBuilder() {
    }
    NiteshBuilder.prototype.SetIncome = function (amt) {
        this.income = amt;
        return this;
    };
    NiteshBuilder.prototype.SetEmail = function (email) {
        this.email = email;
        return this;
    };
    NiteshBuilder.prototype.SetRelationShipStatus = function (status) {
        this.relationshipstatus = status;
        return this;
    };
    NiteshBuilder.prototype.Build = function () {
        return new Nitesh(this.income, this.email, this.relationshipstatus);
    };
    return NiteshBuilder;
}());
var b = new NiteshBuilder();
var newnitesh = b.SetEmail('nitesh@1').SetIncome(100).SetRelationShipStatus(true).Build();
console.log(newnitesh);
