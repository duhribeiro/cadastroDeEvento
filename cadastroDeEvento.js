
let dataInsc = 2021.0916
let dataEvento = 2021.0916
let dataNasc = 2002.0916
let idadeMin18 = 18;
let idade = dataEvento - dataNasc;
let listaParticipantes = ['Juliana', 'Vanessa', 'Nathaly', 'Danielle', 'Mayara', 'Joelma', 'Oberdan', 'Messias', 'Matheus', 'Maicon', 'Francisco', 'Leandro'];
let listaPalestrantes = ['Odirlei', 'Thiago', 'Raoni']
let total = listaParticipantes.length + listaPalestrantes.length

console.log("\n |======= CADASTRO DE EVENTO =======| \n")
console.log("Esse cadastro é bem rapidinho, precisamos de pequenas informações.\n")
console.log("Por favor, digite a data que deseja participar do Evento (AAAA.MMDD): ", dataInsc)

if (dataInsc <= dataEvento){
    console.log('\n Inscrição permitida. Vamos prosseguir.')
    console.log('\n Por favor, digite a sua data de nascimento (AAAA.MMDD): ', dataNasc)

    if (dataNasc <= dataEvento){
        console.log('\n Sua idade é: ', idade.toFixed(0), ' anos.')
    }
        if (idade >= idadeMin18){
            console.log("\n Seja bem-vindo. Estamos verificando a capacidade de pessoas permitida neste evento.")

            console.log('\n ===== LISTA DE PARTICIPANTES ==== \n\n', listaParticipantes, '\n ==== LISTA DE PALESTRANTES ==== \n\n', listaPalestrantes)
            console.log('\n LIMITE MÁXIMO PERMITIDO: 100 PESSOAS.\n')
            console.log(' TOTAL DE INSCRITOS ATÉ O MOMENTO: ', total, '\n')

            if (listaParticipantes.length + listaPalestrantes.length < 100 ) {
                console.log(" Oba! Você poderá fazer a inscrição. Estamos finalizando seu cadastro! \n")
            } 
                else {
                console.log(" Infelizmente, o evento está esgotado. Agradecemos pelo interesse e aguardamos a sua inscrição no próximo evento!\n")
            }

        } else{
            console.log("\n Ops! Este evento é exclusivo para maiores de 18 anos. Tente novamente em ",idadeMin18-idade," anos. \n")
        }
        
} else {
    console.log("\n Inscrição não permitida. Data inválida. Tente novamente! A data limite para sua inscrição é: \n", dataEvento)
}