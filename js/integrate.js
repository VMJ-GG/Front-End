//trapezi
$('[name="btn"]').on('click', function() {
  var a = parseInt( $('[name="a"]').val(), 10 );
  var b = parseInt( $('[name="b"]').val(), 10 );
  var iters =  parseInt( $('[name="iters"]').val(), 10 );

  var fnString = $('[name="fn"]').val();
  var fn = function(x) { return eval(fnString); };
  var funz = fnString.replace(/Math./gi, "");
  var tol = 1e-8;
  var maxdepth = 20;

  var trapezes = trapezi(a, b, fn, iters);
  var monteCarlo = Carlo(a, b, fn, iters);
  var risultato = integrate (fn, a, b, tol, maxdepth)

  $('#trapezes').text(trapezes);
  $('#monteCarlo').text(monteCarlo);
  $('#risultato').text(risultato);


  functionPlot({
    target: '#root',
    xAxis: {
      domain: [a - 2, b + 2],
      label: 'X'
    },
    yAxis: {
      domain: [fn(a) - 2, fn(b) + 2],
      label: 'Y'
    },
    grid: true,
    data: [{
      fn: funz
    },
    {
      fn: funz,
      range: [a, b],
      closed: true,
      color: 'rgba(31, 128, 218, 0.86)'
    }]

  });

});


function trapezi(a, b, fn, iters) {
  var h = (b - a) / iters;
  var x = a;
  var result = 0;

  for (var i = 0; i < iters; i++) {
    result += (fn(x) + fn(x + h)) * .5 * h;
    x += h;
  }
  return result;
}

function Carlo(a, b, fn, iters) {
  var yA = fn(a), yB = fn(b);
  var deltaX = b - a, deltaY = yB - yA;
  var x = null;
  var inside = 0;

  for (var i = 0; i < iters; i++) {
    var x = Math.random() * deltaX + a;
    var y = Math.random() * deltaY + yA;
    if (y < fn(x)) inside++;
  }

  return (inside / iters) * deltaX * yB;
}


//risultato esatto
function adsimp (f, a, b, fa, fm, fb, V0, tol, maxdepth, depth, state) {
  if (state.nanEncountered) {
    return NaN;
  }

  var h, f1, f2, sl, sr, s2, m, V1, V2, err;

  h = b - a;
  f1 = f(a + h * 0.25);
  f2 = f(b - h * 0.25);

  // Simple check for NaN:
  if (isNaN(f1)) {
    state.nanEncountered = true;
    return;
  }

  // Simple check for NaN:
  if (isNaN(f2)) {
    state.nanEncountered = true;
    return;
  }

  sl = h * (fa + 4 * f1 + fm) / 12;
  sr = h * (fm + 4 * f2 + fb) / 12;
  s2 = sl + sr;
  err = (s2 - V0) / 15;

  if (depth > maxdepth) {
    state.maxDepthCount++;
    return s2 + err;
  } else if (Math.abs(err) < tol) {
    return s2 + err;
  } else {
    m = a + h * 0.5;

    V1 = adsimp(f, a, m, fa, f1, fm, sl, tol * 0.5, maxdepth, depth + 1, state);

    if (isNaN(V1)) {
      state.nanEncountered = true;
      return NaN;
    }

    V2 = adsimp(f, m, b, fm, f2, fb, sr, tol * 0.5, maxdepth, depth + 1, state);

    if (isNaN(V2)) {
      state.nanEncountered = true;
      return NaN;
    }

    return V1 + V2;
  }
}

function integrate (fn, a, b, tol, maxdepth) {
  var state = {
    maxDepthCount: 0,
    nanEncountered: false
  };

  var fa = fn(a);
  var fm = fn(0.5 * (a + b));
  var fb = fn(b);

  var V0 = (fa + 4 * fm + fb) * (b - a) / 6;

  var result = adsimp(fn, a, b, fa, fm, fb, V0, tol, maxdepth, 1, state);


  return result;
}
