document.getElementById('a').innerHTML = 'Merhaba yazı değişti'
document.getElementById('a').style.color = 'blue'

console.log('Methodum çalışıyor')


//Console kullanımı
let hedef = 3
function ates_et(){
    hedef = hedef + 2
    if(hedef < 12){
        console.log('Hedef vurulamadı');
    }else{
        console.log('Hedef vuruldu')
    }
}
ates_et();



//Değişkenler
const kimlik = "123123123"
let hava_sicaklik = 15
hava_sicaklik = 17
let k = 15
let K = 20
console.log(k)
console.log(K)



//Primitive - Referans Tip
let sayi1 = 15
let sayi2 = sayi1
sayi2 = 20
console.log('sayi1: ', sayi1);
console.log('sayi2: ', sayi2);
let object = {sayi3:15}
let object2 = object
object2.sayi3 = 20
console.log('sayi3: ', object.sayi3)
console.log('sayi3: ', object2.sayi3)


//Tip Dönüşümleri
/// string, number, boolean
/// date, object, array
console.log(typeof(false))
let sayi5 = '10'
console.log(typeof(Number(sayi5)))
let is_login = false
console.log(typeof(Number(is_login)))
let zaman = new Date()
console.log(typeof(zaman.toString()))
let array = [2,3,4]
console.log(typeof(array[0].toString()))
