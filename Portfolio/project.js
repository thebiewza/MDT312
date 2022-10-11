window.onload = pageLoad;
function pageLoad(){
    var clickPrev = document.getElementById("prev");
    clickPrev.onclick = PrevPage;
}
function PrevPage(){
    location.href = "index.html"
}