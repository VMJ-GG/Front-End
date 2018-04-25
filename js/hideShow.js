function hideShow() {
    var x = document.getElementById("cesare");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


$(document).ready(function(){
	$('.text_container').addClass("visible");

	$('.text_container').click(function() {
		var $this = $(this);

		if ($this.hasClass("visible")) {
			$(this).removeClass("visible").addClass("hidden");

		} else {
			$(this).removeClass("hidden").addClass("visible");
		}
	});
});
