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