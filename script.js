


const form = document.querySelector("form"); //form tag find
const [name,monuthName,address,managerName] = form.querySelectorAll("input");//Destructuring 

const heading_1 = document.getElementsByClassName('heading_1');// name h2 tag find
const addName = heading_1[0];

const heading_2 = document.getElementsByClassName('heading_2');//address h2 tag find
const addMounthName=heading_2[0];

const heading_3 = document.getElementsByClassName('heading_3');// name h2 tag find
const addAddress = heading_3[0];

// first  form submition
form.addEventListener('submit',(e)=>{
  e.preventDefault()

  let massNameValue = name.value;
  addName.innerHTML = `Mass Name: ${massNameValue}`;//add mass name 
  localStorage.setItem('massNameValue', massNameValue);// passing data to views.js file

  let mounthNameValue = monuthName.value;
  addMounthName.innerHTML = `Monuth Name: ${mounthNameValue}`;//add mounth name
  localStorage.setItem('mounthNameValue', mounthNameValue);// passing data to views.js file

  let addAddressValue = address.value;
  addAddress.innerHTML = `Address: ${addAddressValue}`;
  localStorage.setItem('addAddressValue', addAddressValue);// passing data to views.js file

  let managerNameValue = managerName.value;
  localStorage.setItem('managerNameValue', managerNameValue);// passing data to views.js file
  form.reset();

  // window.location.href = 'views.html'
})//add eventLiisterner in submit button

// first form end here and second form start here
const findForm = document.querySelectorAll('form');
const form_2 = findForm[1];

const [tmcInput,tmInput,acInput,rcInput] = form_2.querySelectorAll('input'); //Destructuring 



//second form submition
form_2.addEventListener('submit',(e)=>{
  e.preventDefault();
  const tmcValue  = Math.abs(parseInt(tmcInput.value));// total mountly cost
  localStorage.setItem('tmcValue',tmcValue);

  const tmValue = Math.abs(parseInt(tmInput.value)); // total meal 
  localStorage.setItem('tmValue',tmValue);
  const mc = parseFloat((tmcValue / tmValue).toFixed(4)); // calculate meal charge TMC/TM
  localStorage.setItem('mc',mc);//passing data to views.js file 
  console.log(mc);
  window.location.href = 'views.html';
  form_2.reset();
})

// third form submition
const form_3 = findForm[2];
const[bnInput,bmInput,mealCharge,sbInput,wbInput,dbInput,rmInput,bacInput] = form_3.querySelectorAll('input'); //Destructuring
 

form_3.addEventListener('submit',(e)=>{
  e.preventDefault();

  const bnValue = bnInput.value //boder name 
  localStorage.setItem('bnValue',bnValue);
 
  const bmValue = parseInt(bmInput.value);// boder meal
  localStorage.setItem('bmValue',bmValue); //passing data to views.js file


  const mc = mealCharge.value;
  const boderMealCost = Math.ceil(mc*bmValue);// calculate boder total meal cost
  localStorage.setItem('boderMealCost',boderMealCost); //passing data to views.js file

  const sbValue = parseInt(sbInput.value);// shaf bill
  localStorage.setItem('sbVlaue',sbValue);

  const wbValue = Math.abs(parseFloat(wbInput.value).toFixed(2));// wifi bill
  localStorage.setItem('wbValue',wbValue);

  const dbValue = Math.abs(parseFloat(dbInput.value).toFixed(2));// dust bill
  localStorage.setItem('dbValue',dbValue);
 
  const bacValue = Math.abs(parseInt(bacInput.value));// boder additional cost
  localStorage.setItem('bacValue',bacValue);
 
  const rmValue = parseInt(rmInput.value); // recive money 
  localStorage.setItem('rmValue',rmValue);
  
  window.location.href = 'views.html';// show the value in views.html page
  form_3.reset();
  
})




