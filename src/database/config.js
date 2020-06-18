const sql = require('mssql');

let dbConfig = {
	server: 'SERVER',
	user: 'USUARIO',
	password: 'SENHA',
	database: 'NOME DO BANCO DE DADOS',
	"options": {
		"encrypt": true,
		"enableArithAbort": true
	}
}

let conn = new sql.ConnectionPool(dbConfig);

conn.connect((err) => {
	if (err) throw err;
	console.log('Database Connected!')
})

module.exports = conn;