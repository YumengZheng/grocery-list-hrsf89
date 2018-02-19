const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var Promise = require('bluebird')
var Schema = mongoose.Schema;


var itemSchema = new Schema({
    id: {type: Number, unique:true},
    quantity: Number,
    description: String,
  });


var Grocery = mongoose.model('grocery', itemSchema)

var Grocerysave = function(data, callback){
  Grocery.create(data, function(err, doc, res){
    if(err) {
      console.log('can not save data',err)    
    }
    console.log('doc',doc)
    callback()
})
}

var giveBackData = function(callback){
  Grocery.find().sort({quantity: -1}).limit(10).exec(function(err, doc){
    if(err){
      console.log('can not get data from database')
      return
    }
    // console.log(doc)
    callback(doc)
  })
}


// Grocery.remove(function(){
//   console.log('removed')
// })

exports.Grocerysave = Grocerysave
exports.giveBackData = giveBackData