const mysql = require("mysql");

const connection = mysql.createPool({
	host: process.env.DB_HOST,
	port: 3306,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB,
});

connection.getConnection((err, pool) => {
	if (err) {
		console.error(`error connecting: ${err.stack}`);
		return;
	}
	console.log(`connected as id ${connection.threadId}`);
});

module.exports = connection;
