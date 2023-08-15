
const array=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W"
,"X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","m","o","p","q","r","s","t","u","v",
"w","x","y","z","1","2","3","4","5","6","7","8","9","@","!","#","$","$","%","*","&","+","_"];

const btn=document.querySelector(".button");

var input=document.getElementById("password");
let arrayLen=array.length;


btn.addEventListener("click", ()=>{
    CreatePassword();
});

function CreatePassword(){

    var randomValue;

var password="";
for(var i=0; i<12; i++){
    randomValue = Math.floor((Math.random() * arrayLen));
     password+=array[randomValue];
}

input.value=password;

}

const copybtn=document.querySelector(".fa-copy");


copybtn.addEventListener("click",()=>{
    copyPassword();
});

function copyPassword(){
    const alert=document.getElementById("alert");
   input.select();
   navigator.clipboard.writeText(input.value);
   alert.classList.replace("alert","activealert");
// alert("I am an alert box!");
alert.classList.add("activealertTwo");
}

