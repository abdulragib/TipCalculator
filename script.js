/* 
🌟 APP: Tip Calculator

These are the 3 functions you must use 👇
=========================================
calculateBill()
increasePeople()
decreasePeople()

These functions are hard coded in the HTML. So, you can't change their names.

These are all the DIV ID's you're gonna need access to 👇
========================================================
#1 ID 👉 'billTotalInput' = User input for bill total
#2 ID 👉 'tipInput' = User input for tip
#3 ID 👉 'numberOfPeople' = Current number of people you're splitting the bill between
#4 ID 👉 'perPersonTotal' = Total dollar value owed per person
*/

// Get global access to all inputs / divs here (you'll need them later 😘)
// bill input, tip input, number of people div, and per person total div

const billTotal=document.getElementById('billTotalInput')
const tipInput=document.getElementById('tipInput')
const numberOfPerson=document.getElementById('numberOfPeople')
const perPersonTotal=document.getElementById('perPersonTotal')


// Get number of people from number of people div


// ** Calculate the total bill per person **
const calculateBill = () => {
  // get bill from user input & convert it into a number
  let amount=Number(billTotal.value)
  

  // get the tip from user & convert it into a percentage (divide by 100)
  let tip=Number(tipInput.value)
  let tipPercentage=tip / 100
  

  // get the total tip amount
  let tipAmount=amount * tipPercentage

  // calculate the total (tip amount + bill)
  let totalAmount=amount + tipAmount
  

  // calculate the per person total (total divided by number of people)
  let persons=Number(numberOfPerson.innerText)
  let totalPerAmount=totalAmount / persons
  //limit to 2 floating point in decimal
  let fixedDecimalAmount=totalPerAmount.toFixed(2)

  //put comma in decimal
  let CommaInDecimal=totalPerAmount.toLocaleString('en-US')

  // update the perPersonTotal on DOM & show it to user
   perPersonTotal.innerText=`$${fixedDecimalAmount}`
}

// ** Splits the bill between more people **
const increasePeople = () => {
  // increment the amount of people
   let persons=numberOfPerson.innerText 
   let increment = Number(persons)
   increment++;
  

  // update the DOM with the new number of people
    numberOfPerson.innerText=increment

  // calculate the bill based on the new number of people
   calculateBill()
}

// ** Splits the bill between fewer people **
const decreasePeople = () => {
  // guard clause
  // if amount is 1 or less simply return
  // (a.k.a you can't decrease the number of people to 0 or negative!)
  if(numberOfPerson.innerText == '1' || numberOfPerson.innerText < '1')
  {
    throw 'you cannot have less than 1 person'
    return 
  }

  
  // decrement the amount of people
    let persons=numberOfPerson.innerText -= 1

  // update the DOM with the new number of people
     numberOfPerson.innerText=persons

  // calculate the bill based on the new number of people
  calculateBill()

}