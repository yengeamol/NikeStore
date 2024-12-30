const forms=document.querySelector(".forms"),
   pwShowHide=document.querySelectorSelector("eyeicon");
   links=document.querySelectorSelector(".link");
pwshowhide.forEach(eyeIcon =>{
  eyeIcon.addEventListener("click",()=>{
    let pwfield =eye-Icon.parentElement.parentElement.querySelectorAll(".password");

    pwfield.forEach(password =>{
      if(password.type=="password"){
        password.type="text";
      }
    })
  })
})