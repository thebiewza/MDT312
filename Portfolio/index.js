window.onload = pageLoad;
function pageLoad(){
    var clickAs4 = document.getElementById("Ass4");
    clickAs4.onclick = Ass4link;

    var clickAs5 = document.getElementById("Ass5");
    clickAs5.onclick = Ass5link;
    
    var clickAs6 = document.getElementById("Ass6");
    clickAs6.onclick = Ass6link;

    var clickAs7 = document.getElementById("Ass7");
    clickAs7.onclick = Ass7link;

    var clickNext = document.getElementById("next");
    clickNext.onclick = NextPage;
}
function NextPage(){
    location.href = "project.html"
}
function Ass4link(){
    location.href = "https://thebiewza.github.io/MDT312/assignment4/recipe.html"
}
function Ass5link(){
    location.href = "https://thebiewza.github.io/MDT312/assignment5/index.html"
}
function Ass6link(){
    location.href = "https://thebiewza.github.io/MDT312/assignment6-2/register.html"
}
function Ass7link(){
    location.href = "https://thebiewza.github.io/MDT312/assignment7/index.html"
}