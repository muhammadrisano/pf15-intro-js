// array
// const hobies = ['ngoding', 'joging', 'gaming', 'reading']
// const lastHobi = hobies[3]
// const myhoby = hobies[1]

// console.log(lastHobi)
// console.log(myhoby)
// console.log(hobies[2])


// object

const product ={
    name: 'Indomie Ayam Goreng',
    description: 'Indomie bla bla',
    price : 3500,
    stock: 10,
}

const priceProduct = product.price

// console.log(priceProduct)
// console.log(product.description)

// array of object

// const products = [
//     {
//         name: 'Mie indomie ayam goreng',
//         description: 'indomie bla bla',
//         price: 3500,
//         stock: 10,
//         kodeProduksi: [20, 10, 15],
//         distributor: {
//             nama: 'PT.jalan-jalan',
//             alamat: 'jl. test'
//         }
//     },
//     {
//         name: 'Sarimie kari ayam ',
//         description: 'sarimie bla bla',
//         price: 4000,
//         stock: 15,
//         kodeProduksi: [20, 40, 45],
//         distributor: {
//             nama: 'PT.ABC',
//             alamat: 'jl. test',
//         }
//     },
//     {
//         name: 'Mie gelas kari ayam ',
//         description: 'mie gelas bla bla',
//         price: 1500,
//         stock: 20,
//         kodeProduksi: [10, 20, 35],
//         distributor: {
//             nama: 'PT.DEF',
//             alamat: 'jl. test'
//         }
//     },
// ]

// const data = products[2].distributor.nama

const name = "risano"

// console.log(data)
const biodata = {
    name,
    hobies: ['ngding', 'joging', 'gaming'],
    email: 'risano@gmail.com'
}

// const lastHoby = biodata.hobies[2]
console.log(biodata)

// console.log(lastHoby)
// pertemuan 2 tugas 1a
function printNamaLengkap(data){
// logic disini
}
printNamaLengkap(biodata)

// 1b
function printRiwayatPendidikan(data){
    // logic
}
printRiwayatPendidikan(biodata)

// soal 2
function looping(num){
    // logicnya disini

}

looping(5)
// “Looping ke 0”
// “Looping ke 1”
// “Looping ke 2”
// “Looping ke 3”
// “Looping ke 4”

// soal 3
const hobies = ['ngoding', 'joging', 'gaming', 'reading']
function printHobbies(listHobi){
    // logic
}
printHobbies(hobies)

// “Hobi ke 1 adalah ngoding”
// “Hobi ke 2 adalah joging"
// “Hobi ke 3 adalah gaming"
// “Hobi ke 4 adalah reading"

// soal 4

function checkPassingGrade(grade){
    // logic disini
}

const gradeCheckMessage = checkPassingGrade(70)

console.log(gradeCheckMessage)
