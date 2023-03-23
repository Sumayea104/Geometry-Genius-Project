// document.getElementById('calculate-ellipse').addEventListener('click', function () {
//     const cardElement = document.getElementById('sixth-title').innerText;

//     let a = document.getElementById('ellipse-a').innerText;
//     let b = document.getElementById('ellipse-b').innerText;

//     // Check if checkbox is checked, and if so, set a and b to 0
//     if (document.getElementById('checkbox').classList.contains('checked')) {
//         a = 0;
//         b = 0;
//     }
//     // If checkbox is unchecked, check if input fields have values and set a and b to those values
//     else {
//         const inputA = document.getElementById('input-a').value;
//         const inputB = document.getElementById('input-b').value;

//         if (inputA !== '') {
//             a = inputA;
//         }
//         if (inputB !== '') {
//             b = inputB;
//         }
//     }

//     const area = 3.14 * parseInt(a) * parseInt(b);
//     const areaInCmSquared = area.toFixed(2) + " cm²";
//     const areaInSqM = convertToSqM(areaInCmSquared);

//     displayData(cardElement, areaInCmSquared, areaInSqM);
//     changeCardColorOnHover(sixthCard);
// });





// document.getElementById('calculate-ellipse').addEventListener('click', function () {
//     const cardElement = document.getElementById('sixth-title').innerText;
//     const a = document.getElementById('ellipse-a').innerText;
//     const b = document.getElementById('ellipse-b').innerText;

//     const area = 3.14 * parseInt(a) * parseInt(b);
//     const areaInCmSquared = area.toFixed(2) + " cm²";
//     const areaInSqM = convertToSqM(areaInCmSquared);

//     displayData(cardElement, areaInCmSquared, areaInSqM);
//     changeCardColorOnHover(sixthCard);
    
// });