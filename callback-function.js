// function printData(data) {
//   console.log(data);
// }

// function sayHelo(name, callback) {
//   const text = `helo.. ${name} !`;
//   callback(text);
// }

// sayHelo("risano", function (data) {
//   console.log(data);
// });

// function printData(data){
//     console.log(data)
// }

// const print = printData

// print('helo world')

const formatData = (data)=>{
    const text = `Hasil penjumlahan = ${data}`
    console.log(text)
}


const penjumlahan = (va1, val2, format)=>{
    const result = va1 + val2
    format(result)
}

penjumlahan(10, 40, formatData)

penjumlahan(10, 20, (result)=>{
    const text = `hasil : ${result}`
    console.log(text)
})