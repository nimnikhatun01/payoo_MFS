
//  search : form submite reloding the page
// step - 1 even hendlera
document.getElementById('botton-login').addEventListener('click' , function(event){
    // step - 2 :prevent default behevior ( prevent reloding browser)
    // vejal to bagenner
    event.preventDefault();     
    console.log('login button cliced')

    // step -3 get the phone number

    const phoneNumber = document.getElementById('phone-number')
    console.log(phoneNumber)
})
