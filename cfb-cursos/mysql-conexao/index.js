(async () => {
    const db = require('./db')

    // Inserindo um cliente
    console.log('Novo cliente inserido')
    const nomeIns = 'Richard Gere'
    const cpfIns = 11111111111
    await db.inserirCliente({nome: nomeIns, cpf: cpfIns})

    // Atualizando um cliente
    const idUp = 5
    const nomeUp = 'George Clooney'
    const cpfUp = 22222222222
    await db.atualizarCliente(idUp, {nome: nomeUp, cpf: cpfUp})
    console.log('Cliente' + idUp + 'atualizado')

    // Selecionando todos os clientes
    console.log('Obter todos os clientes')
    const clientes = await db.todosClientes()
    console.log(clientes)

    // Deletando um cliente
    const idDel = 3
    await db.deletarCliente(idDel)
    console.log('Cliente' + idDel + 'deletado')
})()