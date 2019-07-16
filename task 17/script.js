var person_1 = {name: 'Nikolay', yearOfBirth: 2000, gender: 'male' };
var person_2 = {name: 'Alexander', yearOfBirth: 1995, gender: 'male' };
var person_3 = {name: 'Anna', yearOfBirth: 1997, gender: 'female' };
var person_4 = {name: 'Olga', yearOfBirth: 1999, gender: 'female' };
var person_5 = {name: 'Artem', yearOfBirth: 1989, gender: 'male' };
var person_6 = {name: 'Alisa', yearOfBirth: 1993, gender: 'female' };
var person_7 = {name: 'Nikita', yearOfBirth: 1992, gender: 'male' };
var allPeople =[person_1, person_2, person_3, person_4, person_5, person_6, person_7];
console.log(allPeople);

function checkAverageAge(arr){
    var average = 0;
    for(i = 0; i < arr.length; i++ ){
        average += 2019 - arr[i].yearOfBirth;
    }
    return average /= arr.length 
}

function checkAmountGender(arr){
    var male = 0;
    var female = 0;
    arr.forEach(function(item) {
        if (item.gender === 'male') {
            male++;
        } else {
            female++;
        }
    });
    if(male>female){
        return 'Мужчин больше'
    }else if(female>male){
        return 'Женщин больше'
    }else{
        return 'Равное количество полов'
    }
}

var averageAge = checkAverageAge(allPeople);
var amountGender = checkAmountGender(allPeople);

console.log('Средний возраст = ' + averageAge);
console.log(amountGender);
