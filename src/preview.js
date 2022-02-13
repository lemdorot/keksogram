var bigPicture = document.querySelector('.big-picture');
var socialComments = bigPicture.querySelector('.social__comments');

var createComments = (picture) => {
  var comments = '';
  for (var i = 0; i < picture.comments.length; i++) {
    comments = comments + '<li class="social__comment social__comment--text"><img class="social__picture" src="'+ picture.comments[i].avatar + '" alt="Аватар комментатора фотографии" width="35" height="35"> <p class="social__text">' + picture.comments[i].message + '</p> </li>';
  }
  return comments;
}

export var fillBigPicture = (picture) => {
  bigPicture.querySelector('.big-picture__img>img').src = picture.url;
  bigPicture.querySelector('.likes-count').textContent = picture.likes;
  bigPicture.querySelector('.comments-count').textContent = picture.comments.length;
  bigPicture.querySelector('.social__caption').textContent = picture.description;
  while( socialComments.firstChild ){
    socialComments.removeChild( socialComments.firstChild );
  }
  socialComments.insertAdjacentHTML('afterbegin', createComments(picture));
}

bigPicture.querySelector('.social__comment-count').classList.add('visually-hidden');
bigPicture.querySelector('.social__comment-loadmore').classList.add('visually-hidden');
