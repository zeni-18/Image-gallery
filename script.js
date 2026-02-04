const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const closeBtn = document.querySelector('.close');

const galleryImages = document.querySelectorAll('.gallery-img');

galleryImages.forEach(img => {
    img.addEventListener('click', function () {
        modal.classList.add('active');
        modalImg.src = this.src;
        modalImg.alt = this.alt;
    });
});

closeBtn.addEventListener('click', function () {
    modal.classList.remove('active');
});

modal.addEventListener('click', function (e) {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        modal.classList.remove('active');
    }
});
