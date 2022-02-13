const conectar = async () => {
    if (global.conexao && global.conexao.state !== 'disconected')
        return global.conexao
    const mysql = require('mysql2/promise')
    const con = mysql.createConnection("mysql://root:2195992705@localhost:3306/db1")
    console.log('Conectou ao banco')
    global.conexao = con
    return con
}

const todosClientes = async () => {
    const con = await conectar()
    const [linhas] = await con.query('SELECT * FROM cliente')
    return await linhas
}

const inserirCliente = async (cliente) => {
    const con = await conectar()
    const sql = 'INSERT INTO cliente (nome, cpf) VALUES (?, ?)'
    const valores = [cliente.nome, cliente.cpf]
}

const atualizarCliente = async (id, cliente) => {
    const con = await conectar()
    const sql = 'UPDATE cliente SET nome=?, cpf=? WHERE id=?'
    const valores = [cliente.nome, cliente.cpf, id]
    await con.query(sql, valores)
}

const deletarCliente = async (id) => {
    const con = await conectar()
    const sql = 'DELETE FROM cliente WHERE id=?'
    const valores = [id]
}

module.exports = {todosClientes, inserirCliente, atualizarCliente, deletarCliente}