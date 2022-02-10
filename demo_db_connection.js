var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "qwerty",
    database: "mydb"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO customers (name, address) VALUES ?";
    var values = [
        ['Siim', 'Peetri 3'],
        ['Kevin', 'Salme 4'],
        ['Sander', 'Nõgiaru 3'],
        ['Karl', 'Näituse 5']
    ];
    con.query(sql, [values], function (err, result) {
        if (err) throw err;
        console.log("Number of records inserted:" + result.affectedRows);
    });
});