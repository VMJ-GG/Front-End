function ChangeText() {
    var element = document.getElementById('buttonCriptDecript');

        if (element.innerHTML === 'Criptazione<i class="material-icons">keyboard_arrow_right</i>') element.innerHTML = 'Decriptazione<i class="material-icons" >keyboard_arrow_left</i>';
        else {
            element.innerHTML = 'Criptazione<i class="material-icons">keyboard_arrow_right</i>';
        }

}
