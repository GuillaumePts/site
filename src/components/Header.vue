<script setup>
    let root = document.documentElement;


    function nightMode() {
        const lebird = document.querySelectorAll('.bird');
        const fleche = document.querySelector('#Capa_1')
        const nMode = document.querySelector('#mode');
        const respons = document.querySelectorAll('.responsive')

        nMode.classList.toggle('sun');
        nMode.classList.toggle('night');

        let laclass = nMode.classList.value;

        if (laclass === 'sun') {

            root.style.setProperty("--text", "rgb(0, 0, 0)");
            root.style.setProperty("--back", "#fff");
            lebird[0].style.display = "none"
            lebird[1].style.display = "block"

            
                respons[0].style.display = "none"
                respons[1].style.display = "block"
           



        } else {

            root.style.setProperty("--back", "rgb(0, 0, 0)");
            root.style.setProperty("--text", "rgb(218, 218, 218)");
            lebird[1].style.display = "none"
            lebird[0].style.display = "block"

            
                respons[1].style.display = "none"
                respons[0].style.display = "block"
           

        }


    }
</script>

<template>
    <header>

        <div id="positionMode">
            <div id="mode" class="night" @click="nightMode()">
                <div id="selectmode"></div>
            </div>
            <span class="material-symbols-outlined">
                nights_stay
            </span>
        </div>

        <Figure>

            <div id="en-tete">

                <ul>
                    <li>
                        <a href="#"><svg class="svg" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M24.0002 0C10.747 0 0 11.0169 0 24.6076C0 35.4799 6.87679 44.7039 16.4128 47.9577C17.6123 48.1855 18.0526 47.4239 18.0526 46.7739C18.0526 46.1872 18.0304 44.2487 18.02 42.1925C11.3431 43.6811 9.93424 39.2891 9.93424 39.2891C8.84249 36.4448 7.26945 35.6885 7.26945 35.6885C5.09191 34.1613 7.43359 34.1926 7.43359 34.1926C9.84363 34.3662 11.1126 36.7285 11.1126 36.7285C13.2532 40.4904 16.7272 39.4028 18.0967 38.7741C18.3121 37.1836 18.9341 36.0981 19.6205 35.4836C14.2897 34.8613 8.6859 32.7513 8.6859 23.3224C8.6859 20.6358 9.62345 18.4406 11.1587 16.7174C10.9095 16.0976 10.088 13.5947 11.3912 10.2052C11.3912 10.2052 13.4066 9.54386 17.993 12.7276C19.9074 12.1824 21.9606 11.9089 24.0002 11.8996C26.0398 11.9089 28.0946 12.1824 30.0126 12.7276C34.5934 9.54386 36.606 10.2052 36.606 10.2052C37.9124 13.5947 37.0905 16.0976 36.8413 16.7174C38.3801 18.4406 39.3113 20.6358 39.3113 23.3224C39.3113 32.7737 33.6968 34.8548 28.3525 35.464C29.2133 36.2276 29.9804 37.7252 29.9804 40.021C29.9804 43.3135 29.9526 45.9634 29.9526 46.7739C29.9526 47.4288 30.3846 48.1961 31.6011 47.9544C41.132 44.697 48 35.4762 48 24.6076C48 11.0169 37.2546 0 24.0002 0"
                                    fill="var(--text)" />
                                <path
                                    d="M9.16085 35.1623C9.10809 35.2833 8.92085 35.3196 8.75027 35.2365C8.57652 35.157 8.47893 34.992 8.53526 34.8706C8.58683 34.7459 8.77447 34.7112 8.94782 34.7947C9.12197 34.8742 9.22115 35.0408 9.16085 35.1623"
                                    fill="var(--text)" />
                                <path
                                    d="M10.1312 36.263C10.0169 36.3707 9.79358 36.3207 9.64205 36.1504C9.48535 35.9806 9.456 35.7534 9.57183 35.6441C9.68965 35.5363 9.90624 35.5868 10.0633 35.7566C10.22 35.9285 10.2506 36.1541 10.1312 36.263"
                                    fill="var(--text)" />
                                <path
                                    d="M11.0757 37.6663C10.9289 37.77 10.6889 37.6728 10.5406 37.4561C10.3938 37.2394 10.3938 36.9796 10.5437 36.8755C10.6925 36.7714 10.9289 36.865 11.0793 37.0801C11.2257 37.3004 11.2257 37.5602 11.0757 37.6663"
                                    fill="var(--text)" />
                                <path
                                    d="M12.3697 39.0219C12.2384 39.1692 11.9588 39.1297 11.7541 38.9287C11.5446 38.7322 11.4863 38.4534 11.618 38.3062C11.7509 38.1585 12.0321 38.2001 12.2384 38.3994C12.4463 38.5955 12.5098 38.8763 12.3697 39.0219"
                                    fill="var(--text)" />
                                <path
                                    d="M14.1548 39.8091C14.0969 40 13.8276 40.0867 13.5562 40.0056C13.2853 39.9221 13.108 39.6986 13.1627 39.5057C13.219 39.3137 13.4896 39.2233 13.7629 39.31C14.0334 39.3932 14.2112 39.6151 14.1548 39.8091"
                                    fill="var(--text)" />
                                <path
                                    d="M16.1153 39.9552C16.122 40.1561 15.892 40.3228 15.6071 40.3264C15.3207 40.3329 15.089 40.1703 15.0859 39.9726C15.0859 39.7696 15.3108 39.6046 15.5972 39.5998C15.882 39.5941 16.1153 39.7555 16.1153 39.9552"
                                    fill="var(--text)" />
                                <path
                                    d="M17.9397 39.6392C17.9738 39.8353 17.7759 40.0366 17.493 40.0903C17.2149 40.1419 16.9575 40.0209 16.9222 39.8264C16.8877 39.6255 17.0892 39.4241 17.3669 39.3721C17.6501 39.3221 17.9036 39.4399 17.9397 39.6392"
                                    fill="var(--text)" />
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="#"><svg class="svg" enable-background="new 0 0 157.728 157.731" overflow="visible"
                                version="1.1" viewBox="0 0 157.728 157.731" xml:space="preserve"
                                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <g >
                                    <path
                                        d="M78.864,0c43.556,0,78.863,35.308,78.863,78.864c0,43.552-35.308,78.868-78.863,78.868   C35.308,157.731,0,122.416,0,78.864C0,35.308,35.308,0,78.864,0z"
                                        fill="var(--text)" />
                                    <path
                                        d="M113.101,53.34c0,0-9.76-7.635-21.284-8.514l-1.043,2.076c10.425,2.552,15.2,6.207,20.199,10.695   c-8.612-4.394-17.112-8.514-31.927-8.514c-14.815,0-23.322,4.12-31.926,8.514c4.985-4.488,10.677-8.545,20.192-10.695l-1.036-2.076   c-12.099,1.145-21.284,8.514-21.284,8.514S34.09,69.143,32.221,100.166c10.985,12.672,27.669,12.771,27.669,12.771l3.487-4.649   c-5.923-2.059-12.61-5.741-18.386-12.378c6.889,5.209,17.293,10.642,34.055,10.642c16.762,0,27.158-5.426,34.055-10.642   c-5.783,6.637-12.47,10.319-18.386,12.378l3.487,4.649c0,0,16.677-0.099,27.669-12.771C123.995,69.143,113.101,53.34,113.101,53.34   z M65.211,91.651c-4.117,0-7.449-3.809-7.449-8.514c0-4.701,3.333-8.513,7.449-8.513c4.117,0,7.45,3.812,7.45,8.513   C72.661,87.843,69.328,91.651,65.211,91.651z M92.881,91.651c-4.117,0-7.45-3.809-7.45-8.514c0-4.701,3.333-8.513,7.45-8.513   c4.116,0,7.449,3.812,7.449,8.513C100.33,87.843,96.99,91.651,92.881,91.651z"
                                        fill="var(--back)" />
                                </g>
                            </svg></a>
                    </li>
                    <li>
                        <a href="#"><svg class="svg " style="enable-background:new 0 0 112.196 112.196;" version="1.1"
                                viewBox="0 0 112.196 112.196" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink">
                                <g>
                                    <circle cx="56.098" cy="56.097" r="56.098" style="fill:var(--text);" />
                                    <g>
                                        <path
                                            d="M89.616,60.611v23.128H76.207V62.161c0-5.418-1.936-9.118-6.791-9.118    c-3.705,0-5.906,2.491-6.878,4.903c-0.353,0.862-0.444,2.059-0.444,3.268v22.524H48.684c0,0,0.18-36.546,0-40.329h13.411v5.715    c-0.027,0.045-0.065,0.089-0.089,0.132h0.089v-0.132c1.782-2.742,4.96-6.662,12.085-6.662    C83.002,42.462,89.616,48.226,89.616,60.611L89.616,60.611z M34.656,23.969c-4.587,0-7.588,3.011-7.588,6.967    c0,3.872,2.914,6.97,7.412,6.97h0.087c4.677,0,7.585-3.098,7.585-6.97C42.063,26.98,39.244,23.969,34.656,23.969L34.656,23.969z     M27.865,83.739H41.27V43.409H27.865V83.739z"
                                            style="fill:var(--back)" />
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
                    <li>
                        <a href="#footer"><svg class="svg" version="1.1" viewBox="0 0 519 519" width="519px"
                                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <title />
                                <desc />
                                <defs>
                                    <radialGradient cx="50%" cy="21.9311119%" fx="50%" fy="21.9311119%"
                                        id="radialGradient-1" r="87.8884669%">
                                        <stop offset="0%" stop-color="#5C79E5" />
                                        <stop offset="100%" stop-color="#3F59CD" />
                                    </radialGradient>
                                </defs>
                                <g fill="none" fill-rule="evenodd" id="Page-1" stroke="none" stroke-width="1">
                                    <g id="Artboard" transform="translate(-1563.000000, -153.000000)">
                                        <g fill="var(--text)" id="Group-8"
                                            transform="translate(718.000000, 153.000000)">
                                            <circle cx="1104.5" cy="259.5" id="Oval" r="259.5" />
                                        </g>
                                        <path
                                            d="M1949,266 C1962.80712,266 1974,277.192881 1974,291 L1974,499.476352 C1974,513.283471 1962.80712,524.476352 1949,524.476352 L1835.456,524.476 L1753.37323,579.156663 C1751.07505,580.687611 1747.97092,580.065641 1746.43997,577.767454 C1745.89304,576.946425 1745.60121,575.98195 1745.60121,574.995429 L1745.601,524.476 L1699,524.476352 C1685.19288,524.476352 1674,513.283471 1674,499.476352 L1674,291 C1674,277.192881 1685.19288,266 1699,266 L1949,266 Z"
                                            fill="var(--back)" id="Rectangle-2" />
                                    </g>
                                </g>
                            </svg></a>
                    </li>

                </ul>
            </div>
            <img src="../assets/img/man-silhouette-hi.webp" alt="">
        </Figure>

        <div id="msgHeader">
            <h2 class="taille0">Guillaume Pitois <span class="taille1"><br /> Developpeur web Full Stack</span></h2>
            <a class="taille2 contact2" href="#main"><svg version="1.1" class="Capa_1"
                    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    viewBox="0 0 12.414 12.414" style="enable-background:new 0 0 12.414 12.414;" xml:space="preserve">
                    <g>
                        <g id="Layer_1_37_">
                            <path d="M10.914,6.293c-0.391-0.391-1.023-0.391-1.414,0L7.207,8.586V1c0-0.552-0.447-1-1-1s-1,0.448-1,1
			v7.586L2.914,6.293c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414l4.707,4.707l4.707-4.707
			C11.305,7.316,11.305,6.684,10.914,6.293z" />
                        </g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                </svg></a>
        </div>
        <lottie-player class="bird " src="https://lottie.host/0798345f-4a5d-4d52-b5c4-71d35198ed95/rNgLQitk6x.json"
            background="transparent" speed="1" loop autoplay></lottie-player>
        <lottie-player class="bird " style="display: none;"
            src="https://assets2.lottiefiles.com/packages/lf20_Kqzytj.json" background="transparent" speed="1" loop
            autoplay></lottie-player>
    </header>
</template>

<style scoped>
    .night {
        justify-content: end;

        background-color: #09d371;
    }

    .sun {
        justify-content: start;

        background-color: #000000;
    }






    header {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        border-bottom: 2px solid var(--primary);

        position: relative;



    }

    .bird {
        width: 100%;
        height: 200px;
        position: absolute;
        bottom: 0px;
        z-index: -1;


    }

    header #positionMode {
        position: absolute;
        right: 10px;
        margin-top: 4%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 5px;


    }

    header #positionMode .material-symbols-outlined {

        font-variation-settings:
            'FILL'0,
            'wght'400,
            'GRAD'0,
            'opsz'48;

        font-size: 1rem;
    }

    header #positionMode #mode {

        border: 3px solid var(--text);
        width: 40px;
        height: 20px;
        border-radius: 50px;
        display: flex;

        align-items: center;

        box-shadow: inset 0px 0px 0px 2px black;

    }

    header #positionMode #mode #selectmode {
        height: 18px;
        width: 18px;
        background-color: var(--text);
        border-radius: 50%;
        border: 2px solid var(--back);

    }





    header figure {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        height: 70%;
        width: 65%;
        margin: 0 auto;
        background: rgba(51, 51, 51, 0.457);
        box-shadow: 0px 0px 20px #00000017;
    }

    header figure #en-tete {

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
        margin: 20px;
        width: 100%;

    }

    header figure #en-tete ul {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;


    }

    header figure #en-tete ul li {
        width: 100%;

        text-align: center;
    }

    header figure #en-tete ul li a {
        width: 100%;
        color: var(--text);
    }

    header figure #en-tete .svg {
        width: 30px;
        height: 30px;
        z-index: 22;
    }

    header figure img {
        width: 100%;
    }

    header #msgHeader {
        width: 80%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;

        margin: 0 auto 70px auto;
        text-align: center;
        height: 40%;


    }



    header #msgHeader .contact2 {
        height: 40px;
        width: 40px;
        border-radius: 50px;
        background-color: var(--text);
        padding: 7px;


    }

    .Capa_1 {
        fill: var(--back)
    }

    @media (min-width: 900px) {

        header figure {
            width: 100%;
        }

        header #msgHeader {
            width: 100%;
        }

        header #msgHeader .contact2 {

            display: none;

        }

        #bird {
            bottom: -100px;
        }


    }
</style>