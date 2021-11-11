var Fruit = require('../models/fruit'); 
   
// for a specific fruit. 
exports.fruit_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: fruit detail: ' + req.params.id); 
}; 
 
// Handle fruit create on POST. 
exports.fruit_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Fruit(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
    document.fruit_type = req.body.fruit_type; 
    document.quantity = req.body.quantity; 
    document.cost = req.body.cost; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
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

// VIEWS 
// Handle a show all view 
exports.fruit_view_all_Page = async function(req, res) { 
    try{ 
        theFruit = await Fruit.find(); 
        res.render('fruit', { title: 'Fruit Search Results', results: theFruit }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 