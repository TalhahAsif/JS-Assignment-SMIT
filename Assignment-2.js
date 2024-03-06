var isStudent = prompt("Are You Student? (yes/no)").toLowerCase()
    // var Age = prompt("What is your age?")

    if (isStudent === "no") {
        alert("Ticket Price is $12")
    } else if (isStudent === "yes") {
        var StudentAge = prompt("What is your age?")    
        if (StudentAge < 12){
            alert("Ticket Price is $5")
        }else if (StudentAge <= 12 || StudentAge > 18){
            alert("Ticket Price is $8")
        }else if (StudentAge > 18){
            alert('Ticket Price is $12')
        }else{
            alert('Enter Valid Age')
        }

    }else{
            alert('Answer must be YES or NO')
        }