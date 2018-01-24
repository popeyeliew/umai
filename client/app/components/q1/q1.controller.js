class Q1Controller {
  constructor() {
    this.showResults = false;

    this.calculationType = 'simple';
    this.principal = 100;
    this.interestRate = 1.04;
    this.years = 5;
    this.frequency = 2;

    this.yearlyResult = [];
    this.grandResult = { interest:0, amount: 0 };
  }

  calculate() {
    this.yearlyResult = [];
    this.grandResult = { interest:0, amount: 0 };

    if (this.calculationType === 'compound') {
      for (let i=1; i<=this.years; i++) {
        let interest = 0;
        const amount = (this.principal * Math.pow((1 + (this.interestRate/(this.frequency*100))), (this.frequency*i)));

        if (i == 1) {
          interest = (amount.toFixed(2) - this.principal).toFixed(2);
        } else {
          interest = (amount.toFixed(2) - this.yearlyResult[i-2].amount).toFixed(2);
        }

        this.yearlyResult.push({
          year: i,
          interest: interest,
          amount: amount.toFixed(2), 
        });

      }
      const lastResult = this.yearlyResult[this.yearlyResult.length - 1];
      this.grandResult.interest = (parseFloat(lastResult.amount) - this.principal).toFixed(2);
      this.grandResult.amount = lastResult.amount;
    } else {
      const interestPerYear = this.principal * this.interestRate / 100;
      const amount = (interestPerYear + this.principal).toFixed(2)

      for (let i=1; i<=this.years; i++) {
        this.yearlyResult.push({
          year: i,
          interest: interestPerYear,
          amount: amount, 
        });

        this.grandResult.interest += interestPerYear;
      }
      
      this.grandResult = {
        interest: this.grandResult.interest.toFixed(2),
        amount: (parseFloat(this.principal) + this.grandResult.interest).toFixed(2)
      };
    }

    this.showResults = true;
  }
}

export default Q1Controller;
