const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('.navbar .navbar-part1 ul li')
const navLi2 = document.querySelectorAll('.navbar .navbar-part3 ul li')

window.addEventListener('scroll', function () {
    let nav = document.getElementById("nav")
    let windowscroll = window.scrollY > 400;
    if (windowscroll) {
        nav.classList.add('navbar-scroll');
    } else {
        nav.classList.remove("navbar-scroll");
    }

    let current = '';
    // console.log(pageYOffset);
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        // console.log(sectionTop);
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    })
    // console.log(current);

    navLi.forEach(li => {
        li.classList.remove('active');
        if (li.classList.contains(current)) {
            li.classList.add('active')
        }
    })
    navLi2.forEach(li => {
        li.classList.remove('active');
        if (li.classList.contains(current)) {
            li.classList.add('active')
        }
    })
})

// window.addEventListener("scroll",()=>{let s="";sections.forEach(t=>{const a=t.offsetTop,i=t.clientHeight;pageYOffset>=a-i/3&&(s=t.getAttribute("id"))}),navLi.forEach(t=>{t.classList.remove("active"),t.classList.contains(s)&&t.classList.add("active")}),navLi2.forEach(t=>{t.classList.remove("active"),t.classList.contains(s)&&t.classList.add("active")})});


function myFunction() {
    document.getElementById("myTopNav").style.display = "block";
}

function myCloseFunction() {
    document.getElementById("myTopNav").style.display = "none";
}
