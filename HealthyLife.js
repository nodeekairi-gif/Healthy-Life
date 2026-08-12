

function showTip() {

    let tips = [

        "Drink enough water during the day.",

        "Try to eat more fruits and vegetables.",

        "Take a short walk and stay physically active.",

        "Try to get 7 to 9 hours of sleep."

    ];


    let randomNumber =
        Math.floor(Math.random() * tips.length);


    document.getElementById("tip").textContent =
        tips[randomNumber];
}





function checkHealth() {

    let age =
        document.getElementById("age").value;

    let sleep =
        document.getElementById("sleep").value;

    let exercise =
        document.getElementById("exercise").value;


    let result =
        document.getElementById("result");


    

    if (
        age === "" ||
        sleep === "" ||
        exercise === ""
    ) {

        result.textContent =
            "Please fill in all the fields.";

        return;
    }


    

    if (sleep < 7 && exercise < 30) {

        result.textContent =
            "Try to get more sleep and add some physical activity to your daily routine.";
    }


    

    else if (sleep < 7) {

        result.textContent =
            "You are exercising, but try to get more sleep and rest.";
    }


   
    else if (exercise < 30) {

        result.textContent =
            "Your sleep looks good. Try to include more physical activity.";
    }


    
    else {

        result.textContent =
            "Great job! Your sleep and exercise habits look good. Keep maintaining them.";
    }

}