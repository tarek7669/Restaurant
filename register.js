function change() {
	var firstName = document.form.fname.value,
		lastName = document.form.lname.value,
		userName = document.form.username.value,
		pass = document.form.password.value;
	var admin="ot4a@gmail.com";
	var password="1234567";
	if(document.form.username.value==admin&&document.form.password.value==password)
	{
		alert("You can not use this email");
	}
	else if(firstName=="")
	{
		alert("Please enter your first name");
		document.form.fname.focus();
	}
	else if(lastName=="")
	{
		alert("Please enter your last name");
		document.form.lname.focus();
	}
	else if(document.form.username.value.indexOf("@")==-1||document.form.username.value.indexOf(".")==-1)
	{
		document.form.username.focus();
		alert("please enter a correct email");
	}
	else if(document.form.password.value.length<5)
	{
		document.form.password.focus();
		alert("The password is less than 6 character");
	}
	else{
		window.location.assign("booking.html");
	}
	
}
