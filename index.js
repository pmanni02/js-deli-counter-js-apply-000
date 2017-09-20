
//takeANumber(katzDeliLine, "Ada"); //"Welcome, Ada. You are number 1 in line."
function takeANumber(katzDeliLine, newCustomer){
  katzDeliLine.push(newCustomer);
  return(`Welcome, ${newCustomer}. You are number ${katzDeliLine.length} in line.`)
}

//nowServing(katzDeliLine); // "Currently serving Ada."
function nowServing(katzDeliLine){
  var firstCustomer = katzDeliLine[0];
  if(katzDeliLine.length > 0){
    katzDeliLine.shift();
  }else{
    return "There is nobody waiting to be served!";
  }
  return(`Currently serving ${firstCustomer}.`);
}

//currentLine(katzDeliLine); // "The line is currently: 1. Kent, 2. Matz"
function currentLine(katzDeliLine){
  var list = ''; //List of people currently in line
  if(katzDeliLine.length > 0){ //if there are people in line
    for(let i=0; i<katzDeliLine.length; i++){
      //creation of numbered list of customers
      list += `${i+1}. ${katzDeliLine[i]}${i===katzDeliLine.length-1?'':', '}`
    }
  } else {
    //the length of the line is 0 = no customers
    return "The line is currently empty."
  }
  //if there are customers return list of customers
  return(`The line is currently: ${list}`);
}
