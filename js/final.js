// document.getElementById('first-card').addEventListener('click', function () {
//     const firstElement = document.getElementById('First-name').innerText;
//     const base = document.getElementById('triangle-base').value;
//     const height = document.getElementById('triangle-height').value;
//     const area = 0.5 * base * height;

//     const container = document.getElementById('table-container');
//     let count = 0;
//     count += 1;
//     const tr = document.createElement('tr');
//     tr.innerHTML = `
//     <td>${count}</td>
//     <td>${firstElement}</td>
//     <td>${area}</td>

//     `;
//     container.appendChild(tr);
// });



// =-------------------------------------------


// function calculateTriangleArea() {
//     const FirstElement = document.getElementById('First-name').innerText;
//     const base = document.getElementById('triangle-base').value;
//     const height = document.getElementById('triangle-height').value;
//     const area = 0.5 * base * height;

//     const container = document.getElementById('table-container');
//     let count = container.getElementsByTagName('tr').length;
//     count += 1;
//     const tr = document.createElement('tr');
//     tr.innerHTML = `
//         <td>${count}</td>
//         <td>${FirstElement}</td>
//         <td>${area}</td>
//     `;
//     container.appendChild(tr);
// }

// document.getElementById('first-card').addEventListener('click', calculateTriangleArea);
