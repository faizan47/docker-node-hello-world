const express = require('express');
const app = express();

app.get('*', (req, res) => res.send('Hello World!'));

app.listen(3002, () => console.log('Listening on 3002'));
