import {renderPictures} from "./galary";
import {sliderChange} from "./form";
import {upload, load} from "./backend";
import {photoSorting} from "./photo-sorting";

var form = document.querySelector('.img-upload__form');

sliderChange();

form.addEventListener('submit', function (evt) {
  upload(new FormData(form), function (response) {
    document.querySelector('.img-upload__overlay').classList.add('hidden');
  });
  evt.preventDefault();
});

load (function (data) {
  renderPictures(data);
  photoSorting(data);
});
