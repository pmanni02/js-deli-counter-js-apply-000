
//takeANumber(katzDeliLine, "Ada"); //"Welcome, Ada. You are number 1 in line."
function takeANumber(katzDeliLine, newCustomer){
  katzDeliLine.push(newCustomer);
  return(`Welcome, ${newCustomer}. You are number ${katzDeliLine.length} in line.`)
}

//nowServing(katzDeliLine); // "Currently serving Ada."
function nowServing(katzDeliLine){
  var firstCustomer = katzDeliLine[0]
  if(katzDeliLine.length > 0){
    katzDeliLine.shift();
  }else{
    return "There is nobody waiting to be served!";
  }
  return(`Currently serving ${firstCustomer}.`)
  
  // if(katzDeliLine.length === 0){
  //   return "There is nobody waiting to be served!";
  // }else{
  //   katzDeliLine.shift()
  // }
  // return(`Currently serving ${firstCustomer}.`)
}

//currentLine(katzDeliLine); // "The line is currently: 1. Kent, 2. Matz"
function currentLine(katzDeliLine){
  var list = '';
  if(katzDeliLine.length === 0){
    return "The line is currently empty."
  }else{
    for(let i=0; i<katzDeliLine.length; i++){
      list += `${i+1}. ${katzDeliLine[i]}${i===katzDeliLine.length-1?'':', '}`
    }
    return(`The line is currently: ${list}`);
    //return(`The line is currently: `)
  }
}
