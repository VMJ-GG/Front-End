(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Encrypter = factory());
}(this, (function () { 'use strict';

  function convert(ch) {
    var char = typeof ch === 'number' ? String(ch) : ch;

    if (char.length > 1 && !char.match(/^\d{1,3}$/)) return;
    return isNaN(char) ? ch.charCodeAt(0) : String.fromCharCode(ch);
  }

  function isLetter(ch) {
    var charCode = convert(ch);
    return charCode >= 65 && charCode < 91 || charCode >= 97 && charCode < 123;
  }

  function isPunctuation(ch) {
    return !isLetter(ch);
  }

  function isLower(letter) {
    return isCase('lower', letter);
  }

  function isUpper(letter) {
    return isCase('upper', letter);
  }

  function isCase(expect, letter) {
    if (['lower', 'upper'].indexOf(expect) < 0) throw new TypeError('Invalid case type! Given ' + expect + ', expected \'lower\' or \'upper\'');

    if (isPunctuation(letter)) return;

    var charCode = convert(letter);
    var actual = charCode >= 97 && charCode < 123 ? 'lower' : 'upper';
    return expect === actual ? true : false;
  }

  function classOf(value, expected) {
    return value.constructor.name === expected;
  }

  function lengthenKey(key, length) {
    while (key.length < length) {
      key += key;
    }return key.slice(0, length);
  }

  function randomKey() {
    var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

    var key = '';
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

    for (var i = 0; i < length; i++) {
      key += alphabet[Math.floor(Math.random() * 26)];
    }return key;
  }

  var _utils = {
    convert: convert,
    isCase: isCase,
    isLower: isLower,
    isUpper: isUpper,
    isLetter: isLetter,
    isPunctuation: isPunctuation,
    classOf: classOf,
    lengthenKey: lengthenKey,
    randomKey: randomKey
  };

  var name = 'Caesar';

  function encrypter(ch) {
    var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;

    return this.utils.convert((this.utils.convert(ch) - 97 + key) % 26 + 97);
  }
  function decrypter(ch) {
    var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;

    return this.utils.convert((this.utils.convert(ch) - 71 - key) % 26 + 97);
  }
  var caesar = {
    name: name,
    encrypter: encrypter,
    decrypter: decrypter
  };

  var name$1 = 'Atbash';

  function encrypter$1(ch) {
    return this.utils.convert(219 - this.utils.convert(ch));
  }
  function decrypter$1(ch) {
    return this.utils.convert(219 - this.utils.convert(ch));
  }
  var atbash = {
    name: name$1,
    encrypter: encrypter$1,
    decrypter: decrypter$1
  };

  var name$2 = 'Pizzini';

  function encrypter$2(ch) {
    var chiave = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;

    var alfabeto = "abcdefghijklmnopqrstuvwxyz";
    var pos = alfabeto.indexOf(ch);
    pos += chiave;
    ch = pos;
    return ch;
  }
  function decrypter$2(ch) {
    var chiave = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;

    var alfabeto = "abcdefghijklmnopqrstuvwxyz";
    var pos = parseInt(ch);
    pos -= chiave;

    ch = alfabeto.charAt(pos);
    return ch;
  }
  var pizzini = {
    name: name$2,
    encrypter: encrypter$2,
    decrypter: decrypter$2
  };

  var name$3 = 'Polibio';

  function encrypter$3(ch) {
    var alfabeto = "abcdefghiklmnopqrstuvwxyz";
    var valx = alfabeto.indexOf(ch) % 5 + 1;
    var valy = Math.floor(alfabeto.indexOf(ch) / 5) + 1;

    return valy + '' + valx;
  }
  function decrypter$3(ch) {
    var alfabeto = "abcdefghiklmnopqrstuvwxyz";
    var valy = parseInt(ch.toString().slice(0, 1)) - 1;
    var valx = parseInt(ch.toString().slice(1)) - 1;
    var pos = Math.floor(valy * 5);
    pos += valx;

    return alfabeto.charAt(pos);
  }
  var polibio = {
    name: name$3,
    encrypter: encrypter$3,
    decrypter: decrypter$3
  };

  var name$4 = 'Vigenere';

  function encrypter$4(ch, ck) {
    var alfabeto = "abcdefghijklmnopqrstuvwxyz";
    var vigenere = [];

    for (var i = 0; i < alfabeto.length; i++) {
      vigenere[i] = alfabeto.substring(i, alfabeto.length) + alfabeto.substring(0, i);
    }

    var r = alfabeto.indexOf(ck);
    var c = alfabeto.indexOf(ch);

    return vigenere[r][c];}
  function decrypter$4(ch, ck) {
    var alfabeto = "abcdefghijklmnopqrstuvwxyz";
    var vigenere = [];

    for (var i = 0; i < alfabeto.length; i++) {
      vigenere[i] = alfabeto.substring(i, alfabeto.length) + alfabeto.substring(0, i);
    }
    var r = (26 - alfabeto.indexOf(ck)) % 26;
    var c = alfabeto.indexOf(ch);

    return vigenere[r][c];
  }
  var vigenere = {
    name: name$4,
    encrypter: encrypter$4,
    decrypter: decrypter$4
  };

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var Encrypter = function () {
    function Encrypter() {
      classCallCheck(this, Encrypter);

      var length = arguments.length;
      var name = void 0,
          encrypter = void 0,
          decrypter = void 0,
          parent = void 0;

      if (length !== 0 && length <= 2) {
        var _ref = arguments.length <= 0 ? undefined : arguments[0];

        name = _ref.name;
        encrypter = _ref.encrypter;
        decrypter = _ref.decrypter;

        parent = length == 2 && _utils.classOf(arguments.length <= 1 ? undefined : arguments[1], 'Encrypter') && (arguments.length <= 1 ? undefined : arguments[1]);
      }

      this.name = name || (arguments.length <= 0 ? undefined : arguments[0]) || '';
      this.encrypter = encrypter || (arguments.length <= 1 ? undefined : arguments[1]);
      this.decrypter = decrypter || (arguments.length <= 2 ? undefined : arguments[2]);
      this.parent = parent ? parent : (arguments.length <= 3 ? undefined : arguments[3]) && _utils.classOf(arguments.length <= 3 ? undefined : arguments[3], 'Encrypter') ? arguments.length <= 3 ? undefined : arguments[3] : Encrypter.EMPTY;

      this.utils = _utils;
    }

    createClass(Encrypter, [{
      key: 'append',
      value: function append() {
        if (arguments.length === 3) return new Encrypter(arguments.length <= 0 ? undefined : arguments[0], arguments.length <= 1 ? undefined : arguments[1], arguments.length <= 2 ? undefined : arguments[2], this);

        var obj = arguments.length <= 0 ? undefined : arguments[0];

        if (_utils.classOf(obj, 'Encrypter')) {
          obj.parent = this;
          return obj;
        }

        return new Encrypter(obj.name, obj.encrypter, obj.decrypter, this);
      }
    }, {
      key: 'prepend',
      value: function prepend() {
        var _parent, _append;

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        if (!this.parent.isEmpty()) (_parent = this.parent).prepend.apply(_parent, args);else this.parent = (_append = this.append).call.apply(_append, [this.parent].concat(args));

        return this;
      }
    }, {
      key: 'prependTo',
      value: function prependTo(name) {
        var methodFound = this.find(name);
        if (methodFound) {
          var _methodFound$parent;

          for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
          }

          methodFound.parent = (_methodFound$parent = methodFound.parent).append.apply(_methodFound$parent, args);
          return methodFound.parent;
        }

        return false;
      }
    }, {
      key: 'remove',
      value: function remove(name) {
        var found = false;
        var methodFound = void 0,
            child = void 0;

        this.each(function () {
          if (found) child = this;
          if (this.name === name) {
            methodFound = this;
            found = true;
          }
        });

        if (methodFound) {
          child.parent = methodFound.parent;
          return methodFound;
        }

        return false;
      }
    }, {
      key: 'find',
      value: function find(name) {
        if (this.name === name) return this;
        return !this.parent.isEmpty() ? this.parent.find(name) : false;
      }
    }, {
      key: 'each',
      value: function each(fn) {
        !this.parent.isEmpty() && this.parent.each(fn);
        fn.call(this);
      }
    }, {
      key: 'length',
      value: function length() {
        var length = 0;

        this.each(function () {
          length++;
        });

        return length;
      }
    }, {
      key: 'encrypt',
      value: function encrypt() {
        var _parent2;

        if ((arguments.length <= 0 ? undefined : arguments[0]) && typeof (arguments.length <= 0 ? undefined : arguments[0]) === 'string' && this.utils.isPunctuation(arguments.length <= 0 ? undefined : arguments[0])) return arguments.length <= 0 ? undefined : arguments[0];
        return !this.parent.isEmpty() ? this.encrypter((_parent2 = this.parent).encrypt.apply(_parent2, arguments)) : this.encrypter.apply(this, arguments);
      }
    }, {
      key: 'decrypt',
      value: function decrypt() {
        if ((arguments.length <= 0 ? undefined : arguments[0]) && typeof (arguments.length <= 0 ? undefined : arguments[0]) === 'string' && this.utils.isPunctuation(arguments.length <= 0 ? undefined : arguments[0])) return arguments.length <= 0 ? undefined : arguments[0];
        return !this.parent.isEmpty() ? this.parent.decrypt(this.decrypter.apply(this, arguments)) : this.decrypter.apply(this, arguments);
      }
    }, {
      key: 'isEmpty',
      value: function isEmpty() {
        return this === Encrypter.EMPTY;
      }
    }]);
    return Encrypter;
  }();

  Encrypter.EMPTY = new Encrypter('__EMPTY__', function (ch) {
    return ch;
  }, function (ch) {
    return ch;
  });
  Encrypter.caesar = new Encrypter(caesar.name, caesar.encrypter, caesar.decrypter);
  Encrypter.atbash = new Encrypter(atbash.name, atbash.encrypter, atbash.decrypter);
  Encrypter.polibio = new Encrypter(polibio.name, polibio.encrypter, polibio.decrypter);
  Encrypter.pizzini = new Encrypter(pizzini.name, pizzini.encrypter, pizzini.decrypter);
  Encrypter.vigenere = new Encrypter(vigenere.name, vigenere.encrypter, vigenere.decrypter);

  return Encrypter;

})));
