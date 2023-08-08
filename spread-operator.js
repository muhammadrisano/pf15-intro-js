// memasukan array ke dalam array lain

// const hobies = ['ngoding', 'gaming']
// const newHobies = [ 'joging', 'swimming', ...hobies]

// console.log(newHobies)

// menggabung 2 array

const myHobies = ['ngoding', 'gaming']
const friendHobies = ['gaming', 'swimming']

const allHobies = [...myHobies, ...friendHobies]

// console.log(allHobies)


// meng copy / clone object

// const biodata = {
//     name: 'risano',
//     age: 17,
//     isMeried: true,
//     email: 'risano@gmail.com'
// }

// const friendBiodata = {...biodata}

// friendBiodata.name = "budi"
// friendBiodata.age = 20
// friendBiodata.isMeried = false


// console.log(friendBiodata)
// console.log(biodata)

// untuk menggabungkan object
const myBiodata = {
    name: 'risano',
    age: 17,
    isMeried: true,
    email: 'risano@gmail.com'
}

const newBiodata = {
    name: 'risan akbar',
    alamat: 'jl. padang raya',
    isRegister: true,
    phoneNumber : '0812312323',
    email: 'akbar@gmail.com'
}

const resultBiodata = {
    ...myBiodata,
    ...newBiodata
}
// const resultBiodata  ={
//     name: 'risano',
//     age: 17,
//     isMeried: true,
//     email: 'risano@gmail.com',
//     name: 'risan akbar',
//     alamat: 'jl. padang raya',
//     isRegister: true,
//     phoneNumber : '0812312323',
//     email: 'akbar@gmail.com'
// }
console.log(resultBiodata);
