let bankAccount: {
    money: number,
    deposit(value: number): void
} = {
    money: 2000,
    deposit(value) {
        this.money += value;
    }
};


let myself: {
    name: string,
    bankAccount: typeof bankAccount,  //after the colon we expect to be a type NOT object itself(must use typeof)
    hobbies: string[],
} = {
    name: "John",
    bankAccount: bankAccount,
    hobbies: ["Violin", "Cooking"]
};

myself.bankAccount.deposit(3000);
console.log(myself);