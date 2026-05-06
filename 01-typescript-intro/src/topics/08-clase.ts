export class Person{

    public name : string;
    public address : string;

    constructor(name: string , address:string){
        this.name=name;
        this.address=address
    }

    /*constructor(
    public name: string ,
    privete address:string
    ){}*/
}


const iroman = new Person('Ironman','New York');
console.log(iroman)