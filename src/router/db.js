var mysql = require('mysql')
var pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '123',
  database: 'userList'
})

function query (sql, callback) {
  pool.getConnection (function (err, connection) {
    // Use the connection
    connection.query(sql, function (err, rows) {
      callback(err, rows)
      connection.release()
    })
  })
}
exports.query = query
