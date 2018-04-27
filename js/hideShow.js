function hideShow(i) {
    var x = document.getElementById("hide-"+i);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
