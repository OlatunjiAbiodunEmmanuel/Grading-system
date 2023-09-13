function average() {
    var studentName = document.getElementById('studentname').value;
    var mathematics = document.getElementById('Mathematics').value;
    var english = document.getElementById('English').value;
    var chemistry = document.getElementById('Chemistry').value;
    var physics = document.getElementById('Physics').value;
    var biology = document.getElementById('Biology').value;
    var geography = document.getElementById('Geography').value;
    var civiEducation = document.getElementById('civiEducation').value;
    var economics = document.getElementById('Economics').value;
    var yoruba = document.getElementById('Yoruba').value;
    var total = 900;
    var zero = '';
    
    var all = Number(mathematics) + Number(english) + Number(chemistry) + Number(physics) + Number(biology) +
    Number(geography) + Number(civiEducation) + Number(economics) + Number(yoruba)   
    console.log(all);
    var tat = all;
    console.log(tat);
    document.getElementById('out').innerHTML = 'Hello ' + studentName + ' !!! ' + ' your total score is ' + tat + ' out of 900 in all subjects.';
    
    var neww = document.getElementById('percent');
    
    neww.onclick = function( ) {
        var percentage = Math.round(all / total * 100);
    
        console.log(percentage);
    
        if (percentage >= 50) {
        document.getElementById('out2').innerHTML = 'Congratulations ' + studentName + ' !!! ' + ' your average score is ' + percentage + ' %';
                
        } else {
        document.getElementById('out2').innerHTML = 'Buckle up ' + studentName + ' !!! ' + ' your average score is ' + percentage + ' %';
        }    
    }
    
    var neww2 = document.getElementById('grading');
    
    neww2.onclick = function( ) {
        var percentage = (all / total) * 100;
    
        if (percentage <= 100 && percentage >= 90) {
            document.getElementById('out3').innerHTML =  " Your GRADE is A";
          } else if (percentage <= 89 && percentage >= 80) {
            document.getElementById('out3').innerHTML  = " Your GRADE is B";
          } else if (percentage <= 79 && percentage >= 70) {
            document.getElementById('out3').innerHTML  = " Your GRADE is C";
          } else if (percentage <= 69 && percentage >= 60) {
            document.getElementById('out3').innerHTML  = " Your GRADE is D";
          } else if (percentage <= 59 && percentage >= 50) {
            document.getElementById('out3').innerHTML  = " Your GRADE is E";
          }
            else {
            document.getElementById('out3').innerHTML   = " Your GRADE is F";
          }
    
    }
    
    var neww3 = document.getElementById('remarks');
    
    neww3.onclick = function( ) {
      var percentage = Math.round(all / total * 100);
    
        if (percentage <= 100 && percentage >= 90) {
          document.getElementById('out4').innerHTML = "Out of 900 your total score is " + all + 
          " and percentage is " + percentage + " %" +
          " Your grade is A  You PASSED";
        } else if (percentage <= 89 && percentage >= 80) {
          document.getElementById('out4').innerHTML  = "Out of 900 your total score is " + all + 
          " and percentage is " + percentage + " %" +
          " Your grade is B  You PASSED";
        } else if (percentage <= 79 && percentage >= 70) {
          document.getElementById('out4').innerHTML  =  "Out of 900 your total score is " + all + 
          " and percentage is " + percentage + " %" +
          " Your grade is C  You PASSED";
        } else if (percentage <= 69 && percentage >= 60) {
          document.getElementById('out4').innerHTML  = "Out of 900 your total score is " + all + 
          " and percentage is " + percentage + " %" +
          " Your grade is D  You PASSED";
        } 
         else if (percentage <= 59 && percentage >= 50) {
          document.getElementById('out4').innerHTML  = "Out of 900 your total score is " + all + 
          " and percentage is " + percentage + " %" +
          " Your grade is E  You PASSED";
        }
          else {
          document.getElementById('out4').innerHTML   = "Out of 900 your total score is " + all + 
          " and percentage is " + percentage + " %" +
          " Your grade is F  You FAILED";
        }
    
    }
    
    }
    
    
    
    
    
    
    
    