function verificar() {
    var data = new Date()//Cria um vinculo do codigo com o sistema de calendario e hora da maquina em que ele estiver rodando. E jogar dentro da variavel "data".
    var ano = data.getFullYear()//O "getFullYear" vai pegar todos os 4 números do ano e jogar dentro da variavel "ano".
    var fano = window.document.getElementById('txtano')//Vai jogar o valor do input no documento HTML com o id "txtano" dentro da variavel "fano".
    var res = window.document.querySelector('div#res')//Vai vincular a div do ducumento HTML com a variavel "res".
    
    if (fano.value.length == 0 || Number(fano.value) > ano) {//Aqui vamos criar um alerta caso o usuario digite algum ano que não satisfaça a condição acima.
        window.alert('[ERRO!!] Verifique os dados e tente novamente!')
    } else {
        var fsex = window.document.getElementsByName('radsex')//Jogando a opção escolhida no input "sexo", ma variavel "fsex".
        var idade = ano - Number(fano.value)//Calculando a idade do usuario, pegando o ano atual menos o ano de nascimento escolhido pelo usuario e atribuindo o valor á variavel "idade". O parametro "Number", converte o tipo para "number". O ".value" indica os dados inseridos no input.
        var genero = ''//Variavel recebendo uma string, que ilustramos com as ''.
        var img = window.document.createElement('img')//Essa é  uma forma de inserir uma imagem em JS. Atribuimos a variavel "img"
        img.setAttribute('id', 'foto')//Aqui atribuimos um ID com o nome "foto".
        if (fsex[0].checked) {//Condição para caso o sexo "Masculino" seja escolhido. Como é um elemento que pode ter mais de uma opção, precisamos colocar a opção escolhida, que é por as [] e o número da opção que começa do 0.
            genero = 'Homem'//Variavel recebendo a string 'Homem'.
            if (idade >= 0 && idade <= 12){//Condição: caso a idade seja maior ou igual a 0 e menor ou igual a 12.
                //Criança
                img.setAttribute('src', 'imagens/crianca-homem.png')//Mostrar imagem de uma criança homem.
            } else if (idade >= 13 && idade < 18) {//Condição: caso a idade seja maior ou igual a 13 e menor a 18.
                //Adolescente
                img.setAttribute('src', 'imagens/jovem-homem.png')//Mostar imagem de um  adolescente homem.
            } else if (idade >= 18 && idade  < 50) {//Condição: caso a idade seja maior ou igual a 18 e menor que 50.
                //Adulto
                img.setAttribute('src', 'imagens/adulto-homem.png')//Mostrar imagem de um homem adulto.
            } else {//Ultima condição caso nenhuma das anteriores sejam satisfeitas.
                //Idoso
                img.setAttribute('src', 'imagens/idoso-homem.png')//Mostrar imagem de um homem idoso.
            }
        } else if(fsex[1].checked) {//Condição para caso o sexo "Feminino" seja escolhido. Como é um elemento que pode ter mais de uma opção, precisamos colocar a opção escolhida, que é por as [] e o número da opção que começa do 0, que nesse caso é o 1.
            genero = 'Mulher'//Variavel recebendo a string 'Homem'.
            if (idade >= 0 && idade <= 12){//Condição: caso a idade seja maior ou igual a 0 e menor ou igual a 12.
                //Criança
                img.setAttribute('src', 'imagens/crianca-mulher.png')//Mostrar imagem de uma criança mulher.
            } else if (idade >= 13 && idade < 18) {//Condição: caso a idade seja maior ou igual a 13 e menor a 18.
                //Adolescente
                img.setAttribute('src', 'imagens/jovem-mulher.png')//Mostrar imagem de uma mulher adolescente.
            } else if (idade >= 18 && idade < 50) {//Condição: caso a idade seja maior ou igual a 18 e menor que 50.
                //Adulto
                img.setAttribute('src', 'imagens/adulto-mulher.png')//Mostrar imagem de uma mulher adulta.
            } else {//Ultima condição caso nenhuma das anteriores sejam satisfeitas.
                //Idoso
                img.setAttribute('src', 'imagens/idoso-mulher.png')//Mostrar imagem de uma mulher idosa.
            }
        }
        res.style.textAlign = 'center'//Centralizar o resultado da tag "res".
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`//Mostrar o resultado dos dados obtidos pelo usuario.
        res.appendChild(img)//Mostrar o conteudo da tag "img" junto com o resultado da tag "res".
    }
}