import {addPictureLinkHandlers} from "./galary";
import {pictureFragment} from "./picture";
import {sliderChange} from "./form";
import {upload} from "./backend";

var pictureList = document.querySelector('.pictures');
var form = document.querySelector('.img-upload__form');

pictureList.appendChild(pictureFragment);

addPictureLinkHandlers();

sliderChange();

form.addEventListener('submit', function (evt) {
  debugger;
  upload(new FormData(form), function (response) {
    document.querySelector('.img-upload__overlay').classList.add('hidden');
  });
  evt.preventDefault();
});
