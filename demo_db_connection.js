var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "qwerty",
    database: "mydb"
});

con.connect(function(err) {
    if (err) throw err;
    var sql = "update customers set address = 'Vaba 30' where name = 'Tanel'";
    con.query(sql, function (err, result, fields) {
        if (err) throw err;
        console.log('Records updated:' + result.affectedRows);
    });
});