function book()
{
    if(document.form.text.value!="")
    {
        alert("The table has been book successfully");
        window.location.assign("home.html");
    }
    else
    {
        alert("Please enter your name");
    }
}