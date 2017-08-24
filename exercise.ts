type BankAccount = {money: number, deposit: (val: number) => void};

let bankAccount: BankAccount = {
    money: 200,
    deposit(value) {
        this.money += value;
    }
};


let myself: {name:string, bankAccount:BankAccount,hobbies:string[]} = {
    name: "Zwaks",
    bankAccount: bankAccount,
    hobbies: ["Sports","Cooking"]
};

myself.bankAccount.deposit(3000);

console.log(myself);