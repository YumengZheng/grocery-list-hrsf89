var express = require('express')
var router = express.Router()
var Grocerysave = require('../database/Gdatabase').Grocerysave
var giveBackData = require('../database/Gdatabase').giveBackData
var sendBack = function(res){
    res.status(200)
    res.send()
}
router.post('/grocery',function(req, res){
    var obj = req.body
    obj['id'] = parseInt(obj['id']) 
    obj['quantity'] = parseInt(obj['quantity'])
    let sendBack = function(){
        res.status(200)
        res.send()
    }
    Grocerysave(obj, sendBack)
})

router.get('/grocery',function(req, res){
    let sendBack = function(data){
        res.status(202)
        res.send(data)
    }
    giveBackData(sendBack)
})

module.exports = router


