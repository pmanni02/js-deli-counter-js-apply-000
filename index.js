
//takeANumber(katzDeliLine, "Ada"); //"Welcome, Ada. You are number 1 in line."
function takeANumber(katzDeliLine, newCustomer){
  katzDeliLine.push(newCustomer);
  return(`Welcome, ${newCustomer}. You are number ${katzDeliLine.length} in line.`)
}

//nowServing(katzDeliLine); // "Currently serving Ada."
function nowServing(katzDeliLine){
  var firstCustomer = katzDeliLine[0]
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  }else{
    katzDeliLine.shift()
  }
  return(`Currently serving ${firstCustomer}.`)
}
