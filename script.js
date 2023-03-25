
//  Обратный инжиниринг с массивом
//       функция сама понимает как найти мин
//        не смотря какие параметры мы отправляем      
//  min(1, 2);
// min([1, 2])
// min({a: 1, b: 2})
// min({a: 1, b: 2}, {a: 11, b: 12}) //

let listOfNames = ['Harry', 'Alex', 'Joe','Britney']


function sortNames(names) {

  for(let i=0; i<names.length; i++) {

    for (let k=i+1; k<names.length; k++) {

      if(names[i] > names[k]) {

        compare = names[i]
        names[i] = names[k]
        names[k] = compare
      }
    }
  }
  return names
}

let newArr = sortNames(listOfNames)
console.log(newArr)


function min(array) {
    return array.reduce(function(number, element) {
      return Math.min(number, element);
    }, Infinity);
  }
  
  function min(element) {
    let array = element
    let minValue = array[0]

    for (let item of array) {
        if(item < minValue) {
            minValue = item; 
        }
      }
 console.log(minValue);
}
min([1, 2])