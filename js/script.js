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
