// first card
document.getElementById('first-card').addEventListener('click', function () {
    const cardElement = document.getElementById('First-name').innerText;
    const base = document.getElementById('triangle-base').value;
    const height = document.getElementById('triangle-height').value;

    if (base == '' || height == '') {
        return alert('please enter valid number');
    }

    const area = 0.5 * base * height;
    const areaInCmSquared = area.toFixed(2) + "cm²";

    displayData(cardElement, areaInCmSquared);
});
// second card
document.getElementById('second-card').addEventListener('click', function () {
    const cardElement = document.getElementById('second-title').innerText;
    const Width = document.getElementById('rectangle-width').value;
    const length = document.getElementById('rectangle-length').value;

    if (Width == '' || length == '') {
        return alert('please enter valid number');
    }

    const area = Width * length;
    const areaInCmSquared = area.toFixed(2) + "cm²";

    displayData(cardElement, areaInCmSquared);
});
// third card
document.getElementById('third-card').addEventListener('click', function () {
    const cardElement = document.getElementById('third-title').innerText;
    const base = document.getElementById('parallelogram-b').innerText;
    const height = document.getElementById('parallelogram-h').innerText;
    const area = parseInt(base) * parseInt(height);
    const areaInCmSquared = area.toFixed(2) + "cm²";

    displayData(cardElement, areaInCmSquared);
});
// 4th card
document.getElementById('fourth-card').addEventListener('click', function () {
    const cardElement = document.getElementById('fourth-title').innerText;
    const base = document.getElementById('rhombus-d1').innerText;
    const height = document.getElementById('rhombus-d2').innerText;
    const area = parseInt(base) * parseInt(height);
    const areaInCmSquared = area.toFixed(2) + "cm²";

    displayData(cardElement, areaInCmSquared);
});
// fifth
document.getElementById('fifth-card').addEventListener('click', function () {
    const cardElement = document.getElementById('fifth-title').innerText;
    const p = document.getElementById('pentagon-p').innerText;
    const b = document.getElementById('pentagon-b').innerText;
    const area = 0.5 * parseInt(p) * parseInt(b);
    const areaInCmSquared = area.toFixed(2) + "cm²";

    displayData(cardElement, areaInCmSquared);
});
// 6th
document.getElementById('sixth-card').addEventListener('click', function () {
    const cardElement = document.getElementById('sixth-title').innerText;
    const a = document.getElementById('ellipse-a').innerText;
    const b = document.getElementById('ellipse-b').innerText;

    const area = 3.14 * parseInt(a) * parseInt(b);

    const areaInCmSquared = area.toFixed(2) + "cm²";

    displayData(cardElement, areaInCmSquared);
    addInputFields(a, b);
});





// same work
function displayData(cardElement, area) {
    const container = document.getElementById('table-container');
    let count = container.getElementsByTagName('tr').length;
    count += 1;
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${count}</td>
    <td>${cardElement}</td>
    <td>${area}</td>
    `;
    container.appendChild(tr);


}


// Define the addInputFields function
function addInputFields() {
    // Get the checkbox and the span elements
    const checkbox = document.querySelector('.checkbox');
    const spanA = document.querySelector('#ellipse-a');
    const spanB = document.querySelector('#ellipse-b');

    // Listen for the change event on the checkbox
    checkbox.addEventListener('change', () => {
        // If the checkbox is checked, add an input field for a
        if (checkbox.checked) {
            const inputA = document.createElement('input');
            inputA.type = 'number';
            inputA.value = spanA.textContent;
            inputA.addEventListener('input', () => {
                spanA.textContent = inputA.value;
            });
            spanA.replaceWith(inputA);
        } else {
            // Otherwise, remove the input field and restore the span
            const span = document.createElement('span');
            span.textContent = spanA.value;
            inputA.replaceWith(span);
        }
    });
}
