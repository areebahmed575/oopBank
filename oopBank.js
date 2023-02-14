class Customer {
    firstName;
    lastName;
    Gender;
    Age;
    mobileNumber;
    balance;
    constructor(firstName, lastName, Gender, Age, mobileNumber, balance) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.Gender = Gender;
        this.Age = Age;
        this.mobileNumber = mobileNumber;
        this.balance = balance;
    }
    customerInfo() {
        return " Name: " + this.firstName + " " + this.lastName + " Age: " + this.Age + " mobileNumber:" + this.mobileNumber + " balance: " + this.balance + " ";
    }
}
class bank {
    accountBalance;
    constructor() {
        this.accountBalance = 100;
    }
    debit(amount) {
        let statement = "You don't have insufucient balance";
        if (amount > 0) { //if true then processed to if
            statement = "amount you entered is wrong";
            if (this.accountBalance > amount) {
                this.accountBalance = this.accountBalance - amount;
                statement = "Transaction sucessfull " + this.accountBalance + " ";
            }
            else {
                statement = "You don't have enough money to transaction";
            }
        }
        return statement;
    }
    credit(amount) {
        let statement = "Transaction failed";
        if (amount > 0) {
            this.accountBalance = this.accountBalance + amount;
            if (amount > 100) {
                this.accountBalance = this.accountBalance - 1;
            }
            statement = "You account  has been credit sucessfully";
        }
        return statement;
    }
}
const customer1 = new Customer("Areeb", "Ahmed", "Male", 22, "0231", 1000);
const bank1 = new bank();
console.log(bank1.credit(50));
export {};
//console.log(bank1.debit(52))
