import {validate} from "./validate";

var uploadFile = document.querySelector('#upload-file');
var imgUpload = document.querySelector('.img-upload__overlay');
var uploadCancel = imgUpload.querySelector('#upload-cancel');
var scale = imgUpload.querySelector('.img-upload__scale');
var scalePin = document.querySelector('.scale__pin');
var scaleValue = document.querySelector('.scale__value');
var scaleLevel = document.querySelector('.scale__level');
var scaleSlider = document.querySelector('.scale__line');
var effectChrome = document.querySelector('#effect-chrome');
var effectSepia = document.querySelector('#effect-sepia');
var effectMarvin = document.querySelector('#effect-marvin');
var effectPhobos = document.querySelector('#effect-phobos');
var effectHeat = document.querySelector('#effect-heat');
var imgUploadPreview = document.querySelector('.img-upload__preview img');

uploadFile.addEventListener('change', () => {
  document.querySelector('.img-upload__overlay').classList.remove('hidden');
});

uploadCancel.addEventListener('click', () => {
  document.querySelector('.img-upload__overlay').classList.add('hidden');
  uploadFile.value = '';
});

var effectRadioList = document.querySelectorAll("[name='effect']");

var resetEffect = function () {
  imgUploadPreview.style.removeProperty('filter');
  scalePin.style.left = '100%';
  scaleValue.value = parseInt(scalePin.offsetLeft / scaleSlider.offsetWidth * 100);
  scaleLevel.style.width = scaleValue.value + '%';
}

for (var i = 0; i < effectRadioList.length; i++) {
  effectRadioList[i].addEventListener('click', function (evt) {
    if (evt.target.value === 'none') {
      resetEffect();
      imgUploadPreview.className = '';
      scale.classList.add('hidden');
    }
    else {
      scale.classList.remove('hidden');
      resetEffect();
      imgUploadPreview.className = 'effects__preview--' + evt.target.value;
    }
  });
}

var updateEffect = function () {
  if (effectChrome.checked) {
    imgUploadPreview.style.filter = 'grayscale(' + scaleValue.value / 100 + ')';
  }
  if (effectSepia.checked) {
    imgUploadPreview.style.filter = 'sepia(' + scaleValue.value / 100 + ')';
  }
  if (effectMarvin.checked) {
    imgUploadPreview.style.filter = 'invert(' + scaleValue.value + '%)';
  }
  if (effectPhobos.checked) {
    imgUploadPreview.style.filter = 'blur(' + scaleValue.value / 100 * 3 + 'px)';
  }
  if (effectHeat.checked) {
    imgUploadPreview.style.filter = 'brightness(' + scaleValue.value / 100 * 3 + ')';
  }
}

export var sliderChange = () => {
  scalePin.addEventListener('mousedown', function (event) {
    event.preventDefault();

    var shiftX = event.clientX - scalePin.getBoundingClientRect().left;

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    function onMouseMove(event) {
      var newLeft = event.clientX - shiftX - scaleSlider.getBoundingClientRect().left + scalePin.offsetWidth / 2;

      if (newLeft < 0) {
        newLeft = 0;
      }
      var rightEdge = scaleSlider.offsetWidth;
      if (newLeft > rightEdge) {
        newLeft = rightEdge;
      }

      scalePin.style.left = newLeft + 'px';
      scaleValue.value = parseInt(scalePin.offsetLeft / scaleSlider.offsetWidth * 100);
      scaleLevel.style.width = scaleValue.value + '%';
      updateEffect();
    }

    function onMouseUp() {
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mousemove', onMouseMove);
    }
  });

  scalePin.ondragstart = function () {
    return false;
  };
}

validate();
