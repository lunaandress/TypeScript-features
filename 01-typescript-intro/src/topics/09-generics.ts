

//Funcion del Tipo Generico

export function whatsMyYpe<T>(argument:T) :T{
return argument;
}

// si defino  la variable y es otro tipo de dato dara error
let amString =  whatsMyYpe<string>('Hola mundo');
let amNumber =  whatsMyYpe(100);
let amArrays=  whatsMyYpe([1,2,3,4,5]);

console.log(amString.split(' '));
console.log(amNumber.toFixed());
console.log(amArrays.join('-'));