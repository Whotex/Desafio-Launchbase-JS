const nome = 'Bruno'
const peso = 85
const altura = 1.75

const imc = peso/(altura*altura)

console.log(`O valor do IMC de ${nome}, é: ${imc}`)
if(imc >= 30)
    console.log (`${nome}, você está acima do peso`)
else
    console.log (`${nome}, você não está acima do peso.`)