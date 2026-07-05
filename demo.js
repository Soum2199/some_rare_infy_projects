//Some JavaScript Practice

let arr = [10,20,30,40,50]
console.table(arr)
console.log("Total no of elements present in this array: "+arr.length)
console.log(arr)
console.log(typeof arr)

console.log("------------------------------------------")
console.log({} === [])
console.log([] === [])
console.log('2' === 2)
console.log('2' == 2)
console.log("------------------------------------------")

let s = "Sweety"
console.log(s.length)
console.log(s[1])
console.log(s.charAt(2))
console.log(typeof s)
console.log("------------------------------------------")

// let arr = 
// processArray([1, 2, 3, 4, 5, 6]) should return [10, 50, 4, 3, 2, 1]
// processArray([9, 6, 3, 12]) should return [10, 3, 6, 9]

let a1 = [1, 2, 3, 4, 5, 6] // should return [10, 50, 4, 3, 2, 1]
// let a2 = [9, 6, 3, 12]  //should return [10, 3, 6, 9]


a1.pop()
console.log(a1)
a1.push(10)
console.log(a1)
for(let i=0; i<a1.length; i++){
    if(a1[i] === 5){
        // a1.append(50)
        a1[i] = 50;
    }
}
console.log(a1)
a1.reverse()
console.log(a1)