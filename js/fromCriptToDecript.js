function ChangeText() {
  var element = document.getElementById('buttonCriptDecript');

  if (element.innerHTML === '<span>Cripta</span><i class="material-icons">keyboard_arrow_right</i>')
    element.innerHTML = '<span>Decripta</span><i class="material-icons" >keyboard_arrow_left</i>';
  else {
      element.innerHTML = '<span>Cripta</span><i class="material-icons">keyboard_arrow_right</i>';
  }
}
