var jwt = require('jwt-simple'),
    moment = require('moment'),
    expiration = require('../config/tokenConfig');

/**
 * Crea un nuevo token
 * @param user
 * @return token si sale bien, null si falla
 */
module.exports = function createToken(user) {
    "use strict";
    var payload = {
        sub: user,
        iat: moment().unix(),
        exp: moment().add(expiration.amount_time, expiration.type_time).unix()
    };
    var token = jwt.encode(payload, "clavesupersecreta");
    return token;
};