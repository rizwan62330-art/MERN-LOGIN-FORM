const jwt = require('jsonwebtoken')

const ensureAuthenticated = (req, res, next) => {
    const auth = req.header['authorization'];
    if (!auth) {
        return res.status(403)
            .json({ message: 'Unauthorized, JWT token is require' })
    }
    try {
        const decoded = jwt.verify(auth, process.env.JWT_SECRET);
        req.user = decoded
        next()
    } catch (error) {
        return res.status(403)
            .json({ message: 'Unauthorized, Please Login Again' });

    }
}
module.exports = ensureAuthenticated