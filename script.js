let list = document.querySelectorAll('.item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

let count = list.length;
let active = 0;

next.addEventListener('click', () => {
    let activeOld = document.querySelector('.active');
    activeOld.classList.remove('active');


 // Calcula o índice do próximo item e adiciona a classe 'active'
 active = (active + 1) % count;
 list[active].classList.add('active');
});

prev.addEventListener('click', () => {
 // Remove a classe 'active' do item atual
 let activeOld = document.querySelector('.active');
 activeOld.classList.remove('active');



// Calcula o índice do item anterior e adiciona a classe 'active'
active = (active - 1 + count) % count;
list[active].classList.add('active');
});
