var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var GroceryRouter = require('./groceryRouter')

// app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(__dirname + '/../client/dist'));

app.use('/', GroceryRouter)


// app.post('/grocery', function(req,res){
//   console.log(req.body)
//   res.sendStatus(200)
// })

app.listen(3000, function() {
  console.log('Server started and listening on port 3000');
});

