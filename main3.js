function myFunction()
{
    var inpObj = document.getElementById("id1");
    if (!inpObj.checkValidity())
    {
        document.getElementById("result1").innerHTML = inpObj.validationMessage;
    }
    else
    {
        document.getElementById("result").innerHTML = "Input OK";
    }
}