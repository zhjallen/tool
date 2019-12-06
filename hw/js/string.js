// let password = "CJFRR8pYzTjcMy860OS96WRU9C9XjNW178n1FnFmpNcUvrS";

// let newPw = "";

// for (let i of password) {
//     if (i >= "a" && i <= "z") {
//         newPw += lowCase(i)
//     }
//     if (i >= "A" && i <= "Z") {
//         newPw += bigif(i)
//     }
//     if (i >= "0" && i <= "9") {
//         newPw += i
//     }


// }
// function lowCase(str) {

//     if ('abc'.includes(str)) {
//         return 2
//     }
//     if ('def'.includes(str)) {
//         return 3
//     }

//     if ('ghi'.includes(str)) {
//         return 4
//     }

//     if ('jkl'.includes(str))
//         return 5
//     if ('mno'.includes(str))
//         return 6
//     if ('pqrs'.includes(str))
//         return 7
//     if ('tuv'.includes(str))
//         return 8
//     if ('wxyz'.includes(str))
//         return 9


// }
// function bigif(str) {
//     if (str !== "Z") {
//         return String.fromCharCode(String(str).toLocaleLowerCase().charCodeAt(0) + 1)
//     } else {
//         return "a"
//     }
// }


// let str = "dlladdd2323fakjfoaufa";

// let arr = str.split("");
// let result = arr.reduce((val, item) => {
//     if (val[item]) {
//         val[item]++
//     } else {
//         val[item] = 1
//     }
//     return val
// }, {})
// let newArr = Object.keys(result).sort((a, b) => result[a] - result[b])
// let min = result[newArr[0]];
// Object.keys(result).map(key => {
//     console.log(key, result[key], min)
//     if (result[key] == min) {
//         delete result[key]
//     }
// })
// let newStr = ""
// Object.keys(result).map(key => newStr += key)
// console.log(newStr)

let str = "f,dddd"
let arr = str.split(",");
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
    for (let j = i + 1; j < arr.length; j++) {
        let temp = null;
        if (String(arr[i]).charCodeAt(0) > String(arr[j]).charCodeAt(0)) {
            temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp
        }
    }
}
console.log(arr)
