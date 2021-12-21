const express = require('express');
const app = express();
const dotenv = require('dotenv');

const port = process.env.PORT || 3000;


app.get('/', (request, response) => {
    response.send('Server is up!');
})

app.listen(port, () => {
    console.log(`server is up and running on ${port}`);
})