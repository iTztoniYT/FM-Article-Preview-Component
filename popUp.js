let shareButton = document.querySelector('.share-button');
let shareArrow = document.querySelector('.share-arrow');
let popUpContainer = document.querySelector('.popUp');


shareButton.addEventListener('click', () => {
    shareButton.classList.toggle('share-button-on-click');
    shareArrow.classList.toggle('share-arrow-popup');
    popUpContainer.classList.toggle('active');
});