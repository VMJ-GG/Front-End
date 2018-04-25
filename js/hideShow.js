function hideShow(i) {
    var x = document.getElementById("hide-"+i);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


$(document).ready(function(){
	$('.arrow-hide').addClass("visible");

	$('.arrow-hide').click(function() {
		var $this = $(this);

		if ($this.hasClass("visible")) {
			$(this).removeClass("visible").addClass("hidden");

		} else {
			$(this).removeClass("hidden").addClass("visible");
		}
	});
});
