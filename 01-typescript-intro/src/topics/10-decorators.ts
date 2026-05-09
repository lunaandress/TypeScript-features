
//DECORADOR ejemplo pero por lo general no creamos nosotros

/*function classDecorator(
    constructor: any
){
        return class extends constructor{
            newProperty ='New Cónstructor';
            hello='override'
        }
}




@classDecorator*/
export class SuperClass{

    public myProperty: string='Abc123';

    print(){
        console.log('Hola Mundo')
    }
}

console.log(SuperClass);

const myClass = new SuperClass();
console.log(myClass);