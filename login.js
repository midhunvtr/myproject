
let email=document.getElementById("email")

function validate(){
  let regexp=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
  if (regexp.test(email.value)){
    return true;
  }
  else{
    alert("email should be in proper format")
    return false;
  }
}