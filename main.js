var list_of_students = [];
function makearray(){
    var first_name = document.getElementById("first_name").value;

    var second_name = document.getElementById("second_name").value;

    var third_name = document.getElementById("third_name").value;

    var forth_name = document.getElementById("fourth_name").value;

    list_of_students.push(first_name);
    list_of_students.push(second_name);
    list_of_students.push(third_name);
    list_of_students.push(forth_name);

    console.log(list_of_students);

    document.getElementById("display_answer").innerHTML=list_of_students;

    document.getElementById("sortbutton").style.display="inline-block";

    document.getElementById("arraybutton").style.display="none";
}

function sortarray(){
    list_of_students.sort();
    console.log(list_of_students)
    
    document.getElementById("display_answer").innerHTML=list_of_students;

    document.getElementById("sortbutton").style.display="none";

    document.getElementById("arraybutton").style.display="inline-block";
}

