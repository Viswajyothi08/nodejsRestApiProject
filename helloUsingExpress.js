const express = require('express');
const app = express()

app.get('/',(req,res) => {
    res.send('Helooo world')
})

app.listen(3000);