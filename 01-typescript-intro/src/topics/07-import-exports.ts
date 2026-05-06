import{type Product} from './06-function-destructurin'
import {taxCalculator} from  './06-function-destructurin'


const shoppinCart:Product[] =[
    {
        description:'Nokia',
        price: 100
    },
    {
        description:'iPad',
        price: 150

    }
];


const [total , tax ]= taxCalculator({
    tax: 0.15,
    products: shoppinCart
});


console.log('Total', total)
console.log('Tax', tax)
