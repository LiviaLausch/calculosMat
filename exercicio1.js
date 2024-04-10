alert("Vamos fazer calcúlos!")

let numberOne = prompt("Digite o primeiro número: ")
let numberTwo = prompt("Agora digite o segundo número: ")

const sum = (Number(numberOne) + Number(numberTwo)).toFixed(0)
const sub = (Number(numberOne) - Number(numberTwo)).toFixed(0)
const mult = (Number(numberOne) * Number(numberTwo)).toFixed(0)
const div = (Number(numberOne) / Number(numberTwo)).toFixed(0)
const restDiv = (Number(numberOne) % Number(numberTwo)).toFixed(0)

function evenOrOdd(){
    if(sum % 2 === 0) {
        return "PAR"
    } else {
        return "IMPAR"
    }
}

function equalNumber(){
    if(numberOne == numberTwo){
        return "iguais"
    } else {
        return "diferentes"
    }
}

alert(`A soma destes números é: ${sum}`)
alert(`A subtração destes números é: ${sub}`)
alert(`A multiplicação destes números é: ${mult}`)
alert(`A divisão destes números é: ${div}`)
alert(`O resto da divisão destes números é: ${restDiv}`)

alert(`O resultado da soma é ${evenOrOdd()}.`)
alert(`Os números inseridos são ${equalNumber()}.`)