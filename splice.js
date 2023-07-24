let ex1 = [1,8,2,3,6,9,4]
//ex1.reverse()

let deleted_values = ex1.splice(2,3,101,102)

//2: start at index 2.
//3: del 3 elements from index 2.
//add element- 1 and 2 at index 2.

console.log(deleted_values)

console.log(ex1)
