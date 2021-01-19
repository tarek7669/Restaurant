let slides = document.getElementsByClassName("slide");

var index = 0;

(function next()
{
	for(var i = 0; i < slides.length; i++)
	{
		slides[i].style.display = "none";
	}
	index++;
	if (index >= slides.length)
		index = 0;
	slides[index].style.display = "block";
	setTimeout(next, 3000);
})();

