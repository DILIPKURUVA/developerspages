function_adduser(){
  user_name=document.getElementById("username").value;
    localStorage.setItem("name of the user",user_name);
    window.location="two.html";
}

