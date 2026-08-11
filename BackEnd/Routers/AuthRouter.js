const { signup } = require('../Controllers/Authcontroller')
const { signupValidation } = require('../Middlewares/AuthValidation');

const router = require('express').Router;

router.post('/login', (req, res) => {
    res.send('Login success');
});

router.post('/signup', signupValidation, signup);

module.exports = router;