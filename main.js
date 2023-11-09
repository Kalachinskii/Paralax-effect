const addTop = 2;
function moveFlake(snowflake) {
    const currentTop = parseInt(snowflake.style.top);
    const newTop = currentTop + addTop;
    snowflake.style.top = newTop+'px';
}

function createFlake() {
    const snowflake = document.createElement('span');
    snowflake.innerHTML = `<img width="12" height="12" src="img/icons8-вода-16.png" alt="snowflake"/>`;
    const max = document.documentElement.offsetWidth;
    const position = Math.random() * max;
    snowflake.style.cssText = `position: absolute; top: 0px; left: ${position}px`
    document.querySelector('.layer-4').append(snowflake);
    return snowflake;
}

setInterval (function () {
    const snowflake = createFlake();
    let int = setInterval(() => {
        if (parseInt(snowflake.style.top) > document.documentElement.clientHeight - 90) {
            clearInterval(int);
            snowflake.remove();
        } else {
            moveFlake(snowflake);
        }
    }, 1);
}, 200)

// мориторинг позиции курсора
document.addEventListener('mousemove', e => {
    // передаём объекту позицию
Object.assign(document.documentElement, {
    // определяем переменыне (можно переопределить переменные используемые в css т.о. переменыне --move-x и --move-y будут отвечать за актуальное перемещение курсора по экрану)
    // для нормальной работы центрированного курсора берем полную width / 2 то-же саммое и с высотой
    // умножим на отрицательное дробное число для замедления вращения и правельного поведения углов
    style: `
        --move-x: ${(e.clientX - window.innerWidth / 2) * -0.005}deg;
        --move-y: ${(e.clientY - window.innerHeight / 2) * -0.01}deg;
    `
    })
});