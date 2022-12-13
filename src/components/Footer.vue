<script setup>

        

    function retour(contenu){

        console.log(contenu);

        const button = document.querySelector('#sendButton')
        const loader = document.querySelector('#loader')
        const valide = document.querySelector('#valide')

        valide.style.display ="block"
        loader.style.display ="none"

        setTimeout(() => {
            valide.style.display ="none"
            button.style.display = "block"
        }, 5000);
    }


    function sendData(nom, mail, msg) {


        


        let obj = {
            name: nom,
            email: mail,
            message: msg
        }

        fetch('/message', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(obj)
            })
            .then(function(res){
                if(!res.ok){
                    console.log('poblème : ',res);
                    const resServer = document.querySelector('#resServer')
                    resServer.textContent="Un problème est survenu je vous invite à me contacter via mon adresse mail : guillaume.pitois@proton.me"
                }else{
                    res.text()
                }
            })
            .then(contenu => retour(contenu))
            .catch(err =>{
                console.log(err)
                const resServer = document.querySelector('#resServer')
                    resServer.textContent="Un problème est survenu je vous invite à me contacter via mon adresse mail : guillaume.pitois@proton.me"
            })
            

    }

    function recupData() {

        const button = document.querySelector('#sendButton')
        const loader = document.querySelector('#loader')
        

        button.style.display = 'none'
        loader.style.display = 'block'





        let nom = document.querySelector('#nom').value;
        let mail = document.querySelector('#mail').value;
        let message = document.querySelector('#msg').value;

        let verifNom = '';
        let verifMail = '';
        let verifMessage = '';

        if (nom === '') {
            document.querySelector('#errNom').textContent = 'Veuillez renseigner un nom';
        } else if (nom.lenght > 50) {
            document.querySelector('#errNom').textContent = 'Nom non conforme (trop long)';
        } else if (nom.match('<(|\/|[^\/>][^>]+|\/[^>][^>]+)>')) {
            document.querySelector('#errNom').textContent = 'Nom non conforme (Faille xss connard de merde sale pute)';
        } else if (nom.match(/^[a-zA-Z]+$/)) {
            verifNom = nom
        } else {
            document.querySelector('#errNom').textContent = 'Nom non conforme';
        }

        if (mail === '') {
            document.querySelector('#errMail').textContent = 'Veuillez renseigner une adresse mail';
        } else if (mail.match('<(|\/|[^\/>][^>]+|\/[^>][^>]+)>')) {
            document.querySelector('#errMail').textContent =
            'Mail non conforme (Faille xss connard de merde sale pute)';
        } else if (mail.lenght > 200) {
            document.querySelector('#errMail').textContent = 'Mail non conforme (trop long)';
        } else if (mail.match(
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,20}))$/
                )) {
            verifMail = mail;
        } else {
            document.querySelector('#errMail').textContent = 'Mail non conforme';
        }

        if (message === '') {
            document.querySelector('#errMsg').textContent = 'Veuillez renseigner un message';
        } else if (message.lenght > 550) {
            document.querySelector('#errMsg').textContent = 'Message trop long)'
        } else if (message.match('<(|\/|[^\/>][^>]+|\/[^>][^>]+)>')) {
            document.querySelector('#errMsg').textContent =
                'Message non conforme (Faille xss connard de merde sale pute)'
        } else {
            verifMessage = message
        }

        if (verifNom.length > 1 && verifMail.length > 1 && verifMessage.length > 1) {
            sendData(verifNom, verifMail, verifMessage)
        }
    }
</script>
<template>
    <footer>
        <h2 class="taille0">Contact</h2>
        <p> Pour un premier contact rapide n'hésitez pas à utiliser le formulaire si dessous. Je vous réponderez sur le
            mail que vous aurez renseigné dans les plus brefs délai. En éspérant travailler avec vous je vous souhaite
            une agréable journée !
        </p>
        <div id="contacted">
            <input class="input" id="nom" type="text" placeholder="NOM">
            <span class="err" id="errNom"></span>
            <input class="input" id="mail" type="text" placeholder="EMAIL">
            <span class="err" id="errMail"></span>
            <textarea class="input" placeholder="MESSAGE" name="msg" id="msg" cols="30" rows="5"></textarea>
            <span class="err" id="errMsg"></span>
            <p id="resServer"></p>
            <div id="send">
                <button class="button" id="sendButton" @click="recupData()">Envoyer</button>
                <lottie-player id="loader" src="https://assets1.lottiefiles.com/packages/lf20_tsxbtrcu.json"
                    background="transparent" speed="1" style="width: 100px; height: 100px;" loop autoplay>
                </lottie-player>
                <svg id="valide" xmlns="http://www.w3.org/2000/svg" width="32" height="32" version="1.1" viewBox="0 0 32 32">
                    <g transform="scale(2)">
                        <circle style="fill:#4caf50" cx="8" cy="8" r="7" />
                        <path style="fill:#ffffff"
                            d="M 11.535,4.4 7.2928,8.6 4.4647,5.8 3.0506,7.2 5.8787,10.1 7.2928,11.5 12.949,5.8 Z" />
                    </g>
                </svg>
            </div>
        </div>
        <div id="mifooter">
            <h3>Guillaume Pitois</h3>
            <p>guillaume.pitois.dev@proton.me</p>
            <ul class="media">

                <li>
                    <a href="#"><svg class="svg" enable-background="new 0 0 128 128" id="Social_Icons" version="1.1"
                            viewBox="0 0 128 128" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink">
                            <g id="_x31__stroke">
                                <g id="Github_1_">
                                    <rect clip-rule="evenodd" fill="none" fill-rule="evenodd" height="128"
                                        width="128" />
                                    <path clip-rule="evenodd"
                                        d="M63.996,1.333C28.656,1.333,0,30.099,0,65.591    c0,28.384,18.336,52.467,43.772,60.965c3.2,0.59,4.368-1.394,4.368-3.096c0-1.526-0.056-5.566-0.088-10.927    c-17.804,3.883-21.56-8.614-21.56-8.614c-2.908-7.421-7.104-9.397-7.104-9.397c-5.812-3.988,0.44-3.907,0.44-3.907    c6.42,0.454,9.8,6.622,9.8,6.622c5.712,9.819,14.98,6.984,18.628,5.337c0.58-4.152,2.236-6.984,4.064-8.59    c-14.212-1.622-29.152-7.132-29.152-31.753c0-7.016,2.492-12.75,6.588-17.244c-0.66-1.626-2.856-8.156,0.624-17.003    c0,0,5.376-1.727,17.6,6.586c5.108-1.426,10.58-2.136,16.024-2.165c5.436,0.028,10.912,0.739,16.024,2.165    c12.216-8.313,17.58-6.586,17.58-6.586c3.492,8.847,1.296,15.377,0.636,17.003c4.104,4.494,6.58,10.228,6.58,17.244    c0,24.681-14.964,30.115-29.22,31.705c2.296,1.984,4.344,5.903,4.344,11.899c0,8.59-0.08,15.517-0.08,17.626    c0,1.719,1.152,3.719,4.4,3.088C109.68,118.034,128,93.967,128,65.591C128,30.099,99.344,1.333,63.996,1.333"
                                        fill="#3E75C3" fill-rule="evenodd" id="Github" />
                                </g>
                            </g>
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="#"><svg class="svg" enable-background="new 0 0 157.728 157.731" height="157.731"
                            id="Layer_1" overflow="visible" version="1.1" viewBox="0 0 157.728 157.731" width="157.728"
                            xml:space="preserve" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink">
                            <g id="icon_2_">
                                <path
                                    d="M78.864,0c43.556,0,78.863,35.308,78.863,78.864c0,43.552-35.308,78.868-78.863,78.868   C35.308,157.731,0,122.416,0,78.864C0,35.308,35.308,0,78.864,0z"
                                    fill="#8C9EFF" />
                                <path
                                    d="M113.101,53.34c0,0-9.76-7.635-21.284-8.514l-1.043,2.076c10.425,2.552,15.2,6.207,20.199,10.695   c-8.612-4.394-17.112-8.514-31.927-8.514c-14.815,0-23.322,4.12-31.926,8.514c4.985-4.488,10.677-8.545,20.192-10.695l-1.036-2.076   c-12.099,1.145-21.284,8.514-21.284,8.514S34.09,69.143,32.221,100.166c10.985,12.672,27.669,12.771,27.669,12.771l3.487-4.649   c-5.923-2.059-12.61-5.741-18.386-12.378c6.889,5.209,17.293,10.642,34.055,10.642c16.762,0,27.158-5.426,34.055-10.642   c-5.783,6.637-12.47,10.319-18.386,12.378l3.487,4.649c0,0,16.677-0.099,27.669-12.771C123.995,69.143,113.101,53.34,113.101,53.34   z M65.211,91.651c-4.117,0-7.449-3.809-7.449-8.514c0-4.701,3.333-8.513,7.449-8.513c4.117,0,7.45,3.812,7.45,8.513   C72.661,87.843,69.328,91.651,65.211,91.651z M92.881,91.651c-4.117,0-7.45-3.809-7.45-8.514c0-4.701,3.333-8.513,7.45-8.513   c4.116,0,7.449,3.812,7.449,8.513C100.33,87.843,96.99,91.651,92.881,91.651z"
                                    fill="#FFFFFF" />
                            </g>
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="#"><svg class="svg" id="Capa_1" style="enable-background:new 0 0 112.196 112.196;"
                            version="1.1" viewBox="0 0 112.196 112.196" xml:space="preserve"
                            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <g>
                                <circle cx="56.098" cy="56.097" r="56.098" style="fill:#007AB9;" />
                                <g>
                                    <path
                                        d="M89.616,60.611v23.128H76.207V62.161c0-5.418-1.936-9.118-6.791-9.118    c-3.705,0-5.906,2.491-6.878,4.903c-0.353,0.862-0.444,2.059-0.444,3.268v22.524H48.684c0,0,0.18-36.546,0-40.329h13.411v5.715    c-0.027,0.045-0.065,0.089-0.089,0.132h0.089v-0.132c1.782-2.742,4.96-6.662,12.085-6.662    C83.002,42.462,89.616,48.226,89.616,60.611L89.616,60.611z M34.656,23.969c-4.587,0-7.588,3.011-7.588,6.967    c0,3.872,2.914,6.97,7.412,6.97h0.087c4.677,0,7.585-3.098,7.585-6.97C42.063,26.98,39.244,23.969,34.656,23.969L34.656,23.969z     M27.865,83.739H41.27V43.409H27.865V83.739z"
                                        style="fill:#F1F2F2;" />
                                </g>
                            </g>
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                        </svg></a>
                </li>


            </ul>

        </div>

        <div id="finfooter">
            <a href="">mentions légales</a>
            <img src="../assets/img/french.png" width="20" height="15" alt="">
        </div>

    </footer>
</template>
<style scoped>
    #loader {
        display: none;
    }

    #valide {
        display: none;
    }

    .err {
        color: rgb(239, 92, 92);
    }

    footer {

        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        gap: 40px;
        background-color: #444;
        padding: 20px 20px 0 20px;
        color: #fff;

    }

    footer p {
        max-width: 600px;
    }

    footer #contacted {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        max-width: 600px;
    }

    footer #contacted .input {
        background-color: rgba(0, 0, 0, 0);
        border: none;
        border-bottom: 2px solid #fff;
        padding: 20px;
        width: 100%;
        color: #fff;
    }

    footer #contacted .button {
        background-color: rgba(0, 0, 0, 0);
        border: none;
        border-bottom: 2px solid var(--button);
        padding: 10px;
        color: #fff;
        font-size: 1.2rem;
        margin-top: 20px;
    }

    footer #mifooter {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;

    }

    footer #mifooter p {
        font-weight: 200;
    }

    footer #mifooter ul {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;


    }

    footer #mifooter ul li {
        width: 100%;

        text-align: center;
    }

    footer #mifooter ul li .svg {
        width: 30px;
        height: 30px;
        z-index: 22;
    }


    footer #finfooter {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.7rem;
    }

    .fsvg {
        width: 30px;
        height: 30px;
    }
</style>