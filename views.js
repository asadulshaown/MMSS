


const [div_1,div_2,div_3] = document.querySelectorAll('div') // distructing all div tag

let [massName,mounthName,address] = div_1.querySelectorAll('h2')// distructing h2 tag from div_1
const massNameValue = localStorage.getItem('massNameValue')// get mass name 
massName.innerHTML = `Mass Name: ${massNameValue}`// set mass name in views.html

const mounthNameValue = localStorage.getItem('mounthNameValue')//get mounth name 
mounthName.innerHTML = `Mounth Name: ${mounthNameValue}`//set mounth in views.html

const addAddressValue = localStorage.getItem('addAddressValue')//get address 
address.innerHTML = `Address: ${addAddressValue}`// set address in views.html


let [managerName,mealCharge] = div_2.querySelectorAll('h2')//distructing h2 tag from div_2
const managerNameValue = localStorage.getItem('managerNameValue')//get manager name
managerName.innerHTML = `Manager Name: ${managerNameValue}`//set manager name in views.html


 
const boderTotalCost = localStorage.getItem('boderTotalCost')//get data from script.js 
const bmValue = localStorage.getItem('bmValue')
const bnValue = localStorage.getItem('bnValue')
const boderMealCost = localStorage.getItem('boderMealCost')
const tbody = document.querySelector('tbody')//select table body

const tr = document.createElement('tr')//create tr tag 
tbody.appendChild(tr) //append tr tag inside tbody tag
const td1 = document.createElement('td')//create td tag
td1.textContent = bnValue //add value in td tag

const td2 = document.createElement('td')
td2.textContent = bmValue //add value in td tag

const td3 = document.createElement('td')
td3.textContent = boderMealCost



tr.appendChild(td1) //append td tag inside tr tag 
tr.appendChild(td2) //append td tag inside tr tag
tr.appendChild(td3) //append td tag inside tr tag




