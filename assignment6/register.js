window.onload = pageLoad;
function pageLoad(){
	var form = document.getElementById("myForm");
    form.onsubmit = validateForm;
}

function validateForm() {
    var Password = document.forms["myForm"]["password"].value;
    var rePassword = document.forms["myForm"]["passwordRetype"].value;

    if(Password == rePassword){
        alert("Hello, Welcome.");
    }
    else{
        alert("Wrong password. Try again.");
        return false;
    }
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
}