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