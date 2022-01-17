var pictureTemplate = document.querySelector('#picture').content;

var COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

var DESCRIPTIONS = [
  'Тестим новую камеру!',
  'Затусили с друзьями на море',
  'Как же круто тут кормят',
  'Отдыхаем...',
  'Цените каждое мгновенье. Цените тех, кто рядом с вами и отгоняйте все сомненья. Не обижайте всех словами......',
  'Вот это тачка!'
];

var randomInt = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

var getComments = () => {
  var commentsCount = randomInt(6, 15);
  var commentList = [];

  for (var i = 0; i < commentsCount; i++) {
    var count = randomInt(1, 2);
    if (count == 1) commentList.push(COMMENTS[randomInt(0, COMMENTS.length - 1)]);
    else {
      var comment1 = COMMENTS[randomInt(0, COMMENTS.length - 1)];
      var comment2 = COMMENTS[randomInt(0, COMMENTS.length - 1)];

      while (true) {
        if (comment1 == comment2) {
          comment2 = COMMENTS[randomInt(0, COMMENTS.length - 1)];
        } else {
          break;
        }
      }

      commentList.push(comment1 + ' ' + comment2);
    }
  }
  return commentList;
}

var getDescription = () => {
  return DESCRIPTIONS[randomInt(0, DESCRIPTIONS.length - 1)];
}

var pictures = [];

var fillPictures = (pictures) => {
  for (var i = 0; i < 25; i++) {
    pictures.push({
      url: 'photos/' + (i + 1) + '.jpg',
      likes: randomInt(15, 200),
      comments: getComments(),
      description: getDescription(),
    });
  }
}

fillPictures(pictures);

var renderPicture = (picture) => {
  var pictureElement = pictureTemplate.cloneNode(true);

  pictureElement.querySelector('.picture__img').src = picture.url;
  pictureElement.querySelector('.picture__stat--likes').textContent = picture.likes;
  pictureElement.querySelector('.picture__stat--comments').textContent = picture.comments;

  return pictureElement;
}

export var pictureFragment = document.createDocumentFragment();
for (var i = 0; i < pictures.length; i++) {
  pictureFragment.appendChild(renderPicture(pictures[i]))
}

var bigPicture = document.querySelector('.big-picture');
var socialComments = bigPicture.querySelector('.social__comments');

var createComments = (picture) => {
  var comments = '';
  for (var i = 0; i < 5; i++) {
    comments = comments + '<li class="social__comment social__comment--text"><img class="social__picture" src="img/avatar-' + randomInt(1, 6) + '.svg" alt="Аватар комментатора фотографии" width="35" height="35"> <p class="social__text">' + picture.comments[i] + '</p> </li>';
  }
  return comments;
}

var fillBigPicture = (picture) => {
  bigPicture.querySelector('.big-picture__img>img').src = picture.url;
  bigPicture.querySelector('.likes-count').textContent = picture.likes;
  bigPicture.querySelector('.comments-count').textContent = picture.comments.length;
  bigPicture.querySelector('.social__caption').textContent = picture.description;
  while( socialComments.firstChild ){
    socialComments.removeChild( socialComments.firstChild );
  }
  socialComments.insertAdjacentHTML('afterbegin', createComments(picture));
}

fillBigPicture(pictures[0]);

bigPicture.querySelector('.social__comment-count').classList.add('visually-hidden');
bigPicture.querySelector('.social__comment-loadmore').classList.add('visually-hidden');

var uploadFile = document.querySelector('#upload-file');
var imgUpload = document.querySelector('.img-upload__overlay');
var uploadCancel = imgUpload.querySelector('#upload-cancel');

uploadFile.addEventListener('change', () => {
  document.querySelector('.img-upload__overlay').classList.remove('hidden');
});

uploadCancel.addEventListener('click', () => {
  document.querySelector('.img-upload__overlay').classList.add('hidden');
  uploadFile.value = '';
});
