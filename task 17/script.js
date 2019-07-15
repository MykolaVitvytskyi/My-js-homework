var person_1 = {name: 'Nikolay', age: 18, gender: 'male' };
var person_2 = {name: 'Alexander', age: 25, gender: 'male' };
var person_3 = {name: 'Anna', age: 22, gender: 'female' };
var person_4 = {name: 'Olga', age: 19, gender: 'female' };
var person_5 = {name: 'Artem', age: 30, gender: 'male' };
var person_6 = {name: 'Alisa', age: 26, gender: 'female' };
var person_7 = {name: 'Nikita', age: 28, gender: 'male' };
var allPeople =[person_1, person_2, person_3, person_4, person_5, person_6, person_7];
console.log(allPeople);

function checkAverageAge(arr){
    var average = 0;
    for(i = 0; i < arr.length; i++ ){
        average += arr[i].age;
    }
    return average /= arr.length 
}

function checkAmountGender(arr){
    var male = 0;
    var female = 0;
    for(i = 0; i < arr.length; i++ ){
        if(arr[i].gender === 'male'){
            male++;
        }else{
            female++;
        }
    }
    if(male>female){
        return 'Мужского пола больше'
    }else if(male<female){
        return 'Женского пола больше'
    }else{
        return 'Представителей обоих полов равное количество'
    }
}

var averageAge = checkAverageAge(allPeople);
var amountGender = checkAmountGender(allPeople);
console.log('Средний возраст = ' + averageAge);
console.log(amountGender);