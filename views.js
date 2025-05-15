


const [div_1,div_2,div_3] = document.querySelectorAll('div'); // distructing all div tag

let [massName,mounthName,address] = div_1.querySelectorAll('h2');// distructing h2 tag from div_1
const massNameValue = localStorage.getItem('massNameValue');// get mass name 
massName.innerHTML = `Mass Name: ${massNameValue}`;// set mass name in views.html

const mounthNameValue = localStorage.getItem('mounthNameValue');//get mounth name 
mounthName.innerHTML = `Mounth Name: ${mounthNameValue}`;//set mounth in views.html

const addAddressValue = localStorage.getItem('addAddressValue');//get address 
address.innerHTML = `Address: ${addAddressValue}`;// set address in views.html


let [managerName,mealCharge] = div_2.querySelectorAll('h2');//distructing h2 tag from div_2
const managerNameValue = localStorage.getItem('managerNameValue');//get manager name
managerName.innerHTML = `Manager Name: ${managerNameValue}`;//set manager name in views.html


let h3 = div_2.querySelector('h3');
const mc = localStorage.getItem('mc');
h3.innerHTML = `${mc}`;
const mealChargeValue = parseFloat(h3.textContent);


let [totaMounthltCost,totalMeal] = div_3.querySelectorAll('h2');//distructing h2 tag from div_3
const tmcValue = localStorage.getItem('tmcValue');
totaMounthltCost.innerHTML = `Total Mountly Cost: ${tmcValue}`;

const tmValue = localStorage.getItem('tmValue');
totalMeal.innerHTML = `Total Meal: ${tmValue}`;


// all value store in array
let all = [];
 
const bnValue = localStorage.getItem('bnValue'); // get value from script.js file
all.push(bnValue);

const bmValue = parseInt(localStorage.getItem('bmValue'));
all.push(bmValue);

const boderMealCost = Math.ceil(mealChargeValue*bmValue);
all.push(boderMealCost);

const sbValue = parseFloat(localStorage.getItem('sbVlaue')) || 0;
all.push(sbValue);

const wbValue = parseInt(localStorage.getItem('wbValue')) || 0;
all.push(wbValue);

const dbValue = parseInt(localStorage.getItem('dbValue')) || 0;
all.push(dbValue);

const bacValue  = parseInt(localStorage.getItem('bacValue')) || 0;

let boderTotalCost;
if (bacValue){
  boderTotalCost = boderMealCost + sbValue + wbValue + dbValue + bacValue;
}
else{
  boderTotalCost = boderMealCost + sbValue + wbValue + dbValue;
}
all.push(boderTotalCost);// push boderTotalCost in all array

const rmValue = parseInt(localStorage.getItem('rmValue'));
all.push(rmValue);

// check deu or returnMoney
let deu = 0;
let returnMoney = 0;
if (boderTotalCost > rmValue) {
  deu = boderTotalCost - rmValue;
} 
else if (boderTotalCost < rmValue) {
  returnMoney = rmValue - boderTotalCost;
}
all.push(deu);
all.push(returnMoney);
all.push(bacValue);

//insert data in table 
for (let i = 0; i < all.length; i++) {
  let tbody = document.querySelector('tbody');
  let td = document.createElement('td');
  td.innerHTML = all[i]
  tbody.appendChild(td);
}

// print the views page
const homeBtn = document.getElementById('homeBtn');
const printBtn = document.getElementById('printBtn');
const headingBtn = document.querySelector('h1')

printBtn.addEventListener('click',(e)=>{
  homeBtn.style.display = 'none';
  printBtn.style.display = 'none';
  headingBtn.style.display = 'none';
  address.style.display = 'none';

  window.print();

  homeBtn.style.display = 'block';
  printBtn.style.display = 'block';
  headingBtn.style.display = 'block';
  address.style.display = 'block';
})// print the views page 

