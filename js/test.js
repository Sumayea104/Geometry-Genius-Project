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
    const areaInSqM = convertToSqM(areaInCmSquared);

    displayData(cardElement, areaInCmSquared, areaInSqM);
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
    const areaInSqM = convertToSqM(areaInCmSquared);

    displayData(cardElement, areaInCmSquared, areaInSqM);
});
// third card
document.getElementById('third-card').addEventListener('click', function () {
    const cardElement = document.getElementById('third-title').innerText;
    const base = document.getElementById('parallelogram-b').innerText;
    const height = document.getElementById('parallelogram-h').innerText;
    const area = parseInt(base) * parseInt(height);
    const areaInCmSquared = area.toFixed(2) + "cm²";
    const areaInSqM = convertToSqM(areaInCmSquared);

    displayData(cardElement, areaInCmSquared, areaInSqM);;
});
// 4th card
document.getElementById('fourth-card').addEventListener('click', function () {
    const cardElement = document.getElementById('fourth-title').innerText;
    const base = document.getElementById('rhombus-d1').innerText;
    const height = document.getElementById('rhombus-d2').innerText;
    const area = parseInt(base) * parseInt(height);
    const areaInCmSquared = area.toFixed(2) + "cm²";
    const areaInSqM = convertToSqM(areaInCmSquared);

    displayData(cardElement, areaInCmSquared, areaInSqM);
});
// fifth
document.getElementById('fifth-card').addEventListener('click', function () {
    const cardElement = document.getElementById('fifth-title').innerText;
    const p = document.getElementById('pentagon-p').innerText;
    const b = document.getElementById('pentagon-b').innerText;
    const area = 0.5 * parseInt(p) * parseInt(b);
    const areaInCmSquared = area.toFixed(2) + " cm²";
    const areaInSqM = convertToSqM(areaInCmSquared);

    displayData(cardElement, areaInCmSquared, areaInSqM);
});
// 6th
document.getElementById('sixth-card').addEventListener('click', function () {
    const cardElement = document.getElementById('sixth-title').innerText;
    const a = document.getElementById('ellipse-a').innerText;
    const b = document.getElementById('ellipse-b').innerText;

    const area = 3.14 * parseInt(a) * parseInt(b);
    const areaInCmSquared = area.toFixed(2) + " cm²";
    const areaInSqM = convertToSqM(areaInCmSquared);

    displayData(cardElement, areaInCmSquared, areaInSqM);
});

function displayData(cardElement, areaInCmSquared, areaInSqM) {
    const container = document.getElementById('table-container');
    let count = container.getElementsByTagName('tr').length;
    count += 1;
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${count}</td>
        <td>${cardElement}</td>
        <td class="area">${areaInCmSquared}</td>
        <td><button class="btn btn-primary convert-btn" data-cm="${areaInCmSquared}" data-sqm="${areaInSqM}">Convert to m²</button></td>
    `;
    container.appendChild(tr);

    let isDisplayingSqM = false;

    const convertBtn = tr.querySelector('.convert-btn');
    const areaTd = tr.querySelector('.area');
    convertBtn.addEventListener('click', function() {
        if (isDisplayingSqM) {
            areaTd.innerHTML = this.getAttribute('data-cm');
            this.innerHTML = `Convert to m²`;
            isDisplayingSqM = false;
        } else {
            areaTd.innerHTML = this.getAttribute('data-sqm');
            this.innerHTML = `Convert to cm²`;
            isDisplayingSqM = true;
        }
    });
}

function convertToSqM(areaInCmSquared) {
    const areaWithoutSuffix = areaInCmSquared.replace(" cm²", "");
    const areaInSqM = (parseFloat(areaWithoutSuffix) / 10000).toFixed(2);
    return areaInSqM + " m²";
}




// Define the addInputFields function
function addInputFields(a, b) {
    // Get the checkbox, the span elements and their parent
    const checkbox = document.getElementById('checkbox');
    const spanA = document.getElementById('ellipse-a');
    const spanB = document.getElementById('ellipse-b');
    const parentDiv = spanA.parentElement;

    // Listen for the change event on the checkbox
    checkbox.addEventListener('change', () => {
        // If the checkbox is checked, add input fields for a and b
        if (checkbox.checked) {
            // Create input fields for a and b
            const inputA = document.createElement('input');
            inputA.type = 'number';
            inputA.value = a;
            inputA.classList.add('w-16', 'mr-2');
            inputA.addEventListener('input', () => {
                spanA.textContent = inputA.value;
            });

            const inputB = document.createElement('input');
            inputB.type = 'number';
            inputB.value = b;
            inputB.classList.add('w-16');
            inputB.addEventListener('input', () => {
                spanB.textContent = inputB.value;
            });

            // Replace the spans with the input fields
            parentDiv.replaceChild(inputA, spanA);
            parentDiv.replaceChild(inputB, spanB);
        } else {
            // Otherwise, remove the input fields and restore the spans
            const newSpanA = document.createElement('span');
            newSpanA.id = 'ellipse-a';
            newSpanA.textContent = a;
            const newSpanB = document.createElement('span');
            newSpanB.id = 'ellipse-b';
            newSpanB.textContent = b;
            parentDiv.replaceChild(newSpanA, spanA);
            parentDiv.replaceChild(newSpanB, spanB);
        }
    });
}

