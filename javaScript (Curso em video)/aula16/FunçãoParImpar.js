function parimpar(n){//Para iniciar uma função, devemos colocar primeiro a palavra reservada "funtion", logo após colocamos um nome para essa função, que nesse caso é "parimpar", mas poderia ser qualquer nome desejado par dar nome a função. Logo após abrimos e fechamos parenteses, dentro deles colocaremos o os parametros, podemos colocar quantos quisermos ou nenhum. Os nomes que vamos dar para os parametros, ira nos situar na hora de fazermos o chamamento.
    if(n%2 == 0){//A velha e boa estrutura de condição. Aqui verificamos se um número é par ou impar.
        return 'Par!'//O "return" serve para caso você queira mostrar o valor obtido para o usuario.
    } else {
        return 'Impar!'
    }
}

var res = parimpar(4)//E aqui esta a chamada que faremos para que o codigo seja executado. Esse 4 dentro dos () é o parametro do "n" la em cima. Ao mesmo tempo que estamos fazendo a chamada, estamos incluindo o valor do parametro.
console.log(res)

/*
console.log(parimpar(45)) --> Essa é uma outra foma de escrever na tela sem precisar atribuir o resultado a uma variavel.
*/