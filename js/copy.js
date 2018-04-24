function copyTextCesare(element) {
  var copyText = document.getElementById("cesare");
  copyText.select();
  document.execCommand("Copy");
  alert("Copied the text: " + copyText.value);
}

function copyTextAtbash(element) {
  var copyText = document.getElementById("atbash");
  copyText.select();
  document.execCommand("Copy");
  alert("Copied the text: " + copyText.value);
}
