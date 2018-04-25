/*  Instantiate clipboard by passing a HTML element */

    var btn = document.getElementById('btn-cesare');
    var clipboard = new ClipboardJS(btn);
    clipboard.on('success', function(e) {
        console.log(e);
    });
    clipboard.on('error', function(e) {
        console.log(e);
    });
