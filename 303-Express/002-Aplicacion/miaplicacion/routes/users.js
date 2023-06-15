var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('Este es un recurso con el que te respondo');
    res.render('users', { title: 'Usuarios' });
});

module.exports = router;
