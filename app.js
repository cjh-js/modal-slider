const toggleBtn = document.querySelector('.btn-design');
const modalBtn = document.querySelector('.join-btn');
const closeBtn = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');

// Event Listener
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('show-nav');
});

modalBtn.addEventListener('click', () => {
    modal.classList.add('modalOpen');
});

closeBtn.addEventListener('click', () => {
    modal.classList.remove('modalOpen');
});

window.addEventListener('click', (e) => {
    if(e.target === modal){
        modal.classList.remove('modalOpen');
    } else {
        return false;
    }
});