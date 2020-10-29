import { createConnection } from 'mysql';

var connection = createConnection({
    user: "root",
    password: "password",
    database: "openemr",
    host: "127.0.0.1",
    dialect: 'mysql',
    operatorsAliases: false,
});
connection.connect(function(error){
	if(!!error) {
		console.log(error);
	} else {
		console.log('Connected..!');
	}
});

export default connection;