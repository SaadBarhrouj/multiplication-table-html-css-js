const btn = document.querySelector('.btn1');
const multi_box = document.querySelector('.multi_box');
const closed = document.querySelector('.close');
const inputt = document.querySelector('.number1');
const tabl = document.querySelector('.table');

btn.addEventListener('click', function () {
    let n = inputt.value;
    let tab = '';
    tab = `<h4>multiplication table: ${n}<br><br><hr><br>`


    for (let index = 1; index <= 10; index++) {
        tab += ` 
         <table>
         <tr >
        <th>${index}</th>
        <th>x</th>
        <th>${n}</th>
        <th>=</th>
        <th>${index * n}</th>
         </tr>
          </table>`;
    }
    tabl.innerHTML = tab;
    multi_box.style.display = 'block';
});
closed.addEventListener('click', function () {
    multi_box.style.display = 'none';
});
pre