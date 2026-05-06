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

export class Hero extends Person {

    constructor(
        public alterEgo: string,
        public age : number,
        public realName: string,
    
    ) {
        super(realName,'New York');
    }

}


const iroman = new Hero('Ironman',45,'Tony');
console.log(iroman)