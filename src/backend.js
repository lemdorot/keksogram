var URL = 'https://24.javascript.pages.academy/kekstagram';

export var upload = function (data, onSuccess) {
  debugger;
  var xhr = new XMLHttpRequest();
  xhr.responseType = 'json';

  xhr.addEventListener('load', function () {
    onSuccess(xhr.response);
  });

  xhr.open('POST', URL);
  xhr.send(data);
}
