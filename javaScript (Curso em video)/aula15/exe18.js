var num = [5, 6, 8, 96, 4, 2, 7, 3]//Atribuindo valores a uma variavel composta(Array ou vetor).

num[5] = 1//Forma de atribuir um novo elemento ao vetor indicando a posição desejada
num.push(9)//Forma de atribuir um novo elemento ao vetor sem se preocupar com a posição em que ele sera colocado.
num.sort()//Organiza os elementos do vetor de forma crescente.
num.indexOf()//Esse comando procura dentro do vetor o valor que foi indicado dentro dos parenteses e retorna o número do indicie em que esse valor se encontra. Lembrando que, caso o valor digitado seja algum que não se encontra dentro do vetor, o valor -1 sera retornado com uma indicação de que o valor não se encontra no vetor.

console.log(`--> O vetor tem ${num.length} posições`)//Mostrando quantas possições o vetor tem com o comando "num.length". Lembrando que a conta começa do número 0, e não do 1.

console.log(`--> O primeiro valor do vetor é ${num[0]}`)//Mostrando qual o primeiro valor do Array.

var pos = num.indexOf(22)
if(pos == -1){
    console.log('--> O valor não foi encontrado')
} else{
    console.log(`--> O valor está na posição ${pos}`)
}







