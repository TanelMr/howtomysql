var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "qwerty",
    database: "mydb"
});

con.connect(function(err) {
    if (err) throw err;
    var adr = 'Salme 4'
    var sql = "SELECT * FROM customers WHERE address = " + mysql.escape(adr)
    con.query(sql, function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
});