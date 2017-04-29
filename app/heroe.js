var router = require('express').Router(),
    ensureAuthorized = require('./ensureAuthorized'),
    data = require('../data/heroes.json'),
    simpleJSONFilter = require('../node_modules/simple-json-filter/index');

var sjf = new simpleJSONFilter();

/**
 * Retorna todos los héroes
 */
router.get('/getAll', ensureAuthorized, function (req, res) {
    "use strict";
    res.send(data);
});

/**
 * Retorna un héroe por su nombre
 * param1: hero
 */
router.get('/getHeroByName/:hero', ensureAuthorized, function (req, res) {
    "use strict";
    var filter = { heroe: req.params.hero };
    res.send(sjf.exec(filter, data.heroes));
});

/**
 * Retorna un héroe por su id
 * param1: id
 */
router.get('/getHeroById/:id', ensureAuthorized, function (req, res) {
    "use strict";
    var filter = { id: req.params.id };
    res.send(sjf.exec(filter, data.heroes));
});

/**
 * Retorna un héroe al azar
 */
router.get('/getRandomHero', ensureAuthorized, function (req, res) {
    "use strict";
    var filter = { id: Math.floor(Math.random() * (data.heroes.length)) };
    res.send(sjf.exec(filter, data.heroes));
});

/**
 * Crea un nuevo héroe
 * param1: heroe
 * param2: descripcion
 */
router.post('/newHero', ensureAuthorized, function (req, res) {
    "use strict";
    var item = {};
    item.id = data.heroes.length + 1;
    item.frase = req.body.heroe;
    item.heroe = req.body.descripcion;
    data.heroes.push(item);
    res.send("OK");
});

/**
 * Elimina un heroe por id
 * param1: id
 */
router.post('/removeHeroById', ensureAuthorized, function (req, res) {
    "use strict";
    delete data.heroes[req.body.id - 1];
    res.send("OK");
});

module.exports = router;