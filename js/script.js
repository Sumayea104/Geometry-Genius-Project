function calculateArea(cardSelector, formula) {
    const card = document.querySelector(cardSelector);
    const calculateBtn = card.querySelector('.btn-primary');
    const inputs = card.querySelectorAll('input');

    function handleCalculateClick() {
        const values = Array.from(inputs).map((input) => parseFloat(input.value) || 0);
        const result = formula(...values);
        alert(`Area: ${result} square cm.`);
    }

    calculateBtn.addEventListener('click', handleCalculateClick);
}
// Card 01 - Triangle
calculateArea('.card.bg-indigo-200', (base, height) => 0.5 * base * height);

// Card 02 - Rectangle
calculateArea('.card.bg-violet-400', (width, length) => width * length);


// reusable function for calculating parallelogram area
function calculateParallelogramArea() {
    const b = document.getElementById("parallelogram-b").innerText;
    const h = document.getElementById("parallelogram-h").innerText;
    const area = b * h;
    alert(`The area of the parallelogram is ${area} square cm.`);
}
// reusable function for calculating rhombus area
function calculateRhombusArea() {
    const d1 = document.getElementById("rhombus-d1").innerText;
    const d2 = document.getElementById("rhombus-d2").innerText;
    const area = 0.5 * d1 * d2;
    alert(`The area of the rhombus is ${area} square cm.`);
}
// add event listeners to the "Calculate" buttons
document.querySelector(".calculate-parallelogram-area").addEventListener("click", calculateParallelogramArea);
document.querySelector(".calculate-rhombus-area").addEventListener("click", calculateRhombusArea);


// reusable function for calculating pentagon area
function calculatePentagonArea() {
    const p = document.getElementById("pentagon-p").innerText;
    const b = document.getElementById("pentagon-b").innerText;
    const area = 0.5 * p * b;
    alert(`The area of the pentagon is ${area} square cm.`);
}

// reusable function for calculating ellipse area
function calculateEllipseArea() {
    const a = document.getElementById("ellipse-a").innerText;
    const b = document.getElementById("ellipse-b").innerText;
    const area = Math.PI * a * b;
    const roundedArea = area.toFixed(2);
    document.getElementById("ellipse-area").innerHTML = `<p>The area of the ellipse is ${roundedArea} square cm.</p>`;
}