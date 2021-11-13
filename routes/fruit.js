var express = require('express');
const controlers = require('../controllers/fruit');
var router = express.Router();

/* GET costumes */
router.get('/', controlers.fruit_view_all_Page);

router.get('/detail', controlers.fruit_view_one_Page);

/* GET create costume page */
router.get('/create', controlers.fruit_create_Page);


router.get('/update', controlers.fruit_update_Page); 

router.get('/delete', controlers.fruit_delete_Page); 

module.exports = router;