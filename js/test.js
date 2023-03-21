// first card
document.getElementById('first-card').addEventListener('click', function () {
    const cardElement = document.getElementById('First-name').innerText;
    const base = document.getElementById('triangle-base').value;
    const height = document.getElementById('triangle-height').value;
    const area = 0.5 * base * height;


    displayData(cardElement, area);
});
// second card
document.getElementById('second-card').addEventListener('click', function () {
    const cardElement = document.getElementById('second-title').innerText;
    const Width = document.getElementById('rectangle-width').value;
    const length = document.getElementById('rectangle-length').value;
    const area = Width * length;

    displayData(cardElement, area);
});
// third card
document.getElementById('third-card').addEventListener('click', function () {
    const cardElement = document.getElementById('third-title').innerText;
    const base = document.getElementById('parallelogram-b').innerText;
    const height = document.getElementById('parallelogram-h').innerText;
    const area = parseInt(base) * parseInt(height);

    displayData(cardElement, area);
});
// 4th card
document.getElementById('fourth-card').addEventListener('click', function () {
    const cardElement = document.getElementById('fourth-title').innerText;
    const base = document.getElementById('rhombus-d1').innerText;
    const height = document.getElementById('rhombus-d2').innerText;
    const area = parseInt(base) * parseInt(height);

    displayData(cardElement, area);
});
// fifth
document.getElementById('fifth-card').addEventListener('click', function () {
    const cardElement = document.getElementById('fifth-title').innerText;
    const p = document.getElementById('pentagon-p').innerText;
    const b = document.getElementById('pentagon-b').innerText;
    const area =0.5 * parseInt(p) * parseInt(b);

    displayData(cardElement, area);
});
// 6th
document.getElementById('sixth-card').addEventListener('click', function () {
    const cardElement = document.getElementById('sixth-title').innerText;
    const a = document.getElementById('ellipse-a').innerText;
    const b = document.getElementById('ellipse-b').innerText;
    const area = parseInt(a) * parseInt(b);

    displayData(cardElement, area);
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