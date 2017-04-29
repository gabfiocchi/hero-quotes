/**
 * Se fija si viene el token en el header Authorization y que no esté expirado
 * Luego lo compara con la lista de tokens habilitados
 * @param req
 * @param res
 * @param next
 */
module.exports = function ensureAuthorized(req, res, next) {
    if (req.headers.authorization) {
        // Decodifica el token con la variable de entorno JWT_SECRET
        var payload = jwt.decode("req.headers.authorization".split(" ")[1], process.env.JWT_SECRET);
        // Check expiration date
        if(payload.exp > moment().unix()) {
            // No está expirado, continuemos.
            next();
        } else {
            // Token expirado
            res.send(401);
        }
    } else {
        // Si el token no vino en el header...
        next();
        res.send(403);
    }
};