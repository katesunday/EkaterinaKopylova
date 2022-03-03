const names = ['Bob','Ted','Alex','Fred',100,'bob','alex','игорь','юра',33,1000];
// console.log(names.sort()) //  метод сорт мутирует исходный массив и возвращает ссылку на этот же массив
// //изменяет массив
// console.log(names)
console.log(...names.sort()) //не мутирует исходный массив
// console.log(names)

const numbers = [1,100,0,999,-33,456,321,1111];
// console.log(numbers.sort())

const compareFunc = (a,b) => { //по возрастанию
  if(a.toString().toLowerCase()<=b.toString().toLowerCase()){
      return -1// отрицат значение, если менять не надо
  }
  else {
      return +1
  }
}
// console.log(numbers.sort(compareFunc))
// console.log(numbers.sort((a,b)=>b-a) //убывание
//     .reverse())
// console.log(names.sort(compareFunc))


const students = [
    {
        name: "bob",
        age: 22,
        isMarried: true,
        scores: 95
    },
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 95
    },
    {
        name: "Alex",
        age: 23,
        isMarried: true,
        scores: 89
    },
    {
        name: "Helge",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 121
    },
    {
        name: "alex",
        age: 23,
        isMarried: true,
        scores: 89
    },
];

console.log(students.sort((a,b)=>a.name.toLowerCase()<b.name.toLowerCase()?-1:1))

console.log(students.sort((a,b)=>a.age-b.age))

// bubble sort
const bubbleSort = (arr) => {
    for (let j = 0; j < numbers.length-1; j++) {
        for (let i = 0; i < numbers.length-1-j; i++) {
            if (numbers[i] > numbers[i + 1]) {
                // let temp = numbers[i + 1]
                // numbers[i + 1] = numbers[i]
                // numbers[i] = temp
                [numbers[i+1],numbers[i]] = [numbers[i],numbers[i+1]]
            }
        }
    }
    return arr
}
console.log(bubbleSort(numbers))