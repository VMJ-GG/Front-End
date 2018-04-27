function EnableDisable(x, y) {

  var divOne             = document.getElementById('divOne');
  var buttonOne          = document.getElementById('1');

  var divSecond          = document.getElementById('divSecond');
  var buttonSecond       = document.getElementById('2');


  if (x == 'on')
  {
    if(y == '1')
    {
      divOne.classList.add("disable");
      buttonOne.classList.remove("btn-outline-success");
      buttonOne.classList.add("btn-outline-danger");
      buttonOne.value = 'off';
    }

    if(y == '2')
    {
      divSecond.classList.add("disable");
      buttonSecond.classList.remove("btn-outline-success");
      buttonSecond.classList.add("btn-outline-danger");
      buttonSecond.value = 'off';
    }
  }
  else {
    if(y == '1')
    {
      divOne.classList.remove("disable");
      buttonOne.classList.add("btn-outline-success");
      buttonOne.classList.remove("btn-outline-danger");
      buttonOne.value = 'on';
    }

    if(y == '2')
    {
      divSecond.classList.remove("disable");
      buttonSecond.classList.add("btn-outline-success");
      buttonSecond.classList.remove("btn-outline-danger");
      buttonSecond.value = 'on';
    }
  }
}
