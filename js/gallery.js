function initGallery() {
    console.log("Page Loaded - Gallery Initialized");

    const images = document.querySelectorAll('.gallery img');
    const largeImg = document.getElementById('large-img');
    const defaultImage = largeImg.src;
    const defaultAlt = largeImg.alt;

    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute('tabindex', '0');
        console.log('tabindex added to image  ${i}');

        images[i].addEventListener('mouseover', function () {
            this.style.border = '5px solid blue';
            console.log('Mouse over image  ${i}');
            largeImg.src = this.src;
            largeImg.alt = this.alt;
        });
        images[i].addEventListener('mouseout', function () {
            this.style.border = 'none';
            console.log('Mouse out from image  ${i}');
            largeImg.src = defaultImage;
            largeImg.alt = defaultAlt;
        });
        images[i].addEventListener('focus', function () {
            this.style.border = '5px solid blue';
            console.log('Focus on image  ${i}');
            largeImg.src = this.src;
            largeImg.alt = this.alt;
        });
        images[i].addEventListener('blur', function () {
            this.style.border = 'none';
            console.log('Blur from image  ${i}');
            largeImg.src = defaultImage;
            largeImg.alt = defaultAlt;
        });
    }
}