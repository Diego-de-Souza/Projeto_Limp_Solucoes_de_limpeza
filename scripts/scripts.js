/* Autor Itamar Maximo De Sena */
let imagem1 = loadimage = "./img/img-cases/img-saiba-mais-1.png";
let imagem2 = loadimage = "./img/img-cases/img-saiba-mais-2.png";
let imagem3 = loadimage = "./img/img-cases/img-saiba-mais-3.png";
let imagem4 = loadimage = "./img/img-cases/img-saiba-mais-4.png";
let imagem5 = loadimage = "./img/img-cases/img-saiba-mais-5.png";
let imagem6 = loadimage = "./img/img-cases/img-saiba-mais-6.png";
let imagem7 = loadimage = "./img/img-cases/img-saiba-mais-7.png";
let imagem8 = loadimage = "./img/img-cases/img-saiba-mais-8.png";
let imagem9 = loadimage = "./img/img-cases/img-saiba-mais-9.png";
let imagem10 = loadimage = "./img/img-cases/img-saiba-mais-10.png";


var im = 0;
var imm =0;
var im2 =0;
var im3 =0;
var im4 =0;
var cont = [imagem1, imagem2];
var cont1 = [imagem3, imagem4];
var cont2 = [imagem5, imagem6];
var cont3 = [imagem7, imagem8];
var cont4 = [imagem9, imagem10];


console.log("Ola javascript banner dinamico");
console.log(cont);

//0

function banner_rotativo(){
  
     imm = (imm +1) % 2;
     document.querySelector('.teste img'). src = cont[imm];
            
   
    }
    setInterval(banner_rotativo, 1000); 

//1

function banner_rotativo1(){
  
     im = (im +1) % 2;
     document.querySelector('.teste1 img'). src = cont1[im];
            
   
    }
    setInterval(banner_rotativo1, 1000);

 //2   

function banner_rotativo2(){
  
     im2 = (im2 +1) % 2;
     document.querySelector('.teste2 img'). src = cont2[im2];
            
   
    }
    setInterval(banner_rotativo2, 1000); 

 //3
 
function banner_rotativo3(){
  
     im3 = (im3 +1) % 2;
     document.querySelector('.teste3 img'). src = cont3[im3];
            
   
    }
    setInterval(banner_rotativo3, 1000); 
    
//4

function banner_rotativo4(){
  
     im4 = (im4 +1) % 2;
     document.querySelector('.teste4 img'). src = cont4[im4];
            
   
    }
    setInterval(banner_rotativo4, 1000); 
