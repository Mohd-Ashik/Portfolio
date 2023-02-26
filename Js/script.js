// mobile menubar open 
function openMenu(){
    document.getElementById("navbar").style.left = "0px";
}
// mobile menubar close 
function closeMenu(){
    document.getElementById("navbar").style.left = "-200px";
}

let date = document.getElementById('date');
let x=new Date();
date.innerHTML = x.getFullYear();