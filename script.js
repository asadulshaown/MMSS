


const form = document.querySelector("form") //form tag find
const [name,monuthName,address,managerName] = form.querySelectorAll("input")//Destructuring 

const heading_1 = document.getElementsByClassName('heading_1')// name h2 tag find
const addName = heading_1[0]

const heading_2 = document.getElementsByClassName('heading_2')//address h2 tag find
const addMounthName=heading_2[0]

const heading_3 = document.getElementsByClassName('heading_3')// name h2 tag find
const addAddress = heading_3[0]

//first form submit data
form.addEventListener('submit',(e)=>{
  e.preventDefault()

  let massNameValue = name.value
  addName.innerHTML = `Mass Name: ${massNameValue}`//add mass name 
  localStorage.setItem('massNameValue', massNameValue)// passing data to views.js file

  let mounthNameValue = monuthName.value
  addMounthName.innerHTML = `Monuth Name: ${mounthNameValue}`//add mounth name
  localStorage.setItem('mounthNameValue', mounthNameValue)// passing data to views.js file

  let addAddressValue = address.value
  addAddress.innerHTML = `Address: ${addAddressValue}`
  localStorage.setItem('addAddressValue', addAddressValue)// passing data to views.js file

  let managerNameValue = managerName.value
  localStorage.setItem('managerNameValue', managerNameValue)// passing data to views.js file
  form.reset()

  // window.location.href = 'views.html'
})//add eventLiisterner in submit button




// first form end here and second form start here
const findForm = document.querySelectorAll('form')
const form_2 = findForm[1]

const [tmcInput,tmInput,acInput,rcInput,bnInput,sbInput,wbInput,dbInput,bmInput,rmInput,bacInput] = form_2.querySelectorAll('input') //Destructuring 



//second form submition
form_2.addEventListener('submit',(e)=>{
  e.preventDefault()
  const tmcValue  = Math.abs(parseFloat(tmcInput.value)) // total mountly cost
  const tmValue = Math.abs(parseFloat(tmInput.value)) // total meal 
  const mc = parseFloat((tmcValue / tmValue).toFixed(2)) // calculate meal charge TMC/TM
  calculateData.tmcValue = tmcValue
  calculateData.tmValue = tmValue
  calculateData.mc = mc 
  localStorage.setItem('mc',mc) //passing data to views.js file

  const bmValue = Math.abs(parseInt(bmInput.value))// boder meal
  localStorage.setItem('bmValue',bmValue) 
  const boderMealCost = Math.ceil(mc*bmValue)// calculate boder total meal cost
  localStorage.setItem('boderMealCost',boderMealCost) //passing data to views.js file 
  calculateData.bmValue = bmValue
  calculateData.totalMealCost = boderMealCost

  const sbValue = Math.abs(parseInt(sbInput.value))// shaf bill
  const wbValue = Math.abs(parseFloat(wbInput.value).toFixed(2))// wifi bill
  const dbValue = Math.abs(parseFloat(dbInput.value).toFixed(2))// dust bill
  calculateData.sbValue = sbValue
  calculateData.wbValue = wbValue
  calculateData.dbValue = dbValue


  const bacValue = Math.abs(parseInt(bacInput.value))// boder additional cost
  calculateData.bacValue = bacValue
  let boderTotalCost 
  calculateData.boderTotalCost = boderTotalCost //push in object
  if(bacValue){
     boderTotalCost = Math.ceil(sbValue+wbValue+dbValue+totalMealCost+bacValue)
    form_2.reset()
  }
  else{
     boderTotalCost = Math.ceil(sbValue+wbValue+dbValue+totalMealCost)  
    form_2.reset()
  }// calculate boder total cost 

  localStorage.setItem('boderTotalCost', boderTotalCost)// passing data to views.js file
  // window.location.href = 'views.html'
  const bnValue = bnInput.value
  calculateData.bnValue = bnValue
  localStorage.setItem('bnValue',bnValue)
  console.log(bnValue)
  
  form_2.reset()
  
})

export let calculateData={
  
}

console.log(calculateData)


