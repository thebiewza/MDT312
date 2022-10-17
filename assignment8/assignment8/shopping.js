window.onload = pageLoad;

function pageLoad(){
    var xhr = new XMLHttpRequest(); 
    xhr.open("GET", "cloth.json"); 
    xhr.onload = function() { 
        var jsondata = JSON.parse(xhr.responseText);
        console.log(jsondata);
        showData(jsondata);
    }; 
    xhr.onerror = function() { alert("ERROR!"); }; 
    xhr.send();
}

function showData(data){
    console.log(Object.keys(data).length);
    var showdiv = document.querySelectorAll("#layer div")
    var keys = Object.keys(data);
    for(var i =0; i< keys.length;i++){
        var temp = document.createElement("p");
        var img = document.createElement("img");

        temp.innerHTML = data[keys[i]].brandname + " <br> Price: "+ data[keys[i]].price + " bath.";
        img.src = data[keys[i]].pic;

        showdiv[i].appendChild(img);
        showdiv[i].appendChild(temp);
        
    }
}

