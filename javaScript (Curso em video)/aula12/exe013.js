var agora = new Date()//Esse "New Date" serve para buscar na propria maquina que esta rodando o codigo, a hora, minutos, segundos, dia, mes, ano e dierss outrsa coisas.
var hora = agora.getHours()//Aqui estamos querendo saber a hora que a maquina está registrando no momento em que o codigo está sendo usado. Por isso o "getHours"
console.log(`Agora são exatamente ${hora} horas.`)
if(hora < 12){
    console.log('Bom dia!')
}   else if (hora <= 18){
    console.log('Boa tarde!')
}   else {
    console.log('Boa noite!')
}

