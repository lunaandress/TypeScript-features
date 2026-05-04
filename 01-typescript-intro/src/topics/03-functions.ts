
//FUNCIONES

function addNUmbers(a : number  , b :number){
    return a+b;
}

function multiply(firstNumber: number , secondNmber?: number , base: number=2){
return firstNumber * base;
}

const addNumberArrow = (a:number , b:number):string=>{
return `${a + b}`;
}

//const result=addNUmbers(1,2);
//const result2 : string=addNumberArrow(1,5)
//const multiplyResult: number =multiply(5)

//console.log(result,result2 , multiplyResult)

//CREAMOS UNA INTERFAZ DEL PERSONAJE  TIPAR

interface Character{
    name:string ;
    hp: number;
    showHp:()=>void // aqui de esta forma definimos una funcion dentro de una inte
}

const healCharacter=(character  : Character, amount:number )=>{
    character.hp += amount
}

const strider : Character={
    name:'Strider',
    hp:50,
    showHp(){
        console.log(`Puntos de vida ${this.hp}`)
    }
}



healCharacter(strider,10)
healCharacter(strider,50)
strider.showHp();

export{}