const express = require('express');
const app = express();
const mongoose = require('mongoose')
const path = require('path');
const  https = require('https');
const fs = require('fs');
const cors = require('cors')
// const rateLimit = require('express-rate-limit')




//  mis en place server https 
const server = https.createServer({ 
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert') 
 }, app);


//  contient la phrase de connection à la bdd
 const mdp = require('./env');


//  connection cluster mongodb
 try {
    
    mongoose.connect(
        mdp.mongoAtlasUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        },
        () => console.log(" Mongoose is connected"),
    );
} catch (e) {
    console.log("could not connect");
}

//  Chargement du model pour mongodb
require('./models/messages.model');
let Msg = mongoose.model('msg');


// le BodyParser qui me permet de récupérer les valeurs d'url
let bodyParser = require("body-parser");
const { url } = require('inspector');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(cors())

app.use(express.static(path.join(__dirname, 'dist')))

app.get('/', (req, res)=>{
   
   
    res.sendFile(path.join(__dirname, 'dist/index.html'))
    
    
})

app.post('/message', (req,res)=>{
    console.log(req.body);
    console.log('bite')

    res.send('message reçu')
})




server.listen(9999, (req, res)=>{
    console.log("server ok ! : https://192.168.1.13:9999");
})