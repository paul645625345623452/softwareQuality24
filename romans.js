/* eslint-env browser */
/* eslint no-cond-assign: ["error", "always"] */
/* eslint indent: ["error", 2] */
/* eslint linebreak-style: ["error", "unix"] */
/* eslint quotes: ["error", "single"] */
/* eslint no-unused-vars: "off" */
/* eslint semi: ["error", "always"] */

const INVALID_ROMAN = 'Please enter a valid roman';
const INVALID_INTEGER = 'Please enter a valid integer';
const OUT_OF_RANGE = 'Out of range (1-3999)';

function init() {
  var modeCheckbox = document.querySelector('input[type="checkbox"]');
  var header = document.getElementById('header-text');
  var convertButton = document.getElementById('convert-button');
  var outputArea = document.getElementById('convert-output');
  var inputArea = document.getElementById('conversion-input');

  modeCheckbox.addEventListener('change', function(e) {
    header.innerHTML = getModeTitle(e.target.checked);
  });

  const getModeTitle = function(integerToRoman) {
    return integerToRoman ? 'Integer To Roman' : 'Roman To Integer';
  };

  convertButton.addEventListener('click', function() {
    var inputValue = inputArea.value;
    var convertion = modeCheckbox.checked ? convertIntegerToRoman(inputValue) : convertRomanToInteger(inputValue);
    if (convertion.result) {
      outputArea.innerHTML = convertion.value;
    } else {
      alert(convertion.message);
    }

    var headerText = header.textContent;
    var outputValue = outputArea.textContent;

    console.log('Header Text:', headerText);
    console.log('Input Value:', inputValue);
    console.log('Output Value:', outputValue);

    gtag('event', 'convert_button_click', {
      'event_category': 'Conversion',
      'event_label': 'Convert Button',
      'header_text': headerText,
      'input_value': inputValue,
      'output_value': outputValue
    });
  });
}

const convertRomanToInteger = function(roman) {
  var response = {
    value: 0,
    message: '',
    result: false
  };

  const romanNumeralRegex = new RegExp(
    /^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/
  );

  roman = roman.toUpperCase();
  const regexResult = romanNumeralRegex.test(roman);

  if (!regexResult || roman.length <= 0) {
    response.message = INVALID_ROMAN;
    return response;
  }

  var arr = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];

  var values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  var sum = 0;
  var prevIndex = 0;

  for (var i = roman.length - 1; i >= 0; i--) {
    if (arr.indexOf(roman[i]) >= prevIndex) {
      sum = sum + values[roman[i]];
    } else {
      sum = sum - values[roman[i]];
    }

    prevIndex = arr.indexOf(roman[i]);
  }

  response.value = sum;
  response.result = true;

  return response;
};

const convertIntegerToRoman = function(num) {
  var response = {
    value: '',
    message: '',
    result: false
  };

  const numberRegex = new RegExp(/^\d+$/);
  const regexResult = numberRegex.test(num);

  if (!regexResult) {
    response.message = INVALID_INTEGER;
    return response;
  }

  if (Number(num) > 3999 || Number(num) < 1) {
    response.message = OUT_OF_RANGE;
    return response;
  }

  const mapping = {
    1: 'I',
    5: 'V',
    10: 'X',
    50: 'L',
    100: 'C',
    500: 'D',
    1000: 'M'
  };

  var count = 1;
  var str = '';
  while (num > 0) {
    var last = parseInt(num % 10);
    last *= count;
    if (last < 10) {
      str += lessThan9(last, mapping);
    } else {
      str = greaterThan9(last, mapping) + str;
    }

    count *= 10;
    num = parseInt(num / 10);
  }

  response.value = str;
  response.result = true;

  return response;
};

const lessThan9 = function(num, obj) {
  if (num === 9) {
    return obj[1] + obj[10];
  } else if (num >= 5 && num < 9) {
    return obj[5] + obj[1].repeat(num % 5);
  } else if (num === 4) {
    return obj[1] + obj[5];
  } else {
    return obj[1].repeat(num);
  }
};

const greaterThan9 = function(num, obj) {
  if (num >= 10 && num < 50) {
    if (num === 10) {
      return obj[10];
    }

    if (num === 40) {
      return obj[10] + obj[50];
    } else {
      return obj[10].repeat(parseInt(num / 10));
    }
  } else if (num >= 50 && num < 100) {
    if (num === 50) {
      return obj[50];
    }

    if (num === 90) {
      return obj[10] + obj[100];
    } else {
      return obj[50] + obj[10].repeat(parseInt((num - 50) / 10));
    }
  } else if (num >= 100 && num < 500) {
    if (num === 100) {
      return obj[100];
    }

    if (num === 400) {
      return obj[100] + obj[500];
    } else {
      return obj[100].repeat(parseInt(num / 100));
    }
  } else if (num >= 500 && num < 1000) {
    if (num === 500) {
      return obj[500];
    }

    if (num === 900) {
      return obj[100] + obj[1000];
    } else {
      return obj[500] + obj[100].repeat(parseInt((num - 500) / 100));
    }
  } else if (num >= 1000 && num < 5000) {
    if (num === 1000) {
      return obj[1000];
    }
    return obj[1000].repeat(parseInt(num / 1000));
  }
};

if (!String.prototype.repeat) {
  String.prototype.repeat = function(count) {
    'use strict';
    if (this == null) {
      throw new TypeError('can\'t convert ' + this + ' to object');
    }
    var str = '' + this;
    count = +count;
    if (count != count) {
      count = 0;
    }
    if (count < 0) {
      throw new RangeError('repeat count must be non-negative');
    }
    if (count == Infinity) {
      throw new RangeError('repeat count must be less than infinity');
    }
    count = Math.floor(count);
    if (str.length == 0 || count == 0) {
      return '';
    }
    if (str.length * count >= 1 << 28) {
      throw new RangeError('repeat count must not overflow maximum string size');
    }
    var rpt = '';
    for (;;) {
      if ((count & 1) == 1) {
        rpt += str;
      }
      count >>>= 1;
      if (count == 0) {
        break;
      }
      str += str;
    }
    return rpt;
  };
}
