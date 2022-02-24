function burgerToggle(){
    let burger = document.querySelector('.burger');
    
    burger.addEventListener("click",() => {
        
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


//Functions call
function tiempoDeSites(){
    burgerToggle();
}

tiempoDeSites();