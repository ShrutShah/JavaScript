let func = (val,ind) => {
    console.log("index: ",ind)
    console.log("value: ",val*val)
   
    
}

let arr = [1, 2, 3, 4]

arr.forEach(func)


/*array.forEach(function(currentValue, index, arr), thisValue)
Parameters
function()	Required.
A function to run for each array element.
currentValue	Required.
The value of the current element.
index	Optional.
The index of the current element.
arr	Optional.
The array of the current element.
*/
