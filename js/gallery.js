function initGallery() {
    console.log("Page Loaded - Gallery Initialized");

    const images = document.querySelectorAll('.gallery img');

    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute('tabindex', '0');
        console.log('tabindex added to image  ${i}');

        images[i].addEventListener('mouseover', function () {
            this.style.border = '5px solid blue';
            console.log('Mouse over image  ${i}');
        });
        images[i].addEventListener('mouseout', function () {
            this.style.border = 'none';
            console.log('Mouse out from image  ${i}');
        });
        images[i].addEventListener('focus', function () {
            this.style.border = '5px solid blue';
            console.log('Focus on image  ${i}');
        });
        images[i].addEventListener('blur', function () {
            this.style.border = 'none';
            console.log('Blur from image  ${i}');
        });
    }
}