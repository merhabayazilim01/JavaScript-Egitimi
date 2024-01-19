fetch("http://www.google.com").then(res =>{
    console.log(res)
}).catch(err =>{
    console.log('Hata var: ', err);
    console.log('İkinci burası')
})

console.log('İlk burası')


let sensor1 = [10,20,30]
let sensor2 = [20,20,30]
let sensor3 = [30,20,30]

const arrAvg = arr => Number(arr.reduce((a,b) => a+b, 0) / arr.length)

let sensorAll = [sensor1 ,sensor2 ,sensor3]

const ortalamalar = sensorAll.map(sensor=> arrAvg(sensor))

console.log(ortalamalar)


localStorage.setItem("Merhaba Yazılım", "Javascript")
console.log(localStorage.getItem("Merhaba Yazılım"))