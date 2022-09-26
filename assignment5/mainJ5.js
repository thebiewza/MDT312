var count = 0;

function postFunction(){
    var myText = document.getElementById("text1").value;

    if(count == 0){
        document.getElementById("topic1").innerHTML = myText;
        count += 1;
    }
    else if(count == 1){
        document.getElementById("comment1").innerHTML = myText;
        count += 1;
    }
    else if(count == 2){
        document.getElementById("comment2").innerHTML = myText;
        count += 1;
    }

}

function clearFunction(){
    document.getElementById("topic1").innerHTML = ("");
    document.getElementById("comment1").innerHTML = ("");
    document.getElementById("comment2").innerHTML = ("");

    count = 0;
}