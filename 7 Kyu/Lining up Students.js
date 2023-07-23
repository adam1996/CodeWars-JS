/* 
Names of equal length will be returned in reverse alphabetical order (Z->A) such that:

string = "xxa xxb xxc xxd xa xb xc xd"
Returns

['xxd', 'xxc', 'xxb', 'xxa', 'xd', 'xc', 'xb', 'xa']
Please also try the other Kata in this series..

Help Suzuki count his vegetables...
Help Suzuki purchase his Tofu!
Help Suzuki pack his coal basket!
Help Suzuki rake his garden!
How many stairs will Suzuki climb in 20 years?
*/

function lineupStudents(students) {
    let studentsArray = students.split(' ');
    return studentsArray.sort((x, y) => {
      let diff = y.length - x.length;
      
      if (diff !== 0) {
        return diff;
      } else {
        return y.localeCompare(x);
      }
    }); 
  }
  