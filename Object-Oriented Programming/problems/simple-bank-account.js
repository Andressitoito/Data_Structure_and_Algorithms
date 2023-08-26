/*Create a Class for a Simple Bank Account

Imagine you're tasked with creating a basic bank account system.
You need to define a class called BankAccount that has the following features:

It should have properties for accountNumber (a unique identifier), accountHolder (the name of the account holder), and balance (the current account balance).

It should have methods for deposit(amount) and withdraw(amount) to update the balance. */

class BankAccount {
	constructor(accountNumber, accountHolder, balance) {
		this.accountNumber = accountNumber;
		this.accountHolder = accountHolder;
		this.balance = balance;
	}

	deposit(deposit_qty) {
		if (deposit_qty < 0) {
			return "Deposit error, negative deposit are forbidden";
		}

		this.balance = this.balance + deposit_qty;
		console.log(this.balance);
	}

	withdraw(withdraw_qty) {
		if (withdraw_qty < 0) {
			return "Withdraw error, negative withdrawls are forbidden";
		}
		this.balance = this.balance - withdraw_qty;
		console.log(this.balance);
	}

	showData() {
		console.log(this.accountNumber);
		console.log(this.accountHolder);
		console.log(this.balance);
	}
}

const AndyBankAccount = new BankAccount(43234, "Andy Script", 1000);

AndyBankAccount.showData();
AndyBankAccount.deposit(300);
AndyBankAccount.withdraw(600);
