var express = require('express')
var router = express.Router()
// 引入数据库包
var db = require('/router/db.js')
router.get('/', function (req, res, next) {
  db.query('select * from person', function (err, rows) {
    console.log(rows)
    if (err) {
      res.render('persons', {title: '人员管理', datas: []})
    } else {
      res.render('persons', {title: '人员管理', datas: rows})
    }
  })
})
