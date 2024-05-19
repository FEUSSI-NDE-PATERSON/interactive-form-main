let button =document.querySelector('#button')
// button.addEventListener('click',addDetails)
// Getting the values of the input
let cardName = document.querySelector('#cardholdername')
let cardNumber = document.querySelector('#cardnumber')
let year = document.querySelector('#year')
let month = document.querySelector('#month')
let amount = document.querySelector('#amount-value')
// Getting the htmlelement Ids to display the input value 
let amountValue = document.querySelector('#amount')
let userName = document.querySelector('#Name')
let monthVaue = document.querySelector('#monthValue')
let yearValue = document.querySelector('#yearValue')
let CardnumberInput = document.querySelector('#CardnumberInput')


let f =
`
 <div class="flex flex-col items-center justify-center mt-[25px] sm:mt-[0px]">
  <img src="/images/icon-complete.svg" class="h-15 w-15">
  <p class="mt-5">Thank You!</p>
  <p class="mt-5">We've added your card details</p>
  <button  class="bg-[#21092f] mt-5 text-white px-5 py-3 rounded-full w-[100%] ">Continue</button>
 </div>

`
let valid = document.querySelector('#valid')

function addDetails(){
    // alert(userName.textContent)
   event.preventDefault()  
    if(cardName.value !=""){
    if(month.value!=""){
        if(year.value!=""){
            if(cardNumber.value!=""){
               if(amount.value!=""){
                userName.textContent = cardName.value
                monthVaue.textContent= month.value
                yearValue.textContent = year.value
                CardnumberInput.textContent = cardNumber.value
                amountValue.textContent = amount.value


                //seting all the inputvalue to null
                cardName.value = ''
                year.value =""
                cardNumber.value=""
                month.value = ''
                amount.value=""
                valid.innerHTML = f
               }
            }
        }
    }
    } 
}