function bgcolor(color) 
{
	document.body.style.backgroundColor = color;
}

function fsize(name)
{
	if (name == 'small')
		document.body.style.fontSize = ' small';
	else if (name == 'default')
		document.body.style.fontSize = 'initial';
	else if (name == 'large')
		document.body.style.fontSize = 'large';
}