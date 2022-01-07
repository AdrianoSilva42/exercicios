function clicar(){

    //Atribuindo dados do docuimento HTML para variaveis em JS.
    var inicio = window.document.getElementById('txtnome01')
    var fim = window.document.getElementById('txtnome02')
    var passo = window.document.getElementById('txtnome03')
    var res = window.document.getElementById('res')

    var c = Number(inicio.value)//Fazendo a conversão da variavel "inicio" para o tipo number e jogando numa variavel "c"
    
   if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){//Aqui um teste logico vai ser feito. Caso não seja digitado nenhum valor nos inputs inicio, ou fim ou passo, um alerta de erro aparecera na janela. Como já vimos anteriormente que, o .value vai indicar o tipo de valor digitado. Já o .length, vai indicar o comprimento da string. Já que tudo oque digitado em HTML(seja número ou não), é tratado como string.
        window.alert('[ERRO!!] Faltam Dados.')//Essa vai ser a mensagem de erro mostrada como um alerta.
        res.innerHTML = 'Impossivel dar seguimento a contagem. Verifique os dados digitados. '//Aqui vai ser mostrado um aviso onde seria o resultado da contagem.

   } else{
       res.innerHTML = 'Contando... </br>'//Essa vai ser uma mensagem que aparecera caso a condição acima não seja comprida. O </br> serve para que aja uma quebra de linha e esse 'Contando...' se encontre sozinho em uma linha.

       //Aqui estamos convertendo o tipo de dado para numbe e jogando dentro de variaveis.
       var i = Number(inicio.value)
       var f = Number(fim.value)
       var p = Number(passo.value)
       if(p <= 0){//Condição: Se passo for menor ou igual a 0.
           window.alert('Passo invalido! Considere digitar PASSO acima de 0')//Um alerta de erro sera mostrado avisando que o valor digitado em "passo" não é valido.
        p = 1 //Aqui forçamos a variavel "p"(que é a quantidado de passo) a iniciar com 1 e dar continuidade ao codigo. 
       }

       //Contagem progressiva
       if(i < f){//condição: Se a variavel "i" for menor que a variavel "f".
            for(var c = i; c <= f; c += p){//Aqui atribuimos a variavel "c" o valor da variavel "i; um teste logico, se a variavel "c" for menor ou igual a variavel "f"; e um incremento, que seria a variavel "c" adicionando o valor dela mesmo mais o valor da variavel "p".
                res.innerHTML += `${c} \u{1f449}` //Aqui vai aparecer o valor da variavel "res" que já definimos na linha 16 e mais um placeholder junto com um emoji.   
       }
                res.innerHTML += `\u{1f3c1}`//Aqui colocamos um emoji de bandeira sinalizando que a contagem foi concluida
       } else{//condição caso a condição anterior não seja verdadeira.

            //Contagem regresiva
           for(var c = i; c >= f; c -= p){//Aqui atribuimos a variavel "c" o valor da variavel "i; um teste logico, se a variavel "c" for maior ou igual a variavel "f"; e um incremento, que seria a variavel "c" subtraindo o valor dela mesmo mais o valor da variavel "p".
                res.innerHTML += `${c} \u{1f449}` //Aqui vai aparecer o valor da variavel "res" que já definimos na linha 16 e mais um placeholder junto com um emoji. 
           }
                res.innerHTML += ` \u{1f3c1}`//Aqui colocamos um emoji de bandeira sinalizando que a contagem foi concluida
       }
   }

}