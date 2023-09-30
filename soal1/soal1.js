
const shapes = require('./shapes');

const sisiPersegi = 5;
const panjangPersegiPanjang = 6;
const lebarPersegiPanjang = 4;

const luasPersegi = shapes.hitungLuasPersegi(sisiPersegi);
const kelilingPersegi = shapes.hitungKelilingPersegi(sisiPersegi);
const luasPersegiPanjang = shapes.hitungLuasPersegiPanjang(panjangPersegiPanjang, lebarPersegiPanjang);
const kelilingPersegiPanjang = shapes.hitungKelilingPersegiPanjang(panjangPersegiPanjang, lebarPersegiPanjang);

console.log(`Luas Persegi: ${luasPersegi}`);
console.log(`Keliling Persegi: ${kelilingPersegi}`);
console.log(`Luas Persegi Panjang: ${luasPersegiPanjang}`);
console.log(`Keliling Persegi Panjang: ${kelilingPersegiPanjang}`);
