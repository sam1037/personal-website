
document.addEventListener("DOMContentLoaded", (event) => {
    const hamburger = document.querySelector(".hamburger");
    const nav_menu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", ()=>{
        hamburger.classList.toggle("active");
        nav_menu.classList.toggle("active");
    })

    //remove active class once a link is clicked
    document.querySelectorAll(".nav-link").forEach(
        n => n.addEventListener("click", ()=>{
            hamburger.classList.remove("active");
            nav_menu.classList.remove("active");
            setTimeout(()=>{}, 1000);
        })
    )
    document.querySelector(".nav-logo").addEventListener("click", ()=>{
        hamburger.classList.remove("active");
        nav_menu.classList.remove("active");
        setTimeout(()=>{}, 1000);
    })
});