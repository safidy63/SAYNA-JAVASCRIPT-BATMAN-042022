//menu
let menu = document.querySelectorAll(".nav .nav-item");
menu.forEach(men => {
    men.addEventListener("mouseover", () => {
        men.style.textDecoration = "underline";
        men.style.fontWeight = "800";
        men.style.color = "white";

    })
});

menu.forEach(men => {
    men.addEventListener("mouseout", () => {
        men.style.textDecoration = "none";
        men.style.fontWeight = "400";
        men.style.color = "white";
    })
});

//fade in  

//titre
let title = document.querySelectorAll(".h1")
for (let i = 0; i < title.length; i++) {
    title[i].classList.add("sliders")

}

//paragraphe
let para = document.querySelectorAll(".more")
for (let i = 0; i < para.length; i++) {
    para[i].classList.add("slidets")

}


//image

let image = document.querySelectorAll(".moves")
for (let i = 0; i < image.length; i++) {
    image[i].classList.add("slider")

}

/*card*/

let all_card = document.querySelectorAll(".card")
all_card.forEach(card => {
    card.addEventListener("mouseover", () => {
        card.style.transform = "scale(1.2)";
        card.style.marginTop = "4%";
        card.querySelector(".cardy").style.display = "block";
    })
});

all_card.forEach(card => {
    card.addEventListener("mouseout", () => {
        card.style.transform = "scale(1)";
        card.style.marginTop = "0%";
        card.querySelector(".cardy").style.display = "none";
    })
});


//pop up du carte

let popup = document.getElementById("vise");
let hide = document.getElementsByClassName("dive");
let confirm = document.getElementById("btns");
let form = document.getElementById("form");
form.onsubmit = function(e) {
    pop(e)
}


function pop(e) {
    e.preventDefault()
    popup.classList.add("open");
    hide.style.display = "none";
}

//button
let all_button = document.querySelectorAll("button");
all_button.forEach(button => {
    button.addEventListener("mouseover", () => {
        button.style.opacity = "100%";
        button.style.transform = "scale(1.1)";
        button.style.color = "white"
    })
});

all_button.forEach(button => {
    button.addEventListener("mouseout", () => {
        button.style.opacity = "100%";
        button.style.transform = "scale(1)";
    })
});

// slider des image et quotation
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000);
};

/*slider2*/

let slideIndexs = 1;
showSlidess(slideIndexs);

function plusSlides(n) {
    showSlidess(slideIndexs += n);
    showSlidesss(slideIndexss += n);
}

function currentSlide(n) {
    showSlidess(slideIndexs = n);
    showSlidesss(slideIndexss = n);
}

function showSlidess(n) {
    let i;
    let slidess = document.getElementsByClassName("mySlides1");
    if (n > slidess.length) { slideIndexs = 1 }
    if (n < 1) { slideIndexs = slidess.length }
    for (i = 0; i < slidess.length; i++) {
        slidess[i].style.display = "none";
    }

    slidess[slideIndexs - 1].style.display = "block";

}

/*slider3*/

let slideIndexss = 1;
showSlidesss(slideIndexss);

function showSlidesss(n) {
    let i;
    let slidesss = document.getElementsByClassName("mySlides3");
    if (n > slidesss.length) { slideIndexss = 1 }
    if (n < 1) { slideIndexss = slidesss.length }
    for (i = 0; i < slidesss.length; i++) {
        slidesss[i].style.display = "none";
    }

    slidesss[slideIndexs - 1].style.display = "block";

}

//slide3

let slideIndext = 0;
showSlidest();

function showSlidest() {
    let i;
    let slidea = document.getElementsByClassName("mySlides2");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slidea.length; i++) {
        slidea[i].style.display = "none";
    }
    slideIndext++;
    if (slideIndext > slidea.length) { slideIndext = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slidea[slideIndext - 1].style.display = "block";
    dots[slideIndext - 1].className += " active";
    setTimeout(showSlidest, 2000); // Change image every 2 seconds
}

//choix et cliquer les button
let choix = document.querySelectorAll(".mob button")
choix.forEach(bit => {
    bit.addEventListener("mouseover", () => {
        bit.style.background = " linear-gradient(to right bottom, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)";

    })
});

choix.forEach(bit => {
    bit.addEventListener("mouseout", () => {
        bit.style.background = "transparent"
    })
});


// scroll du page


function apparaitre(element) {
    const debut = element.getBoundingClientRect().top;
    return debut <= window.innerHeight
}

function addClass(element, className) {
    element.classList.add(className)
}

function removeClass(element, className) {
    element.classList.remove(className)
}


function AnimScroll(tabListe, Class) {
    tabListe.forEach(element => {
        if (apparaitre(element)) {
            addClass(element, Class)
        } else {
            removeClass(element, Class)
        }
    });
};

window.addEventListener('scroll', () => {
    AnimScroll(title, 'sliders')
    AnimScroll(para, 'slidets')
    AnimScroll(image, 'slider')
})
