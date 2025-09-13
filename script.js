//latitude (широта) и longitude (долгота).

let positionLat = 10;
let positionLong = 12;
let adressLat = 15;
let adressLong = 20;
const distance = Math.sqrt((adressLat - positionLat) ** 2 + (adressLong - positionLong) ** 2);
console.log(distance);