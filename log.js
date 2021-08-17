document.getElementById('button').addEventListener('click',function(){
   
    const emailId=document.getElementById('email-id');
    const emailText=emailId.value; 
  
    const passwordId=document.getElementById('password-id');
    const passwordText=passwordId.value;
    if(emailText=='paypal@gmail.com' && passwordText=='money'){
        window.location.href='bank.html';

    }
    else{
        window.alert('pease try  agin your account is not match')
    }
})