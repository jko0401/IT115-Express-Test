const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.sendFile('./landing-page/home.html', { root: __dirname });
});

app.listen(port, () => console.log(`listening on port ${port}!`));
