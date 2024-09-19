// add manoy to the acount

// 1. add event handler
 // prevent page reloded after form submit
//  2.get money to be added to the acounted balanace get the in number
// 3. verify the pin number


// step -1 add an event hendler to the add money button inside the form

document.getElementById('btn-add-money')
       .addEventListener('click', function(event){
        // prevent page reloded after form submit
        event.preventDefault();
        // step-2 get money to be added to the acounted balanace
        const addMoneyInput = document.getElementById('input-add-money').value
         console.log(addMoneyInput))
       

        //  get the pin number provied
        const pinNumnberInput = document.getElementById('pin-Numnber-Input').value;
        console.log(pinNumnberInput)
       
        // step 3. verify the pin number
        // this is not right way it's a wrong way
        if(pinNumnberInput === '1234'){
            console.log('adding manoy to account')
             
            // step-4 get the current money
            const balanace =document.getElementById('acount-balance') .innerText
            console.log(balanace)
            // step-5 add addmoneyinput with balance
        }


    })
