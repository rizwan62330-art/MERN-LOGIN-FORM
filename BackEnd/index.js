
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./Routers/AuthRouter')

require('dotenv').config();
require('./Models/db')

console.log("PORT from .env:", process.env.PORT);

const PORT = process.env.PORT || 8080;

console.log("PORT being used:", PORT);

app.get('/ping', (req, res) => {
    res.send('hello');
});

app.use(bodyParser.json());
app.use(cors());
app.use('/auth', AuthRouter)
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});