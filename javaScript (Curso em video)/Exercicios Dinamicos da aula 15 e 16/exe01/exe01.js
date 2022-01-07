    var num = window.document.getElementById('txt1')
    var lista = window.document.getElementById('caixa')
    var res =  window.document.getElementById('res')
    var valores = []
    
    
    function isNumero(n){
        if(Number(n) >= 1 && Number(n) <= 100) {
            return true
      } else {
          return false
      }

    }

    function inLista(n, l){
        if(l.indexOf(Number(n)) != -1){
            return true
       }else{
           return false
       }
    }

function add(){
   
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))//O ".push()" adiiona valores ao vetor(Array)
        var item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)   
        res.innerHTML = ''    
   }else{
       window.alert('Valor invalido ou já encontrado na lista.')
   }
   num.value = ''
   num.focus()
}

function finalizar(){
    if(valores == 0){
        window.alert('Adicione valores antesde finalizar')
    }else {

        var tot = valores.length
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        var media = 0

        for(var pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]
        }

        media = soma / tot
        
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O <strong>maior</strong> valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O <strong>menor</strong> valor informado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média de todos os valores é ${media}.</p>`

    }
}