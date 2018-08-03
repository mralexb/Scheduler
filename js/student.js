        var students = 1 //this keeps track of the number of SS to make the name and IDs right on the form elements
        $(document).ready(function() { //this is a jQuery function that causes the page to finish loading BEFORE executing this code

            var xmlhttp = new XMLHttpRequest();
            xmlhttp.open("GET", "controller.php?q=tutor", true); //creates the request, note this is asynchronous, and should probably stay that way
            xmlhttp.send(); //sends the request. returns results as soon as it sent. results are given using the event
            xmlhttp.onreadystatechange = function() { //event listener to use the results
                if (this.readyState == 4 && this.status == 200) { //makes sure nothing happens until the request is FINISHED
                    $("tutorList").innerHTML = this.responseText; //creates the dropdown if everythign is returned properly
                }
            }
        });

        function createStudent() {
            $("#studentInfo").append(
                '<br><Label for="studentName' + students + '">Name: </label> <input type="text" name="studentName' + students + '" id="studentName' + students + '" placeholder="Your Name " /><Label for="studentID' + students + '">Student ID number: </label> <input type="text" name="studentID' + students + '" id="studentID' + students + '" placeholder="Your ID Number " />'
            )
            students += 1;
        }