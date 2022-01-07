var agora = new Date()//Esse "New Date" serve para buscar na propria maquina que esta rodando o codigo, a hora, minutos, segundos, dia, mes, ano e diversas outras coisas.
var diaSem = agora.getDay()//Aqui estamos querendo que a maquina saiba o dia da semana no momento em que o codigo está sendo executado.
 switch(diaSem){//Switch é usado para as condições multiplas. Assim como "if" e "else" são usados para multiplas e aninhadas.
     case 0://O case é a opção que vai satisfazer a condição.
         console.log('Domingo')
         break//O break deve ser sempre posto da mesma maneira que esta aqui, caso não seja colocado, ele vai continuar executando todos os cases mesmo que a condição já tenha sido satisfeita.  
    case 1:
         console.log('Segunda-feira')
         break
    case 2:
         console.log('Terça-feira')
         break     
    case 3:
        console.log('Quarta-feira')
        break    
    case 4:
        console.log('Quinta-feira')
        break
    case 5:
        console.log('Sexta-feira')
        break
    case 6:
        console.log('Sábado')
        break
    default://Essa opção é sempre a ultima, caso todas as outras não tenham satisfeita a condição.
        console.log('[ERRO] Dia inválido')
        break//Nessa ultima opção não é necesssario por o break, mas é sempre por para desencargo de consciencia. Mas ai é opcional colocar ou não.
 }