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

var fillPictures = function (pictures) {
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