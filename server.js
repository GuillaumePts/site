const express = require('express');
const app = express();
const mongoose = require('mongoose')
const path = require('path');
const  https = require('https');
const fs = require('fs');
const cors = require('cors')
// const rateLimit = require('express-rate-limit')




//  mis en place server https 
// const server = https.createServer({ 
//     key: fs.readFileSync('server.key'),
//     cert: fs.readFileSync('server.cert') 
//  }, app);


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

   
    

    try{

        let nom = req.body.name ;
        let mail = req.body.email ;
        let message = req.body.message ;
    
        let tabErr = [];
    
        let verifNom = '' ;
        let verifMail = '' ;
        let verifMessage = '' ;
        
        if(nom === ''){
            tabErr.push(1);
        }else if(nom.lenght > 50){
            tabErr.push(1);
        }else if(nom.match('<(|\/|[^\/>][^>]+|\/[^>][^>]+)>')){
            tabErr.push(1);
        }else if(nom.match(/^[a-zA-Z]+$/)){
            verifNom = nom
        }else{
            tabErr.push(1);
        }
    
        if(mail === ''){
            tabErr.push(1);
        }else if(mail.match('<(|\/|[^\/>][^>]+|\/[^>][^>]+)>')){
            tabErr.push(1);
        }else if(mail.lenght > 200){
           tabErr.push(1);
        }else if(mail.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,20}))$/)){
            verifMail = mail ; 
        }else{
            tabErr.push(1);
        }
    
        if(message === ''){
            tabErr.push(1);
        }else if(message.lenght > 550){
            tabErr.push(1);
        }else if(message.match('<(|\/|[^\/>][^>]+|\/[^>][^>]+)>')){
            tabErr.push(1);
        }else{
            verifMessage = message
        }
    
        if(verifNom.length > 1 && verifMail.length > 1 && verifMessage.length > 1 && tabErr.length < 1 ){
            
            Msg.findOne({
                email : verifMail
            }, (err,exist)=>{
                if(err){
                    console.log(err)
                    res.send('une erreur est survenu lors de l\'enregistrement de votre message')
                }else if(exist){
                    res.send('un message existe déja')
                }else{
                    let data = new Msg() ; 
                    data.email = verifMail ; 
                    data.nom = verifNom ; 
                    data.message = verifMessage ;
                    data.createdAt = new Date();
                    data.save()

                    res.send('message enregistré')
                }
            })
        }


    }catch (e){

        res.send('un problème est survenu')
    }
})




// server.listen(9999, (req, res)=>{
//     console.log("server ok ! : https://192.168.1.13:9999");
// })

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port, (req,res)=>{
    console.log("server ok ! : "+port);
});