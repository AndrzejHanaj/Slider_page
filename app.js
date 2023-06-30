class Slider {
    constructor(images){
        this.images = images;
        this.slide = null;
        this.prevBtn = null;
        this.nextBtn = null;
        this.image = null;
        this.currentSlide = 0;

        this.UiSelectors = {
            slide: '[data-slide]',
            buttonPrev: '[data-button-prev]',
            buttonNext: '[data-button-next]'
        };
    }

    initializeSlider(){
        
        this.slide = document.querySelector(this.UiSelectors.slide);
        this.prevBtn = document.querySelector(this.UiSelectors.buttonPrev);
        this.nextBtn = document.querySelector(this.UiSelectors.buttonNext);
        const figure = document.getElementsByTagName('figure');

        this.image = document.createElement('img');
        this.image.classList.add('slide_image');
        this.setSlideAtributes(0);

       this.slide.appendChild(this.image);
       this.addListeners;
    }
    changeSlide(index){
    this.currentSlide = index;
    this.setSlideAtributes(index);

    }

    addListeners(){
        this.prevBtn.addEventListener('click', () => this.changeSlide(this.currentSlide - 1));
        this.nextBtn.addEventListener('click', () => this.changeSlide(this.currentSlide + 1));
    }

    setSlideAtributes(index){
    this.image.setAttribute('src', Array.isArray(this.images) && this.images.length && this.images[index]);
    this.image.setAttribute('alt', `Slide ${index + 1}`);
    }
}
