const selectors = document.getElementsByClassName('selectors');

let imgIndex = 1;
showImages(imgIndex);

function slide(n) {
    showImages(imgIndex += n);
}

function currentSlide(n) {
    showImages(imgIndex = n);
}

function showImages(index) {
    const images = document.getElementsByClassName('images');

    if (index > images.length) {
        imgIndex = 1;
    }

    if (index < 1) {
        imgIndex = images.length;
    }

    for (let i = 0; i < images.length; i++) {
        images[i].style.display = 'none';
        selectors[i].classList.remove('active');
    }

    images[imgIndex - 1].style.display = 'block';
    selectors[imgIndex - 1].classList.add('active');
}

const nextBtn = document.getElementById('next');
nextBtn.addEventListener('click', () => slide(1));

const prevBtn = document.getElementById('prev');
prevBtn.addEventListener('click', () => slide(-1));

for (let i = 0; i < selectors.length; i++) {
    selectors[i].addEventListener('click', () => currentSlide(i + 1));
}