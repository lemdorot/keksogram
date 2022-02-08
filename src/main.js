import {addPictureLinkHandlers} from "./galary";
import {renderPicture} from "./picture";
import {sliderChange} from "./form";
import {upload} from "./backend";
import {load} from "./backend";

var form = document.querySelector('.img-upload__form');
var pictureFragment = document.createDocumentFragment();
var pictureList = document.querySelector('.pictures');

addPictureLinkHandlers();

sliderChange();

form.addEventListener('submit', function (evt) {
  debugger;
  upload(new FormData(form), function (response) {
    document.querySelector('.img-upload__overlay').classList.add('hidden');
  });
  evt.preventDefault();
});

load (function (pictures) {
  console.log(pictures);
  for (var i = 0; i < pictures.length; i++) {
    pictureFragment.appendChild(renderPicture(pictures[i]))
  }

  pictureList.appendChild(pictureFragment);
  addPictureLinkHandlers(pictures);
});
