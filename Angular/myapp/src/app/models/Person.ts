export class Person {
    constructor(
        public weight = 0,
        public heightCm = 0,

    ) {



    }

    public get BMI() {
        
        const heightM = this.heightCm/ 100.0;
        return this.weight/(heightM ** 2)

    }
    public get BmiCategory(){
        const bmi =  this.BMI
        if (bmi > 25)
            return 'overweight';
        else if(bmi < 18.5)
            return 'underweight';
        else
            return 'normal';
    }

}