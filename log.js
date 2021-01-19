var username="ot4a@gmail.com";
var password="1234567";

function validate()
{
	var valid = true;
	if(document.inputform.username.value==username&&document.inputform.password.value==password)
	{
		window.location.replace("admin.html");
		console.log("enter");
	}
	else if(document.inputform.username.value.indexOf("@")==-1||document.inputform.username.value.indexOf(".")==-1)
	{
		document.inputform.username.focus();
		alert("please enter a correct email");
		valid=false;
	}
	else if(document.inputform.password.value.length<5)
	{
		document.inputform.password.focus();
		alert("The password is less than 6 character");
		valid=false;
	}
	else{
		window.location.assign("booking.html");
	}
}