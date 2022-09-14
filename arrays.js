let list1 = [1,2,3,4,5];
let list2 = [6,7,8,9,10];
list1.push(...list2)
list1.splice([list1.length], 0, 20,40,60, 20);
let find1 = list1.find((item)=> item === 20);
let findByIndex = list1.indexOf(20, 11);
let lastOccurrence = list1.lastIndexOf(20);
list1.sort();
list1.reverse()
let removed = list1.pop();

/**
 * MULTIDIMENTIONAL ARRAY
 */
let fourByFourArray =[
    [
        [
            [1,2,3,4], [5,6,7,8], [9,10,11,12], [13,14,15,16]
        ]
    ],
    [
        [
            [,2,3,4], [5,6,7,8], [9,10,11,12], [13,14,15,16]
        ]
    ],
    [
        [
            [1,2,3,4], [5,6,7,8], [9,10,11,12], [13,14,15,16]
        ]
    ],
    [
        [
            [1,2,3,4], [5,6,7,8], [9,10,11,12], [13,14,15,16]
        ]
    ]
]

const theList = ['Laurence', 'Svekis', true, 35, null, undefined,
{test: 'one', score: 55}, ['one', 'two']];
theList.splice(2,8)
theList.splice(0, 1, "FIRST");
theList.splice(2,6, "MIDDLE", "hello world", "LAST" );
console.table(theList);