


/* CHAPTER 5 CHALLANGE */


function Urun(isim, model, fiyat,stok){
    this.isim = isim;
    this.model = model;
    this.fiyat = fiyat;
    this.stok = stok;
}

let urun1 = new Urun("ürün1", "a", "15", "100");
let urun2 = new Urun("ürün2", "a", "15", "100");
let urun3 = new Urun("ürün3", "a", "15", "100");
let urun4 = new Urun("ürün4", "a", "15", "100");
let urun5 = new Urun("ürün5", "a", "15", "100");
let urun6 = new Urun("ürün6", "a", "15", "100");
let urun7 = new Urun("ürün7", "a", "15", "100");
let urun8 = new Urun("ürün8", "a", "15", "100");
let urun9 = new Urun("ürün9", "a", "15", "100");
let urun10 = new Urun("ürün10", "a", "15", "100");


let envanter = []

envanter.push(urun1,urun2,urun3,urun4,urun5,urun6,urun7,urun8,urun9,urun10);

envanter.pop()

envanter.shift()

console.log(envanter)