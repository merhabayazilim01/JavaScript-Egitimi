let sicaklik = 15
let lokasyon = 'Bursa'
let kar_Varmi = true;

//sicaklik convert string
sicaklik = toString(sicaklik)


//kar_varmi convert number
kar_Varmi = Number(kar_Varmi)


//kar_varmi convert eğer 1 ise kar var yok ise kar yok
if(kar_Varmi == 1){
    kar_Varmi = 'Kar var'
}else{
    kar_Varmi = 'Kar yok'
}


//dom ile hepsini yerleştir

lokasyon = 'Ankara'
sicaklik = 20
sicaklik = sicaklik.toString() // 20
sicaklik = 'Sıcaklık = ' + sicaklik

document.getElementById('lokasyon').innerHTML = lokasyon
document.getElementById('hava').innerHTML = sicaklik
document.getElementById('yagis').innerHTML = kar_Varmi

