
// Interface datos
interface Product {
    description : string;
    price : number;
}


interface TaxCalculatorOptions{
    tax: number,
    products: Product[],
}

//Objetos

const phone : Product ={
description:'Nokia A1',
price: 150.0,
}

const tablet : Product={
    description: 'iPad Air',
    price: 250.0
}


//Cuando una funcion  va a resivir  mas de 3 argumentos se recomienda usar options
function taxCalculator(options:TaxCalculatorOptions):number[]{

    let total= 0;
    options.products.forEach(product =>{
        total+= product.price;
    });
    return [total, total*options.tax];

}



const shoppingCart = [phone,tablet];
const tax= 0.15

const result = taxCalculator({
    products:shoppingCart,
    tax: tax,
});


console.log('Total', result[0]);
console.log('Total', result[1]);




export{}