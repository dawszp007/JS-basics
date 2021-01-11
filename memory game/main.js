const cards = document.querySelectorAll('.content div');
[...cards].forEach((card) => {
    card.addEventListener('click', () => {
        card.classList.remove('board')
    })
})

