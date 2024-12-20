function validateForm()
{
   output = document.forms["mf"]["fn"].value;
    if (output == "")
    {
      window.alert("The form is not filled . Please recheck the form and fill the feilds") 
      return false ;
    } 
    else 
    {
        window.alert("Details Submitted Successfully")
    }
}
