
document.addEventListener("DOMContentLoaded", (event) => {
    const heightLimitVh = 80; // Set the height limit in viewport height (vh)
    const heightLimitPx = window.innerHeight * (heightLimitVh / 100); // Convert vh to pixels

    const hamburger = document.querySelector(".hamburger");
    const nav_menu = document.querySelector(".nav-menu");
    const body = document.querySelector("body");

    hamburger.addEventListener("click", ()=>{
        hamburger.classList.toggle("active");
        nav_menu.classList.toggle("active");
        body.classList.toggle("active");
    })

    //remove active class once a link is clicked
    document.querySelectorAll(".nav-link").forEach(
        n => n.addEventListener("click", ()=>{
            hamburger.classList.remove("active");
            nav_menu.classList.remove("active");
            body.classList.remove("active");
            setTimeout(()=>{}, 1000);
        })
    )
    document.querySelector(".nav-logo").addEventListener("click", ()=>{
        hamburger.classList.remove("active");
        nav_menu.classList.remove("active");
        body.classList.remove("active");
        setTimeout(()=>{}, 1000);
    })

    //add show more btn to sections over a certain height limit
    document.querySelectorAll("section").forEach(section => {
        //check height
        if (section.scrollHeight < heightLimitPx) {
            return;
        }
        //create the show more btn element and append it
        const showMoreBtn = document.createElement('div');
        showMoreBtn.className = 'show-more';
        showMoreBtn.textContent = 'Show More';

        section.insertAdjacentElement('afterend', showMoreBtn);

        //add hide extra class to the section
        section.classList.add("hide-extra");

        //event listener for the show more btn
        showMoreBtn.addEventListener('click', function() {
            section.style.maxHeight = section.scrollHeight + 'px';
            this.remove();
        });
    })

});