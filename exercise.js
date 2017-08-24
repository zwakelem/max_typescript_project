"use strict";
var bankAccount = {
    money: 200,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: "Zwaks",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};
myself.bankAccount.deposit(3000);
console.log(myself);
