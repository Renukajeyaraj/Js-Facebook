let forml = document.querySelector("#forml");
forml.addEventListener('submit',resdata);

function resdata(e){
	e.preventDefault();
	let number1 = document.getElementById("number").value;
	let passwordl = document.getElementById("passwordl").value;
	
	let number= localStorage.getItem('Mob');
	let password = localStorage.getItem('psw');
	
	if(number1 == number && passwordl == password){
		alert("success");
		location.href="file:///R:/Facebook/node.html"
	}
	else{
		alert("Incorrect");
	}
}