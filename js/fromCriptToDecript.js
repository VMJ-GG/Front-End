function ChangeText() {
  var element = document.getElementById('buttonCriptDecript');

  if (element.innerHTML === '<span>Decripta</span><i class="material-icons" >keyboard_arrow_left</i>')
    element.innerHTML = '<span>Cripta</span><i class="material-icons">keyboard_arrow_right</i>';
  else {
      element.innerHTML = '<span>Decripta</span><i class="material-icons" >keyboard_arrow_left</i>';
  }
}
