

// İf  - Else - Else if

/*
if(expression){

}

*/


let rain = false

if(rain){
    console.log('Semsiye al')
}else{
    console.log('Semsiyeni alma')
}


let maas = 150
let vergi = 0



if(maas < 200 && maas > 100){
    vergi = 100
}
else if( maas > 200 && maas <900){
    vergi = 500
}else{
    vergi = 1000
}

console.log(vergi)


// expression ? true : false

let yas = 25

let erisim = yas > 18 ? true : false

console.log(erisim)