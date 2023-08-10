// const hobies = ['ngoding', 'joging', 'gaming']

const biodata = {
    name: 'risano',
    email: 'risano@mgail.com'
}

// const name = 'risano'
// console.log(name);

// sort -> untuk mensorting sebuah nilai/data pada sebuah array

const myNilai = [4, 5, 2,9,7, 38]

// a-z
const sortNilai = myNilai.sort((a, b)=>a-b)
// console.log(sortNilai)

// z-a 
const sortNilai2 = myNilai.sort((a,b)=>b-a)

// console.log(sortNilai2);

// map -> mapping

const hobies = ['ngoding', 'joging', 'gaming']

// for(let i = 0; i< hobies.length; i++){
//     console.log(`hobi saya ke ${i} adalah ${hobies[i]}`)
// }

// hobies.map((item, index)=>{
//     console.log(`hobi saya ke ${index} adalah ${item}`)
// })

const resultHobies = hobies.map((item, index)=>{
    const hoby =`${index + 1}. ${item}`
    return hoby
})

// console.log(resultHobies)

// hobies.forEach((item, index)=>{
//     console.log(`hobi saya ke ${index} adalah ${item}`)
// })

// split -> untuk memecah string menjadi sebuah array

const text = "saya ingin menjadi programmer handal"

// const resultText = text.split(" ")

// const reverseText = resultText.reverse()

// // console.log(reverseText)

// const joinText = reverseText.join(' ')
const resultText =text.split(' ').reverse().join(' ')

console.log(resultText)


