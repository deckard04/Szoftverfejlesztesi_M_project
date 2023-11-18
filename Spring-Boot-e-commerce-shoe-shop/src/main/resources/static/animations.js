var sidebarContents;

function onload() {
    sidebarContents = document.getElementsByClassName("sidebar-content");
    for (let i = 0; i < sidebarContents.length; i++) {
        sidebarContents[i].clicked = false;
    }
}

function closeContent() {
    for (let i = 0; i < sidebarContents.length; i++) {
        sidebarContents[i].addEventListener("click", function () {
            if (!this.clicked) {
                this.style.height = "45px";
                this.clicked = true;
            } else {
                this.style.height = "auto";
                this.clicked = false;
            }
        });
    }
}


onload();
closeContent();