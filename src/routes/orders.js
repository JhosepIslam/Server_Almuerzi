const express = require('express');
const Orders = require('../models/Orders');

const router = express.Router()
router.get('/orders', (req, res)=>{
    Orders.find()
    .exec()
    .then( x => res.status(200).send(x))    
})

router.get('/orders/:id', (req, res)=>{    
    Orders.findById(req.params.id)
    .exec()
    .then( x => res.status(200).send(x))    
})

router.post('/orders/', (req, res)=>{
    Orders.create(req.body)
        .then(x => res.status(201).send(x))
})

router.put('/orders/:id', (req, res)=>{
    Orders.findOneAndUpdate(req.body)
    .then(()=> res.sendStatus(204))
})

router.delete('/orders/:id', (req, res)=>{
    Orders.findByIdAndDelete(req.params.id).exec().then(()=>res.sendStatus(204))
})


module.exports = router