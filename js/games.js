const area = document.getElementById('area');
let move = true;
let result = "";
const contentWrapper = document.getElementById('content');
const modalResult = document.getElementById('modal-result-cross');
const btn_close = document.getElementById('btn-close')
let count = 0;

//отлавливаем блок, по которому кликаем
area.addEventListener('click', e => {
        // если клик совпадает с классом box, 
        // то выводим это в консоль для проверки
        if (e.target.className = 'box') {
            // console.log(e.target);

            if (move == true) {
                e.target.innerHTML = 'X';
                move = false;
                check();
            } else {
                e.target.innerHTML = '0';
                move = true;
                check();
            }
            // Это тоже самое, я для себя
            // move === true ? e.target.innerHTML = 'X' : e.target.innerHTML = '0';
            count++;
            console.log(count);
        }
        if (count === 9 && result == "") {
            result = "Ничья";
            prepareRes(result);
        }
    })
    // Короткое объявление функции проверки бокса на наличие
const check = () => {
    const boxes = document.getElementsByClassName("box");
    // console.log(boxes);
    // Массив вариантов побед
    const array = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (i = 0; i < array.length; i++) {
        if (boxes[array[i][0]].innerHTML == 'X' && boxes[array[i][1]].innerHTML == 'X' && boxes[array[i][2]].innerHTML == 'X') {
            result = 'крестики';
            prepareResult(result)
        } else {
            if (boxes[array[i][0]].innerHTML == '0' && boxes[array[i][1]].innerHTML == '0' && boxes[array[i][2]].innerHTML == '0') {
                result = 'нолики';
                prepareResult(result);
            }

        }
    }
}
const prepareResult = winner => {
    contentWrapper.innerHTML = `Победили ${winner}!`;
    modalResult.style.display = 'block';
    console.log(winner);
}
const prepareRes = nobody => {
    contentWrapper.innerHTML = `${nobody}!`;
    modalResult.style.display = 'block';
    console.log(nobody);
}
const closeModal = () => {
    modalResult.style.display = 'none';
    location.reload();
}
overlay.addEventListener('click', closeModal);

btn_close.addEventListener('click', closeModal);