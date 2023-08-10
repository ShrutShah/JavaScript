l = false
while(l != true ){
let age = prompt("Enter age")
age = Number.parseInt(age)

let check = (age) => {
  if (age >= 18) {
     return true
  }
  else{
    return false
  }
  
}

if (check(age)){
  alert("yes")
  l = true
}
else{
  alert("no")
}
}  
