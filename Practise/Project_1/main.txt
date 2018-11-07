var addStudentBtn = document.getElementById('addStudentBtn');
var deleteStudentBtn = document.getElementById('deleteStudentBtn');
var studNum = document.getElementById('studNum');



var students = {
    studentList: [],
    studentContainer: document.getElementById('studentList'),

    showStudentList: function () {
        return students.studentList;
    },

    addStudent: function () {
        let studentName = prompt('Enter your name: ');
        students.studentList.push(studentName);
        console.log(students.studentList);
    },

    drawHtml: function () {
        students.studentContainer.innerHTML = '';

        for (let index = 0; index < students.studentList.length; index++) {
            console.log(students.studentList[index]);
            students.studentContainer.innerHTML += '<li>' + students.studentList[index] + '</li>';
        }
    },
    
    addMarkingRow: function() {
        var markingTable = document.getElementById('markingTable');
    
        for(let index=0; index < students.studentList.length; index++) {
            markingTable.innerHTML += '<tr>' + ''
        }
    }
    
}

function studNumber() {
    studNum.innerHTML = students.studentList.length;
}



addStudentBtn.addEventListener('click', function(){
    students.addStudent();
    students.drawHtml();
    studNumber();
});
