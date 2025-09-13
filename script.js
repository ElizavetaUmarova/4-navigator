//latitude (широта) и longitude (долгота).

let positionLat = 10;
let positionLong = 12;
let addressLat = 15;
let addressLong = 20;
const distance = Math.sqrt((addressLat - positionLat) ** 2 + (addressLongg - positionLong) ** 2);
console.log(distance);