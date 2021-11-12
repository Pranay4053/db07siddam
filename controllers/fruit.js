var Fruit = require('../models/fruit'); 
   
// for a specific fruit.
exports.fruit_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await Fruit.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
   }; 
 
// Handle fruit create on POST. 
exports.fruit_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Fruit(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"fruit_type":"goat", "cost":12, "size":"large"} 
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
exports.fruit_update_put = async function(req, res) {
 console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
 try {
 let toUpdate = await Fruit.findById( req.params.id)
 // Do updates of properties
 if(req.body.fruit_type)
 toUpdate.fruit_type = req.body.fruit_type;
 if(req.body.quantity) toUpdate.cost = req.body.quantity;
 if(req.body.cost) toUpdate.size = req.body.cost;
 let result = await toUpdate.save();
 console.log("Sucess " + result)
 res.send(result)
 } catch (err) {
 res.status(500)
 res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
 }
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