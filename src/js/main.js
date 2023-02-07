import '../scss/styles.scss'

import * as bootstrap from 'bootstrap'

import Image1 from "../assets/clean-house1.jpeg"
import Image2 from "../assets/clean-house2.jpg"
import Image3 from "../assets/clean-house3.jpg"
/*import Image4 from "../assets/house-cleaner2.jpeg"
import Image5 from "../assets/house-cleaner1.webp"
import Image6 from "../assets/house-cleaner3.jpg"*/


function loadImages(){
    const elem1=document.getElementById("image1");
    const elem2=document.getElementById("image2");
    const elem3=document.getElementById("image3");
    /*const elem4=document.getElementById("image4");
    const elem5=document.getElementById("image5");
    const elem6=document.getElementById("image6");*/
    elem1.src= Image1;
    elem2.src= Image2;
    elem3.src= Image3;
    /*elem4.src= Image4;
    elem5.src= Image5;
    elem6.src= Image6;*/
}

loadImages()