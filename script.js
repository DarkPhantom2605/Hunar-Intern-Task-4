function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    
    document.getElementById('weight-error').style.display = 'none';
    document.getElementById('height-error').style.display = 'none';
    
    let isValid = true;
    
    if (!weight || weight < 20 || weight > 300) {
        document.getElementById('weight-error').style.display = 'block';
        isValid = false;
    }
    
    if (!height || height < 100 || height > 250) {
        document.getElementById('height-error').style.display = 'block';
        isValid = false;
    }
    
    if (!isValid) return;

    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    const roundedBMI = bmi.toFixed(1);

    let category, resultClass;
    if (bmi < 18.5) {
        category = "Underweight";
        resultClass = "underweight";
    } else if (bmi < 25) {
        category = "Normal weight";
        resultClass = "normal";
    } else if (bmi < 30) {
        category = "Overweight";
        resultClass = "overweight";
    } else {
        category = "Obese";
        resultClass = "obese";
    }

    const resultDiv = document.getElementById('result');
    resultDiv.style.display = 'block';
    resultDiv.className = 'result ' + resultClass + ' show';
    
    document.getElementById('bmi-value').textContent = roundedBMI;
    document.getElementById('bmi-category').textContent = category;

   
    const meterFill = document.getElementById('bmi-meter-fill');
    const percentage = ((bmi - 16) / (35 - 16)) * 100;
    meterFill.style.width = Math.min(Math.max(percentage, 0), 100) + '%';
}

function resetCalculator() {
    document.getElementById('weight').value = '';
    document.getElementById('height').value = '';
    document.getElementById('result').style.display = 'none';
    document.getElementById('weight-error').style.display = 'none';
    document.getElementById('height-error').style.display = 'none';
}