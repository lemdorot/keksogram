var URLPost = 'https://24.javascript.pages.academy/kekstagram';
var URLGet = 'https://24.javascript.pages.academy/kekstagram/data';

export var upload = function (data, onSuccess) {
  var xhr = new XMLHttpRequest();
  xhr.responseType = 'json';

  xhr.addEventListener('load', function () {
    onSuccess(xhr.response);
  });

  xhr.open('POST', URLPost);
  xhr.send(data);
}

export var load = function (onSuccess, onError) {
  var xhr = new XMLHttpRequest();
  xhr.responseType = 'json';

  xhr.open('GET', URLGet);

  xhr.addEventListener('load', function () {
    onSuccess(xhr.response);
  });

  xhr.send();
};
