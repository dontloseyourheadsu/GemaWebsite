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

//-----------CARD INFORMATION FUNCTIONS-----------

let isExpanded = false;
let hiddenCard1 = document.querySelector("#hidden1");
let hiddenCard2 = document.querySelector("#hidden2");
let hiddenCard3 = document.querySelector("#hidden3");
let hiddenCard4 = document.querySelector("#hidden4");

function showCards(){
    let infoCardsButton = document.querySelector("#info-cards-button");

    if(!isExpanded){
        hiddenCard1.style.display = "block";
        hiddenCard2.style.display = "block";
        hiddenCard3.style.display = "block";
        hiddenCard4.style.display = "block";

        infoCardsButton.innerHTML = "Ocultar";
        isExpanded = true;
    } else{
        hiddenCard1.style.display = "none";
        hiddenCard2.style.display = "none";
        hiddenCard3.style.display = "none";
        hiddenCard4.style.display = "none";

        infoCardsButton.innerHTML = "Expandir";
        isExpanded = false;
    }
}

//-----------SCHEDULE FORM FUNCTIONS-----------
function getScheduleInfo(){
    let patientName = document.querySelector("#name");
    let patientPhone = document.querySelector("#phone");
    let scheduleDate = document.querySelector("#date");
    let scheduleHour = document.querySelector("#hour");
    
    console.log(patientName.value);
    console.log(patientPhone.value);
    console.log(scheduleDate.value);
    console.log(scheduleHour.value);
    //Todos los datos son String
    validatePhone(patientPhone.value);
    validateName(patientName.value);
}

function validatePhone(phone){
    if(phone == ""){
        alert("Llena todos los campos");
        return false;
    }

    let phoneRegex = /^\d{10}$/;

    if(phoneRegex.test(phone)){
        return true;
    }else{
        alert("El teléfono debe tener 10 dígitos, código internacional México");
        return false;
    }
}

function validateName(name){
    if(name == ""){
        alert("Llena todos los campos");
        return false;
    }

    let nameRegex = /^[a-zA-Z\s]*$/;

    if(nameRegex.test(name)){
        return true;
    }else{
        alert("El nombre solo puede contener letras y espacios");
        return false;
    }
}

function validateDate(date){
    if(date == ""){
        alert("Llena todos los campos");
        return false;
    }
    
    let dateRegex = /^\d{4}-\d{2}-\d{2}$/;

    if(dateRegex.test(date)){
        
    }else{
        alert("La fecha debe tener el formato AAAA-MM-DD");
        return false;
    }
}
