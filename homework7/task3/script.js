document.getElementById('button1').addEventListener('click', function () {
    document.body.style.backgroundColor = '#ADD8E6';
});

document.getElementById('button2').addEventListener('dblclick', function () {
    document.body.style.backgroundColor = '#FFB6C1';
});

let btn3 = document.getElementById('button3');
btn3.addEventListener('mousedown', function () {
    document.body.style.backgroundColor = '#A52A2A';
});
btn3.addEventListener('mouseup', function () {
    document.body.style.backgroundColor = 'white';
});

let link = document.getElementById('link');
link.addEventListener('mouseover', function () {
    document.body.style.backgroundColor = 'yellow';
});
link.addEventListener('mouseout', function () {
    document.body.style.backgroundColor = 'white';
});
