const express = require('express')
const pug = require('pug')

const app = express()

let rawList = [
  {id: 1, name: "zzz" },
  {id: 2, name: "xxx" },
  {id: 3, name: "abc" },
  {id: 4, name: "der" },
]

let maxid = 6

app.set('view engine', 'pug')
app.set('views', './views')

app.get('/token', function (req, res) {
  res.send("token");
})

app.get('/list', function(req, res) {
  res.render('list', {list: rawList})
})

app.get('/delete/:id', function(req, res) {
  let id = parseInt(req.params.id);
  rawList = rawList.filter(function(data) {
    return data.id !== id
  })
  res.redirect("/list")
})

app.get('/add/:name', function(req, res) {
  let name = parseInt(req.params.name);
  maxid = maxid+1;
  rawList.push({id: maxid, name: name
  }) 
  res.redirect("/list")
})

app.get('*', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!' })
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

    