

/* Temel Fonksiyonlar */



function bedenKitleEndeksiHesapla(agirlik, boy){
    let hesap = agirlik / (boy*boy)
    console.log(`Beden kitle endeksiniz: ${hesap}`)
}

/* 
 1-) Camel Case
    bedenKitleEndeksiHesapla
 2-)   bedenKitleEndeksiHesapla
 3-)bedenKitleEndeksi

*/



/* Return */

function fahrenheitConvertToCelcius(fahrenheit){
    let celcius = ((fahrenheit-32) * 5) /9;
    return celcius;
}


function writeCelcius(celcius){
    console.log('celcius degeri: ',celcius)
}

writeCelcius(fahrenheitConvertToCelcius(100))



/* Recursive */

function getRecursive(sayi){
    console.log(sayi)
    if(sayi >0 ){
        getRecursive(--sayi);
    }
}

getRecursive(10)



/* Challange */

