// function

// const name = 'risano'

// function sayHelo(val1){
//     console.log('helo bro.... '+ val1)
// }

// sayHelo('budi')
// sayHelo(name)

// function penjumlahan(val1, val2, val3, val4,  val5, val6, val7){
//     const result = val1 + val2 + val3 + val4 + val5+ val6 + val7
//     console.log('perintah 1');
//     console.log('perintah 2');
//     return result
// }

function penjumlahan(...val){

    let result = 0
    for(let i = 0; i<val.length; i++){
        result += val[i]
    }
    return result

    // const result = val1 + val2 + val3 + val4 + val5+ val6 + val7
    // console.log('perintah 1');
    // console.log('perintah 2');
    console.log(val)
    // return result
}

const hasilPenjumalahn1 = penjumlahan(20, 50, 10, 40, 10, 30, 4, 15)
console.log(hasilPenjumalahn1)
// const hasilPenjumalahn2 = penjumlahan(30, 20)

// const result = hasilPenjumalahn1 - hasilPenjumalahn2

// console.log(result);