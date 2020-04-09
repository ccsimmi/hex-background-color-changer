const button = document.querySelector('input');
const body = document.querySelector('body');
const value = document.getElementById('hex-value');
const hexvalue = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];


button.addEventListener('click', colour);


function colour () {

    let hex = '#';

    for(let i = 0; i < 6; i++) {
        const index = Math.floor(Math.random() * hexvalue.length);
        hex += hexvalue[index];
    }

    body.style.backgroundColor = hex;
    value.textContent = hex;

}


// hex = hex + hexvalue[index] 
/* "#45b93a"
*/ 
