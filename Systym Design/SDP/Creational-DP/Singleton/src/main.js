"use strict";
// The Singleton Pattern ensures that a class has only one instance and provides a global point of access to it.
class Database {
    constructor() { }
    static getConnectionInstance() {
        if (!Database.connection) {
            Database.connection = new Database();
        }
        return Database.connection;
    }
}
let c1 = Database.getConnectionInstance();
let c2 = Database.getConnectionInstance();
console.log(c1 == c2);
