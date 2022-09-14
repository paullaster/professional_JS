let list1 = [1,2,3,4,5];
let list2 = [6,7,8,9,10];
list1.push(...list2)
list1.splice([list1.length], 0, 20,40,60, 20);
let find1 = list1.find((item)=> item === 20);
let findByIndex = list1.indexOf(20, 11);

console.table(findByIndex);