// add manoy to the acount

// 1. add event handler
 // prevent page reloded after form submit
//  2.get money to be added to the acounted balanace

// step -1 add an event hendler to the add money button inside the form

document.getElementById('btn-add-money')
       .addEventListener('click', function(event){
        // prevent page reloded after form submit
        event.preventDefault();
        // step-2 get money to be added to the acounted balanace
        const inputAddMoney = document.getElementById('input-add-money').value
         console.log(inputAddMoney)

        //  get the pin number provied
        const pinNumnberInput = document.getElementById('pin-Numnber-Input').value;
        console.log(pinNumnberInput)

})