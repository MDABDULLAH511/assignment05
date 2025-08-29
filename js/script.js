// ==========01. Heart Count Functionality ==========

let heartCount = 0;
const heartCountNumber = document.getElementById('heart-count');
const hearts = document.getElementsByClassName('heart');

for (const heart of hearts) {
    heart.addEventListener('click', function (e) {
        heartCount++;
        heartCountNumber.innerText = heartCount;

    });
}