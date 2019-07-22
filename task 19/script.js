var group = [];

function getStudentObj(group){
  function addStud(name, age){
    group.push({
      "name": name,
      "age": age,
      "marks": []
    });
    return group[group.length - 1]
  }
  return addStud
}

var student = getStudentObj(group);

console.log(student('Kolya', 20));
console.log(student('Julia', 25));
console.log(student('Andrew', 30));
console.log(group);

function studentManagement(group){
  
    studentManagement.addStudent = function(name,age){
      group.push({
        "name": name,
        "age": age,
        "marks": []})
      ;}
    
    studentManagement.removeStudent = function(name){
      for (var i = 0; i < group.length; i++){
        if (group[i].name === name){
          group.splice(i, 1);
        }
      }
    }

    studentManagement.addMark = function(name, marks){
      for (var i = 0; i < group.length; i++){
          if (group[i].name === name){
            group[i].marks.push(marks);
          }
       }
     };

     studentManagement.getAverageMark = function(name){
      var sumMarks = 0;
      for (var i = 0; i < group.length; i++){
        if (group[i].name === name){
          for (var a = 0; a < group[i].marks.length; a++){
            sumMarks += group[i].marks[a];
          }
          return sumMarks / group[i].marks.length;
        }
      }
    };
    
    studentManagement.getAverageLessonMark = function(lessonNumber){
      var count = 0;
      var sumMarks = 0;
      for (var i = 0; i < group.length; i++){
        if(group[i].marks[lessonNumber]){
          sumMarks += group[i].marks[lessonNumber];
          count++
        }
      }

        return 'Средняя оценка группы за занятие '+lessonNumber+' = '+ sumMarks / count;
      };

      studentManagement.sortStudentsByName = function(){
        group.sort(function(a,b){
          return a.name > b.name ? 1 : -1;
        })
        return group;
      }

      studentManagement.sortStudentsByMarks = function(){
        group.sort(function(a,b){
          return mng.getAverageMark(a.name) < mng.getAverageMark(b.name) ? 1 : -1;
        })
        return group;
      }

    return studentManagement;
}


var mng = studentManagement(group);

mng.addStudent('Oleg', 18);
mng.removeStudent('Kolya');

mng.addMark('Julia', 3);
mng.addMark('Julia', 7);
mng.addMark('Andrew', 10);
mng.addMark('Andrew', 8);
mng.addMark('Andrew', 9);
mng.addMark('Oleg', 7);
mng.addMark('Oleg', 9);

console.log(mng.getAverageMark('Andrew'));
console.log(mng.getAverageLessonMark(1));

console.log(mng.sortStudentsByName());
console.log(mng.sortStudentsByMarks());






