const biodata = {
    name: 'risano',
    emial: 'risano@gmail.com',
    age: 17,
    sayHi:function(name){
        console.log(`hi... bro ${name} !, perkanal saya ${this.name}`)
    },
    penjumalanUmur: (val1)=>{
        const result = val1 + biodata.age
        return result
    }
}

biodata.sayHi('budi')
const hasilPenjulahan = biodata.penjumalanUmur(10)

console.log(hasilPenjulahan)