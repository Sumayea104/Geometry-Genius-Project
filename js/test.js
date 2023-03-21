// console.log('okay');
// first card
document.getElementById('first-card').addEventListener('click', function () {
    // console.log('first btn clicked');
    // console.log(e.target);-----function(e)
    // get the data from html using id
    const FirstElement = document.getElementById('First-name').innerText;
    // console.log(FirstElement);
    const base = document.getElementById('triangle-base').value;
    // console.log(base);
    const height = document.getElementById('triangle-height').value;
    // console.log(height);
    // console.log(FirstElement,base,height);
    

    // Calculate the area of the triangle
    const area = 0.5 * base * height;

    const container = document.getElementById('table-container');
    let count = 0;
    count += 1;
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${count}</td>
    <td>${FirstElement}</td>
    <td>${area}</td>

    `;
    container.appendChild(tr);
});