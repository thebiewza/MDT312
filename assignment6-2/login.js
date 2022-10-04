window.onload = loginLoad;
function loginLoad(){
	var login = document.getElementById("myLogin");
	login.onsubmit = checkLogin;
}
//url
const queryString = window.location.search;
console.log(queryString);

const urlParams = new URLSearchParams(queryString);
const urlUser = urlParams.get('username')
console.log(urlUser);

const urlPass = urlParams.get('password')
console.log(urlPass);

function checkLogin(){
	var username = document.forms["myLogin"]["username"].value;
	var userPass = document.forms["myLogin"]["password"].value;


	if(username == urlUser && userPass == urlPass){
		alert("Welcome back. " + username);
	}
	else{
		alert("Username or password wrong, please try again.");
		return false;
	}

	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
}

			