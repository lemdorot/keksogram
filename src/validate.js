var MAX_HASHTAGS_COUNT = 5;
var hashtagsInput = document.querySelector('.text__hashtags');

export var validate = () => {
  hashtagsInput.addEventListener('blur', (evt) => {
    var hashtagsArray = hashtagsInput.value.toLowerCase().split(' ');

    if (hashtagsArray.length > MAX_HASHTAGS_COUNT) {
      hashtagsInput.setCustomValidity('Хештегов может быть не больше 5-ти');

      return;
    }

    for (var i = 0; i < hashtagsArray.length; i++) {
      if (hashtagsArray[i] === '#' || hashtagsArray[i].length === 1) {
        hashtagsInput.setCustomValidity('Хештег не может состоять из одного символа. ' + (i + 1) + ' хештег не верен');
        break;
      } else if (hashtagsArray[i].length > 20) {
        hashtagsInput.setCustomValidity('Хештег номер' + (i + 1) + ' слишком длинный');
        break;
      } else if (hashtagsArray[i].charAt(0) !== '#') {
        hashtagsInput.setCustomValidity('Хештег должен начинаться с решетки. Исправьте хештег номер ' + (i + 1));
        break;
      } else {
        hashtagsInput.setCustomValidity('');
      }

      for (var j = i + 1; j < hashtagsArray.length; j++) {
        if (hashtagsArray[j].toLowerCase() === hashtagsArray[i].toLowerCase()) {
          if (hashtagsArray[j] === hashtagsArray[i]) {
            hashtagsInput.setCustomValidity('один хештег написан дважды, совпадает хештег номер ' + (i + 1) + ' и номер ' + (j + 1));
            return;
          }
        }
      }
    }
  });
}
