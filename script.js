/* ===========================
   PORTFOLIO JAVASCRIPT
=========================== */

// ===========================
// Navbar Shadow on Scroll
// ===========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "rgba(255,255,255,0.95)";
        header.style.boxShadow = "0 10px 25px rgba(0,0,0,0.10)";

    }

    else {

        header.style.background = "rgba(255,255,255,0.75)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,0.08)";

    }

});



// ===========================
// Fade Animation
// ===========================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});



const hiddenElements=document.querySelectorAll(

".section-header,.about-text,.interest-card,.skill-category,.project-card,.journey-card,.contact-card"

);

hiddenElements.forEach(el=>{

    el.classList.add("hidden");

    observer.observe(el);

});



// ===========================
// Active Navbar Link
// ===========================

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop-150;

        const sectionHeight=section.clientHeight;

        if(scrollY>=sectionTop){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});



// ===========================
// Button Ripple Effect
// ===========================

const buttons=document.querySelectorAll(

".btn-primary,.btn-secondary"

);

buttons.forEach(button=>{

    button.addEventListener("mouseenter",()=>{

        button.style.transform="translateY(-4px)";

    });

    button.addEventListener("mouseleave",()=>{

        button.style.transform="translateY(0px)";

    });

});



// ===========================
// Profile Card Hover
// ===========================

const profile=document.querySelector(".profile-card");

profile.addEventListener("mousemove",(e)=>{

    const rect=profile.getBoundingClientRect();

    const x=e.clientX-rect.left;

    const y=e.clientY-rect.top;

    const rotateY=(x-rect.width/2)/25;

    const rotateX=(rect.height/2-y)/25;

    profile.style.transform=

    `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

});

profile.addEventListener("mouseleave",()=>{

    profile.style.transform="rotateX(0deg) rotateY(0deg)";

});



// ===========================
// Current Year
// ===========================

const year=document.querySelector(".copyright");

if(year){

    year.innerHTML=`© ${new Date().getFullYear()} Avni Gupta. All Rights Reserved.`;

}

console.log("Portfolio Loaded Successfully 🚀");