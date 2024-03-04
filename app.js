
document.addEventListener("DOMContentLoaded", (event) => {
    //alert("DOM fully loaded and parsed");
    let hamBtn = document.getElementById("hamburger-button");
    hamBtn.value = 'Off';
    hamBtn.onclick = () => {
        toggleMenu(hamBtn);
    }
});


//toggle the menu on and off
function toggleMenu(hamBtn){
    alert("toggling menu!");
    //alert(`btn value b4 changing: ${hamBtn.value}`);
    
    if (hamBtn.value == "ON"){
        hamBtn.value = "Off";
        //modify the layout to display the mobile menu
    }
    else{
        hamBtn.value = "On";
        //modify the layout to close the mobile menu
    }
}


