var router = require('express').Router(),
    ensureAuthorized = require('./ensureAuthorized'),
    data = JSON.stringify(require('../data/frases.json'));

router.get('/getAll', ensureAuthorized, function (req, res) {
    "use strict";
    res.send(data);
});

router.get('/getHeroByName/:hero', ensureAuthorized, function (req, res) {
    "use strict";
    res.send(data);
});

router.get('/getHeroById/:id', ensureAuthorized, function (req, res) {
    "use strict";
    res.send(data);
});

router.get('/getRandomHero', ensureAuthorized, function (req, res) {
    "use strict";
    res.send(data);
});

router.post('/newHero', ensureAuthorized, function (req, res) {
    "use strict";
    res.send(data);
});

router.post('/removeHeroById/:id', ensureAuthorized, function (req, res) {
    "use strict";
    res.send(data);
});

router.post('/removeHeroByName/:hero', ensureAuthorized, function (req, res) {
    "use strict";
    res.send(data);
});

module.exports = router;