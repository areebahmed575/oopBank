class Customer{
    firstName:string
    lastName:string
    Gender:string
    Age:number
    mobileNumber:string
    balance:number
    constructor(firstName:string,lastName:string,Gender:string,Age:number,mobileNumber:string,balance:number){
        this.firstName=firstName
        this.lastName=lastName
        this.Gender=Gender
        this.Age=Age
        this.mobileNumber=mobileNumber
        this.balance=balance
    }
    customerInfo(){
        return " Name: "+this.firstName+" "+this.lastName+" Age: "+this.Age+" mobileNumber:"+this.mobileNumber+" balance: "+this.balance+" "

    }
}
interface iBank{
    debit(amount:number):string
    credit(amount:number):string

}
class bank implements iBank{
    accountBalance:number
    constructor( ){
        this.accountBalance=100
    }
    debit(amount:number):string{
        let statement="You don't have insufucient balance"
        if(amount > 0){//if true then processed to if
            statement="amount you entered is wrong"
            if(this.accountBalance > amount){
                this.accountBalance=this.accountBalance - amount
                statement="Transaction sucessfull "+this.accountBalance+" "
            }
            else{
                statement="You don't have enough money to transaction"

            }
            

        }
        return statement
    }
    credit(amount:number): string {
        let statement="Transaction failed"
        if(amount > 0){
            this.accountBalance=this.accountBalance + amount
            if(amount > 100){
                this.accountBalance=this.accountBalance - 1
            }
            statement = "You account  has been credit sucessfully"
        }
        return statement
        
    }
}
const customer1=new Customer("Areeb","Ahmed","Male",22,"0231",1000)
const bank1=new bank()
console.log(bank1.credit(50))
//console.log(bank1.debit(52))