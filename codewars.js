// function selectQuotients(arr, m, dirStr) {

//     for(let i=0;i<arr.length;i++){
//         let temp=0
//         for(let j=0;j<arr.length;j++){
//             if(arr[i]>arr[j]){
//                 temp=arr[i]
//                 arr[i]=arr[j]
//                 arr[j]=temp
//             }
//         }
//     }
//     console.log(arr)
//   }

// const arr = [2, 4, 27, 16, 9, 15, 25, 6, 12, 83, 24, 49, 7, 5, 94, 12, 6];
// selectQuotients(arr, 6, "Odd")



// const person={
//     name:'XYZ',
// }
// function changeName(x){
//     x=new Object()
//     x.name='abc'
// }
// changeName(person)
// console.log(person.name)

// String.prototype.sixBitNumber = function () {
//     if (/[a-f]/i.test(this.valueOf())==false&&/\W/.test(this.valueOf())==false&&parseInt(this.valueOf())>=0&&parseInt(this.valueOf())<=63){
//         return true
//     }else{
//         return false
//     }
// }

// console.log("00".sixBitNumber())




// // String.prototype.sixBitNumber = function () {
// //     return /\W/i.test(this.valueOf())
// // }
// // console.log("-5".sixBitNumber())


// function zipWith(fn,a0,a1) {
//     if(a0.length>a1.length){
//         let x=a0.length-a1.length
//         while(x>0){
//             a0.pop()
//             x--
//         }
//     }
//     if(a0.length<a1.length){
//         let y=a1.length-a0.length
//         while(y>0){
//             a1.pop()
//             y--
//         }
//     }
//     const results=[]
//     if(a0.length==a1.length){
//         for(let i=0;i<a0.length;i++){
//             results.push(fn(a0[i],a1[i]))
//         }
//     }
//     return fn(a0,a1);
//   }

// console.log(zipWith(function(a,b) { return a+b; }, [0,1,2,3,4  ], [6,5,4,3,2,1]))


// String.prototype.isLetter = function() {
//     return /^[a-z]$/i.test(this);
//   }

// console.log("x".isLetter())

// String.prototype.ipv4Address = function () {
//     return /^(2[0-4])$/.test(this)
// }
// console.log("249".ipv4Address())

// function collatz(n) {
//     let z = []
//     while (true) {
//         if (n % 2 == 0 && n != 1) {
//             z.push(n)
//             n = n / 2;
//         }
//         if (n % 2 == 1 && n != 1) {
//             z.push(n)
//             n = 3 * n + 1
//         }
//         if (n == 1) {
//             z.push(n)
//             break;
//         }
//     }
//     return z.join('->')
// }
// console.log(collatz(1730))



// function triangleArea(triangle) {
//     x = new Point(x, y)
//     s = ((triangle.a.x + triangle.b.x + triangle.c.x) / 2, (triangle.a.y + triangle.b.y + triangle.c.y) / 2)

//     return (Math.hypot(triangle.s.x * (triangle.s.x - triangle.a.x) * (triangle.s.x - triangle.b.x) * (triangle.s.x - triangle.c.x),
//         triangle.s.y * (triangle.s.y - triangle.a.y) * (triangle.s.y - triangle.b.y) * (triangle.s.y - triangle.c.y)))
// }
// triangleArea(new Triangle(new Point(15, -10), new Point(40, 20), new Point(20, 50))).toFixed(6)

// function firstDup (s) {
//     let middle=Math.round(s.length/2)
//     let results=''
//     let count=0
//     for(let i=middle-1;i>=0;i--){
//         for(let j=middle;j<s.length;j++){
//             if(s[i]==s[j]){
//                 results=s[i]
//                 count++
//             }
//         }
//     }
//     if(count==0){
//         return undefined
//     }
//     return results
// }

// console.log(firstDup('123123'))

// function computeDepth (x){
//     let count=0
//     let i=1
//     const results=[]
//     while(true){
//         let number =0
//         let string_number=''
//         number=x*i
//         string_number+=number
//         for(let j=0;j<string_number.length;j++){
//             if(results.indexOf(string_number[j])==-1){
//                 results.push(string_number[j])
//             }
//         }
//         if(results.length==10){
//             break
//         }
//         i++
//     }
//     return i
// }

// console.log(computeDepth(42))

// function Xbonacci(signature,n){
//     const z=signature.length
//     while(signature.length<n){
//         let sum=0
//         let check=false
//         for(let i=signature.length-z;i<signature.length;i++){
//             sum+=signature[i]
//             check=true
//         }
//         if(check==true){
//             signature.push(sum)    
//         }
//     }
//     if(signature.length>n){
//         let max=signature.length-n
//         while(max>0){
//             signature.pop()
//             max--
//         }
//     }
//     return signature
// }

// console.log(Xbonacci([20, 8, 17, 2, 6, 17, 11, 14, 18, 5, 6],10))

// function updateInventory(curStock, newStock) {
//     curStock = curStock.concat(newStock)
//     for (let i = 0; i < curStock.length; i++) {
//         for (let j = i + 1; j < curStock.length; j++) {
//             if (curStock[i][1] == curStock[j][1]) {
//                 curStock[i][0] += curStock[j][0]
//             }
//         }
//     }

//     for (let i = 0; i < curStock.length; i++) {
//         let temp = []
//         for (let j = 0; j < curStock.length; j++) {
//             if (curStock[i][1] < curStock[j][1]) {
//                 temp = curStock[i]
//                 curStock[i] = curStock[j]
//                 curStock[j] = temp
//             }

//             if (curStock[i][1] == curStock[j][1]&&curStock[i][0] > curStock[j][0]) {
//                 temp = curStock[i]
//                 curStock[i] = curStock[j]
//                 curStock[j] = temp
//             }
//         }
//     }
//     console.log(curStock)
//     for(let i = 0; i < curStock.length-1; i++){
//         if(curStock[i][0]>curStock[i+1][0]&&curStock[i][1]==curStock[i+1][1]|| curStock[i][0]==curStock[i+1][0]&&curStock[i][1]==curStock[i+1][1]){
//             let a1 = curStock.slice(0, i+1);
//             let a2 = curStock.slice(i + 2, curStock.length);
//             curStock = a1.concat(a2);
//         }
//     }
//     return curStock;
// }
// console.log(updateInventory([[31,"Nokia"],[46,"Samsung"],[3,"Apple Watch Phone"],[27,"Apple"],[0,"Miniphone"],[59,"Sasushi Phone"]], [[90,"Miniphone"],[1,"LG"],[29,"HTC"],[34,"Techphone"],[25,"Nokia"],[79,"Sony"],[29,"Samsung"]]))

// function selectQuotients(arr, m, dirStr) {
//     const uniqueSet = new Set(arr);
//     const Backtoarr = [...uniqueSet]
//     Backtoarr.sort((a, b) => {
//         if (a > b) return 1;
//         if (a < b) return -1;
//         return 0;
//     })
//     const list_item = []
//     for (let i = 0; i < Backtoarr.length; i++) {
//         for (let j = 0; j < Backtoarr.length; j++) {
//             if (Backtoarr[i] % Backtoarr[j] == 0 && Backtoarr[i] != Backtoarr[j]) {
//                 list_item.push([Math.round(Backtoarr[i] / Backtoarr[j]), [Backtoarr[i], Backtoarr[j]]])
//             }
//         }
//     }

//     for (let i = 0; i < list_item.length; i++) {
//         let temp = ''
//         for (let j = 0; j < list_item.length; j++) {
//             if (list_item[i][0] < list_item[j][0] || list_item[i][0] == list_item[j][0] && list_item[i][1][0] < list_item[j][1][0]) {
//                 temp = list_item[i]
//                 list_item[i] = list_item[j]
//                 list_item[j] = temp
//             }
//         }
//     }
//     const result = []
//     let even = /^even$/i;
//     let odd = /^odd$/i;
//     for (let i = 0; i < list_item.length; i++) {
//         if (list_item[i][0] >= m && odd.test(dirStr) == true && list_item[i][0] % 2 == 1) {
//             result.push(list_item[i])
//         }
//         if (list_item[i][0] >= m && even.test(dirStr) == true && list_item[i][0] % 2 == 0) {
//             result.push(list_item[i])
//         }
//         if (list_item[i][0] >= m a && dirStr == undefined) {
//             result.push(list_item[i])
//         }
//     }
//     console.log(dirStr)
//     return result
// }

// console.log(selectQuotients([2, 4, 27, 16, 9, 15, 25, 6, 12, 83, 24, 49, 7, 5, 94, 12, 6], 6))

// function lucasnum(n) {
//     if (n == 0) {
//         return 2;
//     }
//     if (n == 1) {
//         return 1;
//     }
//     return n >= 2 ? lucasnum(n - 1) + lucasnum(n - 2) : lucasnum(n + 2) - lucasnum(n + 1)

// }

// function lucasnum(n) {
//     return Math.round(Math.pow((1 + Math.sqrt(5)) / 2, n) + Math.pow((1 - Math.sqrt(5)) / 2, n))

// }


// console.log(lucasnum(5))

// let text = "I Love You";
// let sum = 0
// const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
// const lowercase = 'abcdefghijklmnopqrstuvwxyz'
// const digit = '0123456789'
// for (let i = 0; i < text.length; i++) {
//     if (uppercase.indexOf(text[i]) != -1) {
//         sum += (uppercase.indexOf(text[i]) + 1) * 2
//     }
//     if (lowercase.indexOf(text[i]) != -1) {
//         sum += lowercase.indexOf(text[i]) + 1
//     }
//     if (digit.indexOf(text[i]) != -1) {
//         sum += digit.indexOf(text[i])
//     }
// }
// console.log(sum)

// function chmodCalculator(perm) {
//     let str = ''
//     if (Object.keys(perm).length == 3) {

//         if (Object.keys(perm)[0] == 'user') {
//             let sum = 0
//             for (let j = 0; j < Object.values(perm)[0].length; j++) {
//                 if (Object.values(perm)[0][j] == 'r') {
//                     sum += 4
//                 }
//                 else if (Object.values(perm)[0][j] == 'w') {
//                     sum += 2
//                 }
//                 else if (Object.values(perm)[0][j] == 'x') {
//                     sum += 1
//                 }
//             }
//             str += sum
//         }
//         if (Object.keys(perm)[1] == 'group') {
//             let sum = 0
//             for (let j = 0; j < Object.values(perm)[1].length; j++) {
//                 if (Object.values(perm)[1][j] == 'r') {
//                     sum += 4
//                 }
//                 if (Object.values(perm)[1][j] == 'w') {
//                     sum += 2
//                 }
//                 if (Object.values(perm)[1][j] == 'x') {
//                     sum += 1
//                 }
//             }
//             str += sum
//         }
//         if (Object.keys(perm)[2] == 'other') {
//             let sum = 0
//             for (let j = 0; j < Object.values(perm)[2].length; j++) {
//                 if (Object.values(perm)[2][j] == 'r') {
//                     sum += 4
//                 }
//                 if (Object.values(perm)[2][j] == 'w') {
//                     sum += 2
//                 }
//                 if (Object.values(perm)[2][j] == 'x') {
//                     sum += 1
//                 }
//             }
//             str += sum
//         }
//     } else if (Object.keys(perm).length == 2) {
//         if (Object.keys(perm)[0] == 'user') {
//             let sum = 0
//             for (let j = 0; j < Object.values(perm)[0].length; j++) {
//                 if (Object.values(perm)[0][j] == 'r') {
//                     sum += 4
//                 }
//                 else if (Object.values(perm)[0][j] == 'w') {
//                     sum += 2
//                 }
//                 else if (Object.values(perm)[0][j] == 'x') {
//                     sum += 1
//                 }
//             }
//             str += sum
//             if (Object.keys(perm)[1] == 'group') {
//                 let sum = 0
//                 for (let j = 0; j < Object.values(perm)[1].length; j++) {
//                     if (Object.values(perm)[1][j] == 'r') {
//                         sum += 4
//                     }
//                     else if (Object.values(perm)[1][j] == 'w') {
//                         sum += 2
//                     }
//                     else if (Object.values(perm)[1][j] == 'x') {
//                         sum += 1
//                     }
//                 }
//                 str += sum + '0'
//             } else if (Object.keys(perm)[1] == 'other') {
//                 let sum = 0
//                 for (let j = 0; j < Object.values(perm)[1].length; j++) {
//                     if (Object.values(perm)[1][j] == 'r') {
//                         sum += 4
//                     }
//                     else if (Object.values(perm)[1][j] == 'w') {
//                         sum += 2
//                     }
//                     else if (Object.values(perm)[1][j] == 'x') {
//                         sum += 1
//                     }
//                 }
//                 str += '0' + sum
//             }
//         }
//         if (Object.keys(perm)[0] == 'group') {
//             let sum = 0
//             for (let j = 0; j < Object.values(perm)[0].length; j++) {
//                 if (Object.values(perm)[0][j] == 'r') {
//                     sum += 4
//                 }
//                 else if (Object.values(perm)[0][j] == 'w') {
//                     sum += 2
//                 }
//                 else if (Object.values(perm)[0][j] == 'x') {
//                     sum += 1
//                 }
//             }
//             str += '0' + sum
//             if (Object.keys(perm)[1] == 'other') {
//                 let sum = 0
//                 for (let j = 0; j < Object.values(perm)[1].length; j++) {
//                     if (Object.values(perm)[1][j] == 'r') {
//                         sum += 4
//                     }
//                     else if (Object.values(perm)[1][j] == 'w') {
//                         sum += 2
//                     }
//                     else if (Object.values(perm)[1][j] == 'x') {
//                         sum += 1
//                     }
//                 }
//                 str += sum
//             }
//         }

//     } else if (Object.keys(perm).length == 1) {
//         if (Object.keys(perm)[0] == 'user') {
//             let sum = 0
//             for (let j = 0; j < Object.values(perm)[0].length; j++) {
//                 if (Object.values(perm)[0][j] == 'r') {
//                     sum += 4
//                 }
//                 else if (Object.values(perm)[0][j] == 'w') {
//                     sum += 2
//                 }
//                 else if (Object.values(perm)[0][j] == 'x') {
//                     sum += 1
//                 }
//             }
//             str = sum + '00'
//         }
//         if (Object.keys(perm)[0] == 'group') {
//             let sum = 0
//             for (let j = 0; j < Object.values(perm)[0].length; j++) {
//                 if (Object.values(perm)[0][j] == 'r') {
//                     sum += 4
//                 }
//                 else if (Object.values(perm)[0][j] == 'w') {
//                     sum += 2
//                 }
//                 else if (Object.values(perm)[0][j] == 'x') {
//                     sum += 1
//                 }
//             }
//             str = '0' + sum + '0'
//         }
//         if (Object.keys(perm)[0] == 'other') {
//             let sum = 0
//             for (let j = 0; j < Object.values(perm)[0].length; j++) {
//                 if (Object.values(perm)[0][j] == 'r') {
//                     sum += 4
//                 }
//                 else if (Object.values(perm)[0][j] == 'w') {
//                     sum += 2
//                 }
//                 else if (Object.values(perm)[0][j] == 'x') {
//                     sum += 1
//                 }
//             }
//             str = '00' + sum
//         }
//     } 
//     if (Array.isArray(perm)==true||Object.keys(perm)==0) {
//         str += '000'
//     }
//     return str
// }

// console.log(chmodCalculator({}))


// function chmodCalculator(perm) {
//     let octal = p => !p ? 0 : 
//       4 * +(p[0] === 'r') + 
//       2 * +(p[1] === 'w') + 
//       1 * +(p[2] === 'x')

//     return '' + octal(perm.user) + octal(perm.group) + octal(perm.other); 
//   }
// var  data = [1, 2, 3, 4, 5]
// function rotate(array, n) {
//     const result=[]
//     for(let i=0;i<array.length;i++){
//         result.push(array[i])
//     }
//     let arr = []
//     if (n > 0) {
//         for (let i = 0; i < n; i++) {
//             arr.push(result.pop())
//             result.unshift(arr[i])
//         }
//         console.log(arr)
//         console.log(array)
//         return result
//     } else if (n < 0) {
//         for (let i = 0; i < Math.abs(n); i++) {
//             arr.push(result.shift())
//             result.push(arr[i])
//         }
//         console.log(arr)
//         console.log(array)
//         return result
//     } else {
//         console.log(arr)
//         console.log(array)
//         return result
//     }
// }

// console.log(rotate(data, -2))
// console.log(rotate(data, -3))

// function solution(str){
//     const results=[]
//     if(str.length%2==1){
//       str+='_'
//     }
//     let i=0;
//      while(i<str.length){
//        results.push(str.slice(i,i+2))
//        i+=2
//      }
//     console.log(results)
//     return results
//   }


// function bangContainString(s,history) { 
//     const arr=history.split('\n')
//     let str=''
//     for(let i=0;i<arr.length;i++){
//       if(arr[i].lastIndexOf(s)!=-1){
//         str=arr[i]
//       }
//     }console.log(str)

// }
// function bangContainString(s, history) {
//     const arr = history.split('\n')
//     let str = ''
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].lastIndexOf(s) != -1) {
//             str = arr[i]
//         }
//     }
//     let check = /[a-z]/i
//     for (let i = 0; i < str.length; i++) {
//         if (check.test(str[i])) {
//             return str.slice(i, str.length)
//         }
//     }
//     return `!${s}: event not found`
// }

// const history="   1  cd /pub\n  2  more beer\n  3  lost\n  4  ls\n  5  touch me\n  6  chmod 000 me\n  7  history\n  8  more me"  
// console.log(bangContainString("me", history))

// function solve(n, k) {
//     const str = (n + '').split('')
//     let results = ''
//     let dem = str.length - k
//     let arr_check = str.slice(0, str.length)
//     let check=0
//     while (results.length != (str.length - k)) {
//             let min = arr_check[0]
//             for (let i = 0; i < arr_check.length; i++) {
//                 if (min > arr_check[i] && (arr_check.slice(i, arr_check.length)).length >= dem) {
//                     min = arr_check[i]
//                 }
//             }
//             results += min
//             dem--
//             check++
//             while(arr_check[0]!=min){
//                 arr_check = str.slice(check, str.length)
//                 check++
//             }
//             arr_check = str.slice(check, str.length)
//     }
//     return results
// }
// console.log(solve(1284569, 1))


// function primeNumber(a) {
//     for (let i = 2; i <= Math.sqrt(a); i++) {
//         if (a % i == 0) {
//             return false
//         }
//     }
//     return a > 1
// }

// function notprimeNumber(a) {
//     for (let i = 2; i <= Math.sqrt(a); i++) {
//         if (a % i == 0) {
//             return true
//         }
//     }
//     return a == 1 ? true : false
// }
// function checkprimeNumber(x) {
//     if (notprimeNumber(x)) {
//         let str = x + ''
//         for (let i = 0; i < str.length; i++) {
//             if (primeNumber(parseInt(str[i]))) {
//                 return false
//             }
//         }
//         return true
//     }else{
//         return false
//     }

// }

// function solve(n) {
//     let results = 2
//     if (n == 0) { return 1 }
//     let count = 0
//     while (true) {
//         if (checkprimeNumber(results)) {
//             count++
//         }
//         if(count==n){
//             return results
//         }
//         results++
//     }
// };

// console.log(solve(500))


function isMadhavArray(arr) {
    if (arr.length <= 1) {
        return false
    }
    let check = arr[0]
    let position = 2
    let test=0
    let i = 1
    while (i<arr.length) {
        let sum = 0
        test=position
        while (0<test) {
            sum += arr[i]
            i++
            test--
            console.log(test)
        }
        position++
        if(sum!=check){
            return false
        }
    }
    return true
}
console.log(isMadhavArray([2,1,1,4,-1,-1]))