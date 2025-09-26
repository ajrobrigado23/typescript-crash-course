"use strict";
class Customer {
    // define a constructor
    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }
    // getter and setter methods
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
    }
}
// create an instance
let myCustomer = new Customer("Martin", "Dixon");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
