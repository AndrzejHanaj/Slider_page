class Slider {
    constructor(images){
        this.images = images;
        this.slide = null;
        this.prevBtn = null;
        this.nextBtn = null;
        this.image = null;

        this.UiSelectors = {
            slide: '[data-slide]',
            buttonPrev: '[data-button-prev]',
            buttonNext: '[data-button-next]'
        };
    }

    initializeSlider(){
        console.log('slider');
        this.slide = document.querySelector(this.UiSelectors.slide);
        this.prevBtn = document.querySelector(this.UiSelectors.buttonPrev);
        this.nextBtn = document.querySelector(this.UiSelectors.buttonNext);
        const figure = document.getElementsByTagName('figure');

        this.image = document.createElement('img');
        this.image.setAttribute('src', this.images[0]);

       this.slide.appendChild(this.image);
    }
}

// console.log('jaujass', new Slider());