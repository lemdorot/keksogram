var URLPost = 'https://24.javascript.pages.academy/kekstagram';
var URLGet = 'https://24.javascript.pages.academy/kekstagram/data';
var SERVER_ANSWER_OK = 200;

export var upload = function (data, onLoad, onError) {
  var xhr = new XMLHttpRequest();
  xhr.responseType = 'json';

  xhr.addEventListener('load', function () {
    if (xhr.status === SERVER_ANSWER_OK) {
      onLoad(xhr.response);
    } else {
      onError('Cтатус ответа: ' + xhr.status + ' ' + xhr.statusText);
    }
  });

  xhr.addEventListener('error', function () {
    onError('Cтатус ответа: ' + xhr.status + ' ' + xhr.statusText);
  });

  xhr.addEventListener('timeout', function () {
    onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
  });

  xhr.timeout = 5000;

  xhr.open('POST', URLPost);
  xhr.send(data);
}

export var load = function (onLoad, onError) {
  var xhr = new XMLHttpRequest();
  xhr.responseType = 'json';

  xhr.addEventListener('load', function () {
    if (xhr.status === SERVER_ANSWER_OK) {
      onLoad(xhr.response);
    } else {
      onError('Cтатус ответа: ' + xhr.status + ' ' + xhr.statusText);
    }
  });

  xhr.addEventListener('error', function () {
    onError('Cтатус ответа: ' + xhr.status + ' ' + xhr.statusText);
  });

  xhr.addEventListener('timeout', function () {
    onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
  });

  xhr.timeout = 5000;

  xhr.open('GET', URLGet);
  xhr.send();
};
