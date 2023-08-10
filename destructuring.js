// tidak pakai destructuring
// const akun = {
//     name: 'risano',
//     email: 'risano@Mgail.com',
//     isMeried: true,
//     password: 'abcd1234'
// }
// const name = akun.name
// const email = akun.email
// const isMeried = akun.isMeried
// const password = akun.password


// console.log(name)
// console.log(email);

// menggunakan destructuring
const akun = {
    name: 'risano',
    email: 'risano@Mgail.com',
    isMeried: true,
    password: 'abcd1234',
    address:{
        alamat: 'Jl. padang',
        kelurahan: 'jadi',
        kecamatan: 'padang timur',
        kota: 'padang',
        negara: 'indonesia'
    }
}

// const {email, password, address} = akun

// const kota = "pekanbaru"

// console.log(address)
// const {alamat, kota:city} = akun.address
// console.log(alamat)
// console.log(city)

// const {email, address} = akun

// console.log(email)
// console.log(address)



// tidak menggunakan destructuring
// const hobies = ['ngoding', 'joging', 'gaming']

// const hobi1 = hobies[0]
// const hobi2 = hobies[1]
// const hobi3 = hobies[2]

// console.log(hobi2)

// dan menggunakan destructuring

const hobies = ['ngoding', 'joging', 'gaming']

const [hobi1, bebas] = hobies

console.log(hobi1)
console.log(bebas)
