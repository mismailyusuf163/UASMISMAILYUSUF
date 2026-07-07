// Efek navbar saat scroll
window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if (window.scrollY > 40) {

        header.style.background = "#0b1120";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.5)";

    } else {

        header.style.background = "#111827";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.3)";
    }

});


// Animasi muncul saat scroll

const cards = document.querySelectorAll(".card,.project-card,.timeline");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.animate([
                {
                    opacity: 0,
                    transform: "translateY(50px)"
                },
                {
                    opacity: 1,
                    transform: "translateY(0)"
                }
            ], {
                duration: 700,
                fill: "forwards"
            });

        }

    });

});

cards.forEach(card => observer.observe(card));