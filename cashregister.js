function checkCashRegister(price, cash, cid) {
  let register = {
    status: '',
    change: []
  }
  let cidCopy = [...cid]
  let change = cash - price;
  let cidTotal = 0
  for (let i = 0; i < cid.length; i++){
    cidTotal += cidCopy[i][1];
  }
  cidTotal = cidTotal.toFixed(2);

  if (change > cidTotal) {
    register.status = "INSUFFICIENT_FUNDS" 
    return register
  }
  

  console.log(change)
  if (change == cidTotal) {
    register.status = "CLOSED"
    register.change = cid
    console.log(register)
    return register
  }

let changeCopy = change
while (changeCopy > 0) {
  if (changeCopy >= 100){
    changeCopy = changeCopy.toFixed(2)
    if(cid[8][1] <= changeCopy){
      changeCopy -= cid[8][1]
      register.change.push(cid[8])
    }
    else {
      change = changeCopy
      changeCopy %= 100
      cid[8][1] = change - changeCopy
      register.change.push(cid[8])
    }
  }
  if (changeCopy >= 20){
    changeCopy = changeCopy.toFixed(2)
    if(cid[7][1] <= changeCopy){
      changeCopy -= cid[7][1]
      register.change.push(cid[7])
    }
    else {
      change = changeCopy
      changeCopy %= 20
      cid[7][1] = change - changeCopy
      register.change.push(cid[7])
    }
  }
  if (changeCopy >= 10){
    changeCopy = changeCopy.toFixed(2)
    if(cid[6][1] <= changeCopy){
      changeCopy -= cid[6][1]
      register.change.push(cid[6])
    }
    else {
      change = changeCopy
      changeCopy %= 10
      cid[6][1] = change - changeCopy
      register.change.push(cid[6])
    }
  }
  if (changeCopy >= 5){
    changeCopy = changeCopy.toFixed(2)
    if(cid[5][1] <= changeCopy){
      changeCopy -= cid[5][1]
      register.change.push(cid[5])
    }
    else {
      change = changeCopy
      changeCopy %= 5
      cid[5][1] = change - changeCopy
      register.change.push(cid[5])
    }
  }
  if (changeCopy >= 1){
    changeCopy = changeCopy.toFixed(2)
    if(cid[4][1] <= changeCopy){
      changeCopy -= cid[4][1]
      register.change.push(cid[4])
    }
    else {
      change = changeCopy
      changeCopy %= 1
      cid[4][1] = change - changeCopy
      register.change.push(cid[4])
    }
  }
  if (changeCopy >= .25){
    changeCopy = changeCopy.toFixed(2)
    if(cid[3][1] <= changeCopy){
      changeCopy -= cid[3][1]
      register.change.push(cid[3])
    }
    else {
      change = changeCopy
      changeCopy %= .25
      cid[3][1] = change - changeCopy
      register.change.push(cid[3])
    }
  }
  if (changeCopy >= .10){
    changeCopy = changeCopy.toFixed(2)
    if(cid[2][1] <= changeCopy){
      changeCopy -= cid[2][1]
      register.change.push(cid[2])
    }
    else {
      change = changeCopy
      changeCopy %= .10
      cid[2][1] = change - changeCopy
      register.change.push(cid[2])
    }
  }
  if (changeCopy >= .05){
    changeCopy = changeCopy.toFixed(2)
    if(cid[1][1] <= changeCopy){
      changeCopy -= cid[1][1]
      register.change.push(cid[1])
    }
    else {
      change = changeCopy
      changeCopy %= .05
      cid[1][1] = change - changeCopy
      register.change.push(cid[1])
    }
  }
  if (changeCopy >= .01){
    changeCopy = changeCopy.toFixed(2)
    if(cid[0][1] <= changeCopy){
      changeCopy -= cid[0][1]
      register.change.push(cid[0])
    }
    else {
      change = changeCopy
      changeCopy %= .01
      cid[0][1] = change - changeCopy
      register.change.push(cid[0])
    }
  }
  if (changeCopy > 0){
    register.status = "INSUFFICIENT_FUNDS"
    register.change = []
    return register
  }
}
if (changeCopy === 0){
  register.status = "OPEN"
  console.log(register)
  return register;
}
  
}


 checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
