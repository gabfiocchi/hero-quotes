var router = require('express').Router(),
    createToken = require('./token');

/**
 * Http method: POST
 * URI: /login
 * Login de la api
 * Valida cualquier parámetro user que venga en el body.
 * Retorna un token en el Authorization del header que debe ser enviado
 * en cada llamada.
 */
router.post('/login', function (req, res) {
    "use strict";
    var token = createToken(req.body.user);
    res.setHeader('Authorization', token);
    res.set('Content-Type', 'application/json').send(JSON.stringify({
        message: "Login correcto"
    }));
});

module.exports = router;
