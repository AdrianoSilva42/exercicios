function clicar(){
    
    var num = window.document.getElementById('txt1')//Atribuindo os dados do input para um variavel chamada "num".
    var tab = window.document.getElementById('seltab')//Atribuindo o select do HTML a uma variavel chamada "tab".

    var n = Number(num.value)//Convertando o tipo do dado digitado no inpit para NUmber e atribuindo a uma variavel chamada "n".

    if(num.value.length == 0){//Teste logico: Caso o conteudo da variavel "num"(usamos a variavel "num" pois ela não esta convertida e esta como string ainda.)seja igual a 0.
        window.alert('Digite um número valido')//Esse alerta de erro aparecera na tela.
    } else{//SE não. Ou seja, caso a condição anterior não seja comprida;
        var c = 1 //Criamos uma variavel "c" e atribuimos o valor 1 a ela.
        tab.innerHTML = ''//Isso vai servir para que toda vez que geremos uma nova tabuada, a anterior seja apagada do campo de select, que nesse caso esta atribuido a variavel "tab". 
        while(c <= 10){//Condição: Caso a variavel "c" seja menor ou igual a 10. Faça: 
            var item = window.document.createElement('option')//Aqui nós criamos itens(opções)dentro daquele select em HTML. Essa é uma forma de criar no jS. Caso fossemos criar no HTML, teriamos que escrever a tag <option> a quantidade de vezes que esta dentro da condição "while". 
            item.text = `${n} x ${c} = ${n*c}`//Base para oque vai ser criado dentro do select.
            item.value = `tab${c}`//Aqui cada item dentro do select vai receber um "value" de acordo com o numero da variavel "c".
            tab.appendChild(item)//Aqui o elemento de tab vai receber os elementos filhos dp item.text.
            c++//Aqui vai ser incrementado um novo elemento sempre que o laço se repetir.

        }
    }

    

}