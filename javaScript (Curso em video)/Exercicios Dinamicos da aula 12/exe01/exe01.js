function carregar() { //Ligação direta com o documento HTML para iniciar a interação quando a pagina carregar.
    var msg = window.document.getElementById('msg')//Ligação direta com o a div com o id=msg do documento HTML
    var img = window.document.getElementById('foto')//Ligação direta com o a div com o id=foto do documento HTML
    var data = new Date()//Esse "New Date" serve para buscar na propria maquina que esta rodando o codigo, a hora, minutos, segundos, dia, mes, ano e diversas outras coisas.
    var hora = data.getHours()//Aqui estamos querendo saber a hora que a maquina está registrando no momento em que o codigo está sendo usado. Por isso o "getHours"
    msg.innerHTML = `Agora são ${hora} horas.`//Mensagem que ira aparecer na primeira div

    if(hora >= 0 && hora < 12) {
        //Bom dia
        img.src = 'imagens/manha.png'//todo o caminho da imagem deve ser colocado e o nome do arquivo de imagem para funcionar corretamente
        document.body.style.background = '#f6e056'//mudando a cor do fundo do site junto com a imagem quando a condição for satisfeita.
    } else if(hora >= 12 && hora < 18) {
        //Boa tarde
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#4982b9'
    } else {
        //Boa noite
        img.src = 'imagens/noite.png'
        document.body.style.background = '#070e90'
    }
}
