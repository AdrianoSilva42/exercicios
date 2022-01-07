var idade = 67
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log('Não vota')
} else if (idade < 18 || idade > 65) {//Poderia tanto criar um novo if, como posso fazer como esta ali, um "else if". Importante lembrar é que, o novo if deve está sempre contido no else.
    console.log('Voto opcional')
} else 
    console.log('Voto obrigatorio')