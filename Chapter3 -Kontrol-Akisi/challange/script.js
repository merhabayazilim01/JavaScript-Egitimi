



// Taş  -  Kağıt - Makas

let secenekler = ['TAS', 'KAGIT' ,'MAKAS']

let bilgisayar_secenek = secenekler[Math.floor(Math.random()*3)]

let kullanici_secenek = prompt('Herhangi birini yazınız(TAS, KAGIT,MAKAS)')

let sonuc;

if(bilgisayar_secenek === 'TAS' && kullanici_secenek === 'TAS'){
    sonuc = 'berabere';
}
if(bilgisayar_secenek === 'TAS' && kullanici_secenek === 'KAGIT'){
    sonuc = 'kullanici';
}
if(bilgisayar_secenek === 'TAS' && kullanici_secenek === 'MAKAS'){
    sonuc = 'bilgisayar';
}
if(bilgisayar_secenek === 'KAGIT' && kullanici_secenek === 'TAS'){
    sonuc = 'bilgisayar';
}
if(bilgisayar_secenek === 'KAGIT' && kullanici_secenek === 'KAGIT'){
    sonuc = 'berabere';
}
if(bilgisayar_secenek === 'KAGIT' && kullanici_secenek === 'MAKAS'){
    sonuc = 'kullanici';
}
if(bilgisayar_secenek === 'MAKAS' && kullanici_secenek === 'TAS'){
    sonuc = 'kullanici';
}
if(bilgisayar_secenek === 'MAKAS' && kullanici_secenek === 'KAGIT'){
    sonuc = 'bilgisayar';
}
if(bilgisayar_secenek === 'MAKAS' && kullanici_secenek === 'MAKAS'){
    sonuc = 'berabere';
}

switch(sonuc){
    case 'berabere':
        console.log('Berabere')
        console.log(`${bilgisayar_secenek} - ${kullanici_secenek}`)
        break;
    case 'kullanici':
        console.log('Kullanici Kazandı')
        console.log(`${bilgisayar_secenek} - ${kullanici_secenek}`)
        break;
    case 'bilgisayar':
        console.log('Bilgisayar kazandı')
        console.log(`${bilgisayar_secenek} - ${kullanici_secenek}`)
        break; 
    default:
        console.log('Yanlıs ifade')
        alert('Yanlıs giris yaptınız')
        break;    
        
}
