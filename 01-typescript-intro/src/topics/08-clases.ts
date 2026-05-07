

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


/*export class Hero extends Person {

    

    constructor(
        public alterEgo: string,
        public age : number,
        public realName: string,
    
    ) {
        super(realName,'New York');
    }

}*/


//CLASE SIN  EXTENDS   OTRA FROMA DE HACER HERENCIA
export class Hero {

   // public  person : Person;
    

    constructor(
        public alterEgo: string,
        public age : number,
        public realName: string,
        public person : Person,

    
    ) {
       // this.person= new Person(realName);
    }

}



const tony = new Person('Tony Stark','New York');
const iroman = new Hero('Ironman',45,'Tony',tony);
console.log(iroman)