var Fruit = require('../models/fruit'); 
   
// for a specific fruit. 
exports.fruit_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: fruit detail: ' + req.params.id); 
}; 
 
// Handle fruit create on POST. 
exports.fruit_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: fruit create POST'); 
}; 
 
// Handle fruit delete form on DELETE. 
exports.fruit_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: fruit delete DELETE ' + req.params.id); 
}; 
 
// Handle fruit update form on PUT. 
exports.fruit_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: fruit update PUT' + req.params.id); 
}; 


// List of all fruits 
exports.fruit_list = async function(req, res) { 
    try{ 
        thefruits = await Fruit.find(); 
        res.send(thefruits); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 