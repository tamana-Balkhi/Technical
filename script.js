/**
 *  add event listener for header button.
 *  show and hide sidebar
 */

var button = document.querySelector("#header .button");

button.addEventListener("click", toggleSidebar);


function toggleSidebar() {
    var sidebar = document.querySelector("#navbar");
    var mainDoc = document.querySelector("#main-doc");
    var currentStatus = sidebar.style.display;
    
    if(currentStatus == "none") {
        sidebar.style.display="block";
        // if screen is small do not add margin.
        if(window.innerWidth >= 650) {
            
            mainDoc.style.marginLeft = "250px";
        }

    } else {
        sidebar.style.display="none";
        mainDoc.style.marginLeft = "0px";
    }
}

