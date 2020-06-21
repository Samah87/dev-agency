//check if there is local storage color option

let maincoloes = localStorage.getItem("option-colors");

console.log(maincoloes);

if (maincoloes !== null) {

    document.documentElement.style.setProperty('--main-color', maincoloes);

    //remove class active von All li
    document.querySelectorAll(".color-list li").forEach(element => {

        element.classList.remove("active");

        if (element.dataset.color === maincoloes) {

            element.classList.add("active");
        }

    });


}
// variable background option 

let backgroundOption = true;

//variable to control the interval

let theinterval;

let backgroundstorge = localStorage.getItem("Optionbox");


if (backgroundstorge !== null) {

    if (backgroundstorge === "true") {

        backgroundstorge = true;

    } else {

        backgroundstorge = false;

    }


    //remove class active von All span

    document.querySelectorAll(".Optionbox span").forEach(element => {

        element.classList.remove("active");

    });

    if (backgroundstorge === "true") {

        document.querySelector(".Optionbox .yes").classList.add('active');
    } else {
        document.querySelector(".Optionbox .no").classList.add('active');

    }



}

// toggle Spin Class on Icon
document.querySelector(".toggle-setting .fa-gear").onclick = function () {

    //toggle class fa-spin for rotation on self
    this.classList.toggle("fa-spin");

    //toggle class open on main setting-box
    document.querySelector(".setting-box").classList.toggle("open");
};

//Switch Colors
const colorlist = document.querySelectorAll(".color-list li");

colorlist.forEach(li => {

    li.addEventListener("click", (e) => {

        //set color On root

        document.documentElement.style.setProperty('--main-color', e.target.dataset.color);

        //

        localStorage.setItem("option-colors", e.target.dataset.color);

        //remove class Active

        handelactive(e);


    })
})

// background randum stop

const backrandom = document.querySelectorAll(".random span");

backrandom.forEach(span => {

    span.addEventListener("click", (e) => {

        handelactive(e);

        if (e.target.dataset.background === "yes") {

            backgroundOption = true;

            randomize();

            localStorage.setItem("Optionbox", true);


        } else {

            backgroundOption = false;

            clearInterval(theinterval);

            localStorage.setItem("Optionbox", false);

        }
    })


});




let landingpage = document.querySelector(".landing-page");

let imgsArray = ["foto1.jpg", "foto3.jpg", "foto4.jpg", "foto5.jpg", "foto2.jpg"];


//function to randomize image

function randomize() {

    if (backgroundOption === true) {


        theinterval = setInterval(() => {

            //Get Random number //

            let randumnumber = Math.floor(Math.random() * imgsArray.length);

            landingpage.style.backgroundImage = "url('images/" + imgsArray[randumnumber] + "')";

        }, 1000)
    }
}

randomize();

// animation skill

let ourskills = document.querySelector(".skills");

window.onscroll = function () {

    //skills ofsetTop

    let skillsetofTop = ourskills.offsetTop;

    //skills outer Height

    let skillsouterheight = ourskills.offsetHeight;

    // window Height

    let windowheigt = this.innerHeight;

    // window scrollTop

    let WindowsrollTop = this.pageYOffset;
    if (WindowsrollTop > (skillsetofTop + skillsouterheight - windowheigt)) {

        let allSkills = document.querySelectorAll(".skil-proggress span");

        allSkills.forEach(skill => {

            skill.style.width = skill.dataset.progress;

        });

    }

};

let ourgallery = document.querySelectorAll(".gallery img");

ourgallery.forEach(img => {

    img.addEventListener('click', (e) => {

        let overlay = document.createElement("div");

        overlay.className = 'popup-overlay';

        document.body.appendChild(overlay);

        //Creat the poppup

        let popupbox = document.createElement("div");

        //add popupbox Class

        popupbox.className = 'popup-box';

        //Creat image

        let popupimg = document.createElement("img");

        //set images source

        popupimg.src = img.src;

        //add image to popup box

        popupbox.appendChild(popupimg);

        //append the popup box to body

        document.body.appendChild(popupbox);

        //creat the span close

        let spanclose = document.createElement('span');

        // creat the closebutton text

        let textbutton = document.createTextNode('x');

        //Add class to spanclose

        spanclose.className = 'closebutton';

        //append text to close button

        spanclose.appendChild(textbutton);

        //append botton to popup-box

        popupbox.appendChild(spanclose);

        spanclose
    });


});

//close popup

document.addEventListener('click', function (e) {

    if (e.target.className == 'closebutton') {

        e.target.parentNode.remove();

        //remove overlay

        document.querySelector('.popup-overlay').remove();
    }
})

//select All Bullets
const allBullets = document.querySelectorAll(".nav-bullets .bullet ");

const alllink = document.querySelectorAll(".links li ");

function scrolltosection(element) {

    element.forEach(ele => {

        ele.addEventListener("click", (e) => {

            e.preventDefault();

            e.stopPropagation();

            document.querySelector(e.target.dataset.section).scrollIntoView({

                behavior: 'smooth'
            });
        })
    });

}
scrolltosection(allBullets);
scrolltosection(alllink);

function handelactive(ev) {

    ev.target.parentElement.querySelectorAll(".active").forEach(element => {

        element.classList.remove("active");

    });

    ev.target.classList.add("active");
};

let bulletsspan = document.querySelectorAll(".bullets-option span");

let bulletcontainer = document.querySelector(".nav-bullets");

bulletsspan.forEach(span => {

    span.addEventListener("click", (e) => {

        if (span.dataset.display === 'show') {

            bulletcontainer.style.display = 'block';

        } else {

            bulletcontainer.style.display = 'none';

        }


        handelactive(e);

    });
});

//reset button

document.querySelector(".reset-option").onclick = function () {


    localStorage.removeItem("option-colors");
    localStorage.removeItem("Optionbox");
    localStorage.removeItem("Optionbox");

    window.location.reload();

};
/* toggle menu */

let togglebtn = document.querySelector(".toggle-menu");
let thelink = document.querySelector(".links");

togglebtn.onclick = function (even) {

    even.stopPropagation();

    this.classList.toggle('menu-active');

    thelink.classList.toggle('open');
};
document.addEventListener("click", (e) => {

    if (e.target !== togglebtn && e.target !== thelink) {

        if (thelink.classList.contains("open")) {

            togglebtn.classList.toggle('menu-active');

            thelink.classList.toggle('open');
        }
    }

});
thelink.onclick = function (even) {

    even.stopPropagation();

}  