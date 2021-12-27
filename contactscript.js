
function  userNameValidation() {
     var email=document.getElementById("email_id").value;
    if(email==""){
        document.getElementById("Email_Validation").innerHTML="*Email Id can't be empty";
        return false;
    }
    
    var name = document.getElementById("user_name").value;
    if(name==""){
        document.getElementById("MessageForName").innerHTML="*Username cannot be Empty";
         return false;
    }

    var place = document.getElementById("country").value;
    if(place==""){
        document.getElementById("MessageForCountry").innerHTML="*Country Name can't be Empty";
        return false;
    }
}
