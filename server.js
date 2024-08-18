const express = require('express');
const app = express();
const mongoose = require('mongoose')
const path = require('path');
const  https = require('https');
const fs = require('fs');
const cors = require('cors')
require('dotenv').config();
const nodemailer = require('nodemailer');
const mailmdp = process.env.MAILMDP
const atlas = process.env.ATLAS
// const rateLimit = require('express-rate-limit')




//  mis en place server https 
// const server = https.createServer({ 
//     key: fs.readFileSync('server.key'),
//     cert: fs.readFileSync('server.cert') 
//  }, app);





//  connection cluster mongodb
try {
    
    mongoose.connect(
        atlas, {
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

app.get('/cv', (req,res)=>{
    res.sendFile(path.join(__dirname, 'src/assets/cv2024.pdf'))
})

app.post('/message', (req,res)=>{

         // Configuration du transporteur (transporter)
        const transporter = nodemailer.createTransport({
            host: 'smtp-mail.outlook.com', // Adresse du serveur SMTP de Hotmail
            port: 587, // Port recommandé pour Hotmail (peut également essayer le port 25)
            secure: false, // Utilisez true pour le transport sécurisé (TLS)
            auth: {
                user: 'dev.message@outlook.com',
                pass: mailmdp
            }
        });

        // Définir les options de l'email
        let mailOptions = {
            from: 'dev.message@outlook.com', // Expéditeur
            to: 'guillaume.pitois1@gmail.com',// Destinataire(s)
            subject: 'new message !',             // Sujet
            text:  req.body.email + '\n' + req.body.name + '\n' + req.body.message,                   // Corps du message
        };

        // Envoyer l'email
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Erreur lors de l\'envoi de l\'e-mail:', error);
            } else {
                console.log('E-mail envoyé avec succès:', info.response);
            }
        });
        

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
                    res.statusCode = 500;
                    res.setHeader('Content-Type', 'text/plain');
                    res.end('Un problème est survenu ! Veuillez directement me contacter par mail');
                }else if(exist){
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'text/plain');
                    res.end('Un message existe déja à cette adresse mail, veuillez directement me contacter par mail');
                }else{
                    let data = new Msg() ; 
                    data.email = verifMail ; 
                    data.nom = verifNom ; 
                    data.message = verifMessage ;
                    data.createdAt = new Date();
                    data.save()

                    res.statusCode = 201;
                    res.setHeader('Content-Type', 'text/plain');
                    res.end('message enregistré !');
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