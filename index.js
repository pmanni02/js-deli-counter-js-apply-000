//takeANumber(katzDeliLine, "Ada"); //"Welcome, Ada. You are number 1 in line."
function takeANumber(katzDeliLine, newCustomer){
  katzDeliLine.push(newCustomer);
  return(`Welcome, ${newCustomer}. You are number ${katzDeliLine.length} in line.`)
    // for(let i=0; i<katzDeliLine.length; i++){
    //   if(katzDeliLine[i] === newCustomer){
    // 
    //   }
    // }
}
