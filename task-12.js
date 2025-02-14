// Remove duplicate items from an array. I use two kinds of loop(for....of loop and for loop) 

function removeDuplicat(cars) {
    // console.log(cars)

    let noDuplicate = [];

    // using for of loop

   /*for (let car of cars) {
        if (noDuplicate.includes(car)===false) {
            noDuplicate.push(car)
        }
    }*/

    // using for loop

    for(let i=0; i<cars.length; i++){
         if(!noDuplicate.includes(cars[i])){
            noDuplicate.push(cars[i])
         }
    }

   return noDuplicate;

}

const array = ['BMW', 'Tesla', 'Audi', 'Tesla', 'Ferari', 'Audi', 'Lamborgini']
const result = removeDuplicat(array)
console.log(result)