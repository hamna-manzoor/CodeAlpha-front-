let currentIndex = 0;
const images = [
    'c5.jpg',
    'c6.jpg',
    'c7.jpg',
    'c1.jpeg',
    'c2.jpg',
    'c3.avif',
    'c9.webp',
    'f1.avif',
    'f2.jpg',
    'f3.avif',
    'f4.jpeg',
    'b1.jpg'

];

function changeImage(step) {
    currentIndex += step;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    document.getElementById('current-img').src = images[currentIndex];
}

function showImage(imageUrl) {
    document.getElementById('current-img').src = imageUrl;
    currentIndex = images.indexOf(imageUrl);
}
