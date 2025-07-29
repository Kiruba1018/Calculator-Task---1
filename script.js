const input_1 = document.getElementById('value-1')
const input_2 = document.getElementById('value-2')


function Add(){
  if (input_1.value === "") {
  return document.getElementById("output-field").textContent = "Please Enter Number 1";
} 
else if (input_2.value === "") {
  return document.getElementById("output-field").textContent = "Please Enter Number 2";
}
  const a = Number(input_1.value) + Number(input_2.value);
  return document.getElementById("output-field").textContent = a;
}



function Sub(){
    if (input_1.value === "") {
  return document.getElementById("output-field").textContent = "Please Enter Number 1";
} 
else if (input_2.value === "") {
  return document.getElementById("output-field").textContent = "Please Enter Number 2";
}
  const b = Number(input_1.value) - Number(input_2.value);
  return document.getElementById("output-field").textContent = b;
}



function Mul(){
    if (input_1.value === "") {
  return document.getElementById("output-field").textContent = "Please Enter Number 1";
} 
else if (input_2.value === "") {
  return document.getElementById("output-field").textContent = "Please Enter Number 2";
}
  const c = Number(input_1.value) * Number(input_2.value);
  return document.getElementById("output-field").textContent = c;
}



function Div(){
    if (input_1.value === "") {
  return document.getElementById("output-field").textContent = "Please Enter Number 1";
} 
else if (input_2.value === "") {
  return document.getElementById("output-field").textContent = "Please Enter Number 2";
}
  if(Number(input_2.value) == 0){
    return document.getElementById("output-field").textContent = "Divide by zero is not Possible and give a number greater than 0";
  }
  else{
  const d = Number(input_1.value / input_2.value);
  return document.getElementById("output-field").textContent = d;
}
  
}



function Mod(){
    if (input_1.value === "") {
  return document.getElementById("output-field").textContent = "Please Enter Number 1";
} 
else if (input_2.value === "") {
  return document.getElementById("output-field").textContent = "Please Enter Number 2";
}
  if(Number(input_2.value) == 0){
    return document.getElementById("output-field").textContent = "Please Enter a Denominator greater than 0";
  }
  else{
  const e = Number(input_1.value % input_2.value);
  return document.getElementById("output-field").textContent = e;
}
}
