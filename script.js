function Scroll(id){
    var elmntToView = document.getElementById(id);
    elmntToView.scrollIntoView(); 
}
function ShowBuy(){
    let buyElmnt = document.getElementById("buyDiv");
    buyElmnt.style.visibility = 'visible';
    Scroll("wx-container")
}
function HideBuy(){
    let buyElmnt = document.getElementById("buyDiv");
    buyElmnt.style.visibility = 'hidden';
}
function disableScroll() {
    document.body.style.overflow = 'hidden';
}
function enableScroll() {
    document.body.style.overflow = 'visible';
    document.body.style.overflowX = 'hidden';
}
function desableWelcome(id) {
    let i = document.getElementById(id)
    i.remove();
}