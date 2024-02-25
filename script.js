const share = document.querySelector(".share");
const popup = document.querySelector(".share-box");

share.addEventListener("click", function() {
    if(popup.style.opacity === "0" || popup.style.opacity === "") {
        popup.style.opacity = "1";
    } else {
        popup.style.opacity = "0";
    }
})