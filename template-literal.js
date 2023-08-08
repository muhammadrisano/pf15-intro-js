/*

Nilai Bahasa indonesia = 80
Nilai Matematika = 75
rata-rata nilai saya = 77,5

*/

// contact

const bi = 80
const mtk = 75

const text = 'Nilai Bahasa indonesia = '+ bi +'\n'+ 
'Nilai Matematika = '+ mtk + '\n' + 
'rata-rata nilai saya '+ ((bi + mtk) / 2)

// console.log(text)

// Template literal
const text2 = `Nilai Bahasa Indonesia ${bi}
Nilai Matematika = ${mtk}
rata-rata nilai saya ${(bi + mtk) / 2}`

console.log(text2)