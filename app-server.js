const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;


app.use(express.static(path.join(__dirname, '/src/imgs')));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'src/index.html'));
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});