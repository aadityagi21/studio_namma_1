const navbar = document.querySelector(".navbar");
let darkModeVar = false;

createNavbar();

function createNavbar() {
    let headingDiv = document.createElement("div");
    headingDiv.setAttribute("class", "navbarHeadingDiv h1Div");

    let heading = document.createElement("h1");
    heading.innerText = "STUDIO NAMMA";
    heading.setAttribute("class", "navbarHeading h1");

    headingDiv.appendChild(heading);


    let themeDiv = document.createElement("div");
    themeDiv.setAttribute("class", "navbarThemeDiv h1Div");

    let themeh1 = document.createElement("h1");
    themeh1.innerText = "DARK \u00A0 MODE";
    themeh1.setAttribute("class", "navbarThemeh1 h1");

    themeDiv.appendChild(themeh1);


    let menuDiv = document.createElement("div");
    menuDiv.setAttribute("class", "navbarMenuDiv h1Div");

    let menuh1 = document.createElement("h1");
    menuh1.innerText = "MENU";
    menuh1.setAttribute("class", "navbarMenuh1 h1");

    menuDiv.appendChild(menuh1);


    let menuPage = document.createElement("div");
    menuPage.setAttribute("class", "menuPage");
    document.querySelector("body").append(menuPage);

    let menuPage_Array = [
        {
            name: "HOME",
            video: "../videos/Eminem.mp4"
        },
        {
            name: "WORK",
            video: "../videos/Eminem.mp4"
        },
        {
            name: "SERVICES",
            video: "../videos/Eminem.mp4"
        },
        {
            name: "APPROACH",
            video: "../videos/Eminem.mp4"
        },
        {
            name: "STUDIO",
            video: "../videos/Eminem.mp4"
        }
    ]

    let i = 0;

    menuPage_Array.forEach((element) => {

        let box = document.createElement("div");
        box.setAttribute("class", `box_${i} box`);

        let menuPage_h1 = document.createElement("h1");
        menuPage_h1.innerText = element.name;
        menuPage_h1.setAttribute("class", `menuPage_h1_${i} menuPage_h1`);


        let video = document.createElement("div");
        video.setAttribute("class", `video${i} video`);

        let video_real = document.createElement("video");
        video_real.setAttribute("class", "video_real");

        video_real.src = element.video;
        video_real.autoplay = true;
        video_real.loop = true;
        video_real.muted = true;
        video_real.playsInline = true;

        video.append(video_real);


        box.addEventListener("mouseenter", () => {
            video.classList.remove("animation_video_rev");
            video.classList.add("animation_class");
            video.style.width = "200px";
            video_real.muted = false;
        })


        box.addEventListener("mouseleave", () => {
            video.classList.remove("animation_class");
            video.classList.add("animation_video_rev");
            video.style.width = "0px";
            video_real.muted = true;
        })


        i++;

        box.append(video);
        box.append(menuPage_h1);
        menuPage.append(box);
    })


    let letstalkDiv = document.createElement("div");
    letstalkDiv.setAttribute("class", "navbarLetstalkDiv h1Div");

    let letsTalkh1 = document.createElement("h1");
    letsTalkh1.innerText = "LET'S \u00A0 TALK !"
    letsTalkh1.setAttribute("class", "navbarLetstalkh1 h1");

    letstalkDiv.appendChild(letsTalkh1);

    navbar.append(headingDiv, themeDiv, menuDiv, letstalkDiv);


    // ==========================================
    // CONTACT PAGE - OPEN
    // ==========================================

    letstalkDiv.addEventListener("click", () => {
        createContactPage();
    });


    document.querySelectorAll(".h1").forEach((h1) => {

        h1.addEventListener("mouseenter", () => {

            h1.classList.add("heading_animation");

            if (h1.classList.contains("navbarMenuh1")) {
                menuFun(h1);
            }

            else if (h1.classList.contains("navbarLetstalkh1")) {
                letstalkFun(h1);
            }

        });


        h1.addEventListener("mouseleave", () => {

            h1.classList.remove("heading_animation");

            if (h1.classList.contains("navbarMenuh1")) {
                menuSecFun(h1);
            }

            else if (h1.classList.contains("navbarLetstalkh1")) {
                letstalkSecFun(h1);
            }

            setTimeout(() => {
                h1.classList.add("heading_animation");
            }, 100);

            setTimeout(() => {
                h1.classList.remove("heading_animation");
            }, 500);

        });

    });


    themeDiv.addEventListener("click", () => {

        if (darkModeVar == false) {
            darkMode(themeh1);
        }

        else {
            lightMode(themeh1);
        }

    });


    let menuFlag = false;

    menuDiv.addEventListener("click", () => {

        if (menuFlag == false) {
            openMenuPage();
            menuFlag = true;
        }

        else {
            closeMenuPage();
            menuFlag = false;
        }

    })

}


function menuFun(h1) {

    setTimeout(() => {
        h1.innerText = "OPEN";
    }, 400)

}


function menuSecFun(h1) {

    setTimeout(() => {
        h1.innerText = "MENU";
    }, 400)

}


function letstalkFun(h1) {

    setTimeout(() => {
        h1.innerText = "CONTACT \u00A0 US";
    }, 200)

}


function letstalkSecFun(h1) {

    setTimeout(() => {
        h1.innerText = "LET'S \u00A0 TALK !";
    }, 300)

}


function darkMode(themeh1) {

    themeh1.innerText = "LIGHT MODE";
    darkModeVar = true;

    navbar.style.background = "#000";

    document.querySelectorAll(".h1").forEach((h1) => {
        h1.style.color = "#fff";
    })

}


function lightMode(themeh1) {

    themeh1.innerText = "DARK MODE";
    darkModeVar = false;

    navbar.style.background = "#fff";

    document.querySelectorAll(".h1").forEach((h1) => {
        h1.style.color = "#000";
    })

}


function openMenuPage() {

    setTimeout(() => {
        document.querySelector(".navbarMenuh1").innerText = "Close";
    }, 200)

    let menuPage = document.querySelector(".menuPage");

    menuPage.style.display = "block";

}


function closeMenuPage() {

    setTimeout(() => {
        document.querySelector(".navbarMenuh1").innerText = "OPEN";
    }, 200)

    let menuPage = document.querySelector(".menuPage");

    menuPage.style.display = "none";

}


/* ========================================================= */
/*                    CONTACT PAGE                           */
/* ========================================================= */


function createContactPage() {

    // Prevent duplicate contact pages
    if (document.querySelector(".contactPage")) {
        return;
    }


    let contactPage = document.createElement("div");
    contactPage.setAttribute("class", "contactPage");


    /* =========================
       LET'S WORK
       ========================= */

    let letsWork = document.createElement("h1");

    letsWork.innerText = "LET'S WORK";

    letsWork.setAttribute(
        "class",
        "contactLetsWork"
    );


    /* =========================
       TOGETHER DIV
       ========================= */

    let togetherDiv = document.createElement("div");

    togetherDiv.setAttribute(
        "class",
        "contactTogetherDiv"
    );


    /* =========================
       VIDEO
       ========================= */

    let videoDiv = document.createElement("div");

    videoDiv.setAttribute(
        "class",
        "contactVideo"
    );


    let video = document.createElement("video");

    video.setAttribute(
        "class",
        "contactVideoReal"
    );

    video.src = "../videos/Eminem.mp4";

    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.playsInline = true;


    videoDiv.append(video);


    /* =========================
       TOGETHER
       ========================= */

    let together = document.createElement("h1");

    together.innerText = "TOGETHER";

    together.setAttribute(
        "class",
        "contactTogether"
    );


    togetherDiv.append(
        videoDiv,
        together
    );


    contactPage.append(
        letsWork,
        togetherDiv
    );


    /* =========================
       CLOSE
       ========================= */

    let close = document.createElement("div");

    close.innerText = "CLOSE";

    close.setAttribute(
        "class",
        "contactClose"
    );


    close.addEventListener("click", () => {

        contactPage.remove();

    });


    contactPage.append(close);


    /* =========================
       FORM
       ========================= */

    let contactForm = document.createElement("div");

    contactForm.setAttribute(
        "class",
        "contactForm"
    );


    /* =========================
       NAME
       ========================= */

    let nameRow = document.createElement("div");

    nameRow.setAttribute(
        "class",
        "contactRow"
    );


    let nameLabel = document.createElement("label");

    nameLabel.innerText = "NAME";


    let nameInput = document.createElement("input");

    nameInput.type = "text";

    nameInput.placeholder = "CHUCK NORRIS";


    nameRow.append(
        nameLabel,
        nameInput
    );


    /* =========================
       EMAIL
       ========================= */

    let emailRow = document.createElement("div");

    emailRow.setAttribute(
        "class",
        "contactRow"
    );


    let emailLabel = document.createElement("label");

    emailLabel.innerText = "EMAIL";


    let emailInput = document.createElement("input");

    emailInput.type = "email";

    emailInput.placeholder =
        "WALKER@TEXAS-RANGERS.COM";


    emailRow.append(
        emailLabel,
        emailInput
    );


    /* =========================
       PHONE
       ========================= */

    let phoneRow = document.createElement("div");

    phoneRow.setAttribute(
        "class",
        "contactRow"
    );


    let phoneLabel = document.createElement("label");

    phoneLabel.innerText = "PHONE";


    let phoneInput = document.createElement("input");

    phoneInput.type = "text";

    phoneInput.placeholder = "XXXXXXXXXX";


    phoneRow.append(
        phoneLabel,
        phoneInput
    );


    /* =========================
       INTEREST
       ========================= */

    let interestRow = document.createElement("div");

    interestRow.setAttribute(
        "class",
        "contactRow"
    );


    let interestLabel = document.createElement("label");

    interestLabel.innerText = "INTEREST";


    let interests = document.createElement("div");

    interests.setAttribute(
        "class",
        "interests"
    );


    let design = document.createElement("button");

    design.innerText = "DESIGN";


    let webflow = document.createElement("button");

    webflow.innerText =
        "WEBFLOW DEVELOPMENT";


    let fullPackage = document.createElement("button");

    fullPackage.innerText =
        "FULL PACKAGE";


    interests.append(
        design,
        webflow,
        fullPackage
    );


    interestRow.append(
        interestLabel,
        interests
    );


    contactForm.append(
        nameRow,
        emailRow,
        phoneRow,
        interestRow
    );


    contactPage.append(contactForm);


    /* =========================
       ADD CONTACT PAGE
       ========================= */

    document.body.append(contactPage);


    /* =========================
       TOGETHER VIDEO HOVER
       ========================= */

    together.addEventListener("mouseenter", () => {

        videoDiv.style.width = "160px";

        video.play();

    });

}