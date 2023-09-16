document.addEventListener("DOMContentLoaded", ()=>{
    const heightInput = document.getElementById("height")
    ,     weightInput = document.getElementById("weight")
    ,     calculateButton = document.getElementById("calculateButton")
    ,     result = document.getElementById("result");


    calculateButton.addEventListener("click", ()=>{
        const height = parseFloat(heightInput.value)
        ,     weight = parseFloat(weightInput.value);

        if(isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0){
            result.innerText = "error";
            return;
        }

        const bmi = calculateBMI(height, weight);
        const interpretation = getInterpretation(bmi);

        result.innerText = interpretation;
    });

    function calculateBMI(height, weight){
        return weight / ((height / 100) * (height / 100));
    }

    function getInterpretation(bmi){
        if(bmi < 18.5){
            return "Underweight";
        }else if(bmi < 24.9){
            return "Normal weight";
        }else if(bmi < 29.9){
            return "Overweight";
        }else{
            return "Obese";
        }
    }
});