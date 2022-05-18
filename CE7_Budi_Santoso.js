// Soal:
// Seorang front-end dev  diminta untuk membuat logic yang dapat merapikan sebuah random String 
// Setiap kata memiliki huruf Capital pada awal hurufnya.
// Contoh  "SeLamAT PAGi semua halOo" menjadi "Selamat Pagi Semua Haloo"
// "HaRI iNi adALAh HarI LibUR " menjadi "Hari Ini Adalah Hari Libur"
// Bantulah front-end tersebut
// Tidak boleh langsung print expected output

// Jawaban: 
// write your code here
function manipulateString(string) {
    let array = [];
    let arrayString = string.split('');
    let upperString = string.toUpperCase().split('');
    let lowerString = string.toLowerCase().split('');
    for (i = 0; i < string.length; i++){
        if (i == 0){
            array.push(upperString[i])
        }
        if (i != 0 && arrayString[i] === " "){
            array.push(arrayString[i])
        }
        if (i != 0 && arrayString[i] !== " " && arrayString[i - 1] === " "){
            array.push(upperString[i])
        }
        if (i != 0 && arrayString[i] !== " " && arrayString[i - 1] !== " "){
            array.push(lowerString[i])
        }
    }
    return array.join('')
}

let string1 = "SeLamAT PAGi semua halOo"
let string2 = "HaRI iNi adALAh HarI LibUR "
let string3 = "hERe wE COMe a-cArOLIng aMOnG ThE LEaf sO gReEn, hERE wE CoME a wAND'riNG sO fAiR TO be seEN"
let string4 = "loVE aNd JoY coMe TO yOU, anD to YOu gLaD cHRisTmaS, tOo"

console.log(manipulateString(string1))
console.log(manipulateString(string2))
console.log(manipulateString(string3))
console.log(manipulateString(string4))