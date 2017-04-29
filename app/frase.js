var router = require('express').Router(),
    ensureAuthorized = require('./ensureAuthorized'),
    data = require('../data/frases.json'),
    simpleJSONFilter = require('../node_modules/simple-json-filter/index');

var sjf = new simpleJSONFilter();

/**
 * Retorna todas las frases de los héroes
 */
router.get('/getAll', ensureAuthorized, function (req, res) {
    "use strict";
    res.send(data);
});

/**
 * Retorna las frases en base a un héroe
 * param1: hero
 */
router.get('/getQuoteByHero/:hero', ensureAuthorized, function (req, res) {
    "use strict";
    var filter = { heroe: req.params.hero };
    res.send(sjf.exec(filter, data.frases));
});

/**
 * Retorna una frase al azar
 */
router.get('/getRandomQuote', ensureAuthorized, function (req, res) {
    "use strict";
    var filter = { id: Math.floor(Math.random() * (data.frases.length)) };
    res.send(sjf.exec(filter, data.frases));
});

/**
 * Crea una nueva frase
 * param1: frase
 * param2: heroe
 */
router.post('/newQuote', ensureAuthorized, function (req, res) {
    "use strict";
    var item = {};
    item.id = data.frases.length + 1;
    item.frase = req.body.frase;
    item.heroe = req.body.heroe;
    data.frases.push(item);
    res.send("OK");
});

/**
 * Elimina una frase por id
 * param1: id
 */
router.post('/removeQuoteById', ensureAuthorized, function (req, res) {
    "use strict";
    delete data.frases[req.body.id - 1];
    res.send("OK");
});

module.exports = router;