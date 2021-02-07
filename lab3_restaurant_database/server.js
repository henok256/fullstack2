const express = require('express');
const mongoose = require('mongoose');
const restaurantsRouter = require('./routes/Restaurantsroutes.js');

const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://henok91:Jando1980@cluster0.ysmvz.mongodb.net/GBC-Full-Stack?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology:true
});
app.use(restaurantsRouter);

app.listen(3000, ()=>{console.log('server is running on port 3000')});

