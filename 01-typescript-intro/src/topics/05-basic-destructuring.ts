

interface AudioPlayer{
audioVolume:number;
songDuration:number;
song:string;
details:Details;
}

interface Details{
    author: string;
    year:number;
}


const audioPlayer: AudioPlayer={
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author:'Ed Sheeran',
        year:2015,
    }
}
//La destructuracion es y sirve para tomar de mi const varias piezas que me sirven
const {song:anotherSong ,songDuration:duration,details}=audioPlayer
const{author}=details;
console.log('Song',anotherSong);
console.log('Duration',duration);
console.log('author',author);


//destructurizaccion de los arreglos V1
const dbz : string[]=['Goku','Vegeta','Trunks'];
console.log('Personaje 3 :',dbz[3]|| 'No hay personaje ')

//destructurizaccion de los arreglos V2
const [, , trunks='Not fond'] : string[]=['Goku','Vegeta'];
console.error('Personaje 3 :', trunks)







export{}