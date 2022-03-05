//-----------NAV FUNCTIONS-----------
function burgerToggle(){
    let burger = document.querySelector('.burger');
    
    burger.addEventListener("click", () => {
        
        let line1 = document.querySelector('.line-1');
        let line2 = document.querySelector('.line-2');
        let line3 = document.querySelector('.line-3');

        let navLinks = document.querySelector(".nav-links");
        
        //BUGER LINES

        if(!line1.classList.contains("line-1-toggle")){
            line1.classList.toggle("line-1-toggle");
        }else{
            line1.classList.remove("line-1-toggle");
        }

        if(!line2.classList.contains("line-2-toggle")){
            line2.classList.toggle("line-2-toggle");
        }else{
            line2.classList.remove("line-2-toggle");
        }

        if(!line3.classList.contains("line-3-toggle")){
            line3.classList.toggle("line-3-toggle");
        }else{
            line3.classList.remove("line-3-toggle");
        }

        //NAV MENU

        if(!navLinks.classList.contains("responsive-nav-menu-on")){
            navLinks.classList.toggle("responsive-nav-menu-on");
        }else{
            navLinks.classList.remove("responsive-nav-menu-on");
        }

    });    
}

burgerToggle();

//-----------IMAGE SLIDER FUNCTIONS-----------


let sliderImages = new Array("/WebSite/Images/slider-image1.JPG", "/WebSite/Images/slider-image2.JPG", "/WebSite/Images/slider-image3.JPG");
let imageIndex = 0;
let currentImageIndex = imageIndex;
let sliderImage = document.querySelector(".slider-image");
sliderImage.style.backgroundImage = "url(" + sliderImages[imageIndex] + ")";

function setCurrentSlideIndex(currentPosition, newPosition){
    currentPosition++;
    newPosition++;
    
    let currentIndex = document.querySelector(".current-slider-index");
    let newIndex = document.querySelector(".index-button-" + newPosition);

    currentIndex.classList.remove("current-slider-index");
    newIndex.classList.add("current-slider-index");
}

function leftSwap(){
    let currentIndex = imageIndex+1;

    if(imageIndex == 0){
        imageIndex = sliderImages.length - 1;
    }else{
        imageIndex--;
    }

    sliderImage.style.backgroundImage = "url(" + sliderImages[imageIndex] + ")";

    setCurrentSlideIndex(currentIndex, imageIndex);
}

function rightSwap(){
    let currentIndex = imageIndex+1;

    if(imageIndex == sliderImages.length - 1){
        imageIndex = 0;
    }else{
        imageIndex++;
    }

    sliderImage.style.backgroundImage = "url(" + sliderImages[imageIndex] + ")";

    setCurrentSlideIndex(currentIndex, imageIndex);
}

function leftIndexClick(){
    let currentIndex = imageIndex+1;

    imageIndex = 0;
    sliderImage.style.backgroundImage = "url(" + sliderImages[imageIndex] + ")";

    setCurrentSlideIndex(currentIndex, imageIndex);
}

function middleIndexClick(){
    let currentIndex = imageIndex+1;

    imageIndex = 1;
    sliderImage.style.backgroundImage = "url(" + sliderImages[imageIndex] + ")";

    setCurrentSlideIndex(currentIndex, imageIndex);
}

function rightIndexClick(){
    let currentIndex = imageIndex+1;

    imageIndex = 2;
    sliderImage.style.backgroundImage = "url(" + sliderImages[imageIndex] + ")";

    setCurrentSlideIndex(currentIndex, imageIndex);
}