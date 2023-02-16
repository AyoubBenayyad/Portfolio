
let open_nav=document.getElementById("open_btn");
let close_nav=document.getElementById("close_btn");
let nav=document.querySelector(".second_nav");
open_nav.addEventListener("click",openNav);
close_nav.addEventListener("click",closeNav);
function openNav(){
    nav.style.bottom=0;
    nav.style.transition = "bottom 0.5s ease-in-out";
    console.log("hello");
}
function closeNav(){
    nav.style.bottom="-170px";
    nav.style.transition = "bottom 0.5s ease-in-out";
    console.log("hello");
}

let CV_btn=document.querySelector(".CV_btn");
CV_btn.addEventListener("click",downloadCV);

function downloadCV(){
    let link=document.createElement("a");
    link.setAttribute('href',"./img/CV_2.pdf");
    link.setAttribute('download', 'CV_2.pdf');
    link.click();
}