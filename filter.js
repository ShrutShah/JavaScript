console.log("Welcome to Programiz!");

let a = prompt("enter no")

a = Number.parseInt(a)

arr = []

arr.push(a)

console.log(arr)


let arr1 =  [1,21,10, 20, 21]

console.log(arr1.filter((i) => { if (i%10 == 0) {
    return i }
}))
