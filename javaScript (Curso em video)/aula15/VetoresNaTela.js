var num = [5, 8, 6, 7, 3, 9]

console.log(num)// Essa é a forma mais generica de mostar os valores que um vetor guarda. Alem de mostra com os colchetes, não existe muitas formas de incrementar.

for(var pos = 0; pos < num.length; pos++){
    console.log(`À posição ${pos} tem o valor ${num[pos]}`)
} //Essa já uma maneiras masi inteligente de mostrar os valores dentro do Array utilizando a estrutura de repetição.

for(var pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}// Essa já é a maneira mais resumida e simples da estrutura de repetição para mostrar os valores dos veteros. Lembrando que essa sitaxe da estrutura de repetição só funciona para Array.

