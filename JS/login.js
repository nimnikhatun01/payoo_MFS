
//  search : form submite reloding the page
// step - 1 even hendlera
document.getElementById('botton-login').addEventListener('click' , function(event){
    // step - 2 :prevent default behevior ( prevent reloding browser)
    // vejal to bagenner
    event.preventDefault();     
    console.log('login button cliced')

    // step -3 get the phone number

    const phoneNumber = document.getElementById('phone-number').value ;
    const pinNumber =document.getElementById('pin-number') .value ;
//   bad way to validate

     if(phoneNumber === '5' && pinNumber === '1234' ){
        console.log('you are login')
        window.location.href = '/home.html';
     } else{
        alert('wrong number and worng pin')
     }

    
})
