var express = require('express');
var router = express.Router();
var StudentController = require(__dirname+'/../app/controllers/StudentController.js');



/* GET home page. */
router.get('/',StudentController.index);
router.get('/create',StudentController.create);
router.post('/create',StudentController.store);
router.get('/delete/:id',StudentController.delete);
router.get('/show/:id',StudentController.show);



module.exports = router;
