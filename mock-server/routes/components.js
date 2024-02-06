const express = require('express');
const fs = require('fs');
const dataFilePath = 'mock-server/data/components.json';
const router =  express.Router();
router.route('/')
.get(function(req,res){
    let rawData = fs.readFileSync(dataFilePath,'utf-8');
    let componentData = JSON.parse(rawData);
    res.send(componentData);
});
module.exports = router;