

//  * 1. add event listener to the add money buttone (form submit )
//  * make sure to preventDefault so that page doesn't reloads
//  * 2. get the money user wants to add
//  * also , get the oin number provided
//  * 3. verify the pin number .for, worng pin number ==> failed to add for 
//  * right pin number ,allow to ad the number to th account balance 
//  * 
//  * 4.get the current balance 
//  *  5. add money ti be added with the current balance 
//  * 
//  *6. display /update the balance in the DOM/UI  
                 
document.getElementById('btn-add-money')
      .addEventListener('click', function(event){
        event.preventDefault();
        console.log('add the event handler');

        // get money and the pin number 

        const addMoney =document.getElementById('input-add-money').value;
        const addMoneyNumber =parseFloat(addMoney)
        const pinNumber = document.getElementById('input-pin-number').value;
        // console.log( addMoney ,pinNumber)

        if(pinNumber === '1234'){
            // add manoy to the acount
            const balance =document.getElementById('account-balance') 
            .innerText;
            const balanceNumber = parseFloat(balance)

            // new balance
            const newBalance = addMoneyNumber + balanceNumber

            // update the DOM with update balance
            document.getElementById('account-balance').innerText = newBalance;



        }else{
            alert('failed the add money , please try agane')
        }

})




 