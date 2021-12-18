const profileEditButton = document.querySelector('.profile__edit-button');                // Попап "Редактировать профиль"
const popupTypeProfile = document.querySelector('.popup_type_profile');                   //
const popupCloseButtonProfile = popupTypeProfile.querySelector('.popup__close-button');   //
const popupFormProfile = popupTypeProfile.querySelector('.popup__form');                  //
const popupInputName = popupTypeProfile.querySelector('.popup__input_type_name');         //
const popupInputJob = popupTypeProfile.querySelector('.popup__input_type_job');           //
const profileName = document.querySelector('.profile__name');                             //
const profileActivity = document.querySelector('.profile__activity');                     //

const profileAddButton = document.querySelector('.profile__add-button');                  // Попап "Новое место"
const popupTypePlace = document.querySelector('.popup_type_place');                       //
const popupCloseButtonPlace = popupTypePlace.querySelector('.popup__close-button');       //
const popupFormPlace = popupTypePlace.querySelector('.popup__form');                      //
const popupInputTitle = popupTypePlace.querySelector('.popup__input_type_title');         //
const popupInputImageLink = popupTypePlace.querySelector('.popup__input_type_image-link');//

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
  ];

function openPopup(selector) {             // функция открытия попапа
  selector.classList.add('popup_opened');
}

function closePopup(selector) {            // функция закрытия попапа
  selector.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {          // функция добавления, вводимых данных в профиль
  evt.preventDefault();
  profileName.textContent = popupInputName.value;
  profileActivity.textContent = popupInputJob.value;
  closePopup(popupTypeProfile);
}

function formCreateHandler(evt) {          // функция добавления/удаления карточки, с данными из попапа
  evt.preventDefault();
  const elementTemplate = document.querySelector('#element').content;
  const elementDiv = elementTemplate.querySelector('.element').cloneNode(true);
  elementDiv.querySelector('.element__image').src = popupInputImageLink.value;
  elementDiv.querySelector('.element__image').alt = popupInputTitle.value;
  elementDiv.querySelector('.element__title').textContent = popupInputTitle.value;
  elementDiv.querySelector('.element__like').addEventListener('click', function(event) {
    event.target.classList.toggle('element__like_active');
  });
  elementsSection = document.querySelector('.elements');
  elementsSection.prepend(elementDiv);
  const elementTrash = elementDiv.querySelector('.element__trash');
  elementTrash.addEventListener('click', function () {
    elementTrash.closest('.element').remove();
  });
  closePopup(popupTypePlace);
  elementDiv.querySelector('.element__image').addEventListener('click', function(event) {
    const popupTypeImage = document.querySelector('.popup_type_image');
    const popupCloseButtonImage = popupTypeImage.querySelector('.popup__close-button');

    popupTypeImage.querySelector('.popup__image').src = event.target.src;
    popupTypeImage.querySelector('.popup__image').alt = event.target.alt;
    popupTypeImage.querySelector('.popup__image-title').textContent = event.target.alt;
    popupTypeImage.classList.add('popup_opened');
    popupCloseButtonImage.addEventListener('click', function(){
      popupTypeImage.classList.remove('popup_opened');
    });
  });
}

function elementAdd(arr) {                                                    // функция добавления/удаления карточки, с данными из массива
  for (let i = 0; i < arr.length; i += 1) {
    const elementTemplate = document.querySelector('#element').content;
    const elementDiv = elementTemplate.querySelector('.element').cloneNode(true);
    elementDiv.querySelector('.element__image').src = arr[i].link;
    elementDiv.querySelector('.element__image').alt = arr[i].name;
    elementDiv.querySelector('.element__title').textContent = arr[i].name;
    elementDiv.querySelector('.element__like').addEventListener('click', function (event) {
      event.target.classList.toggle('element__like_active');
    });
    elementsSection = document.querySelector('.elements');
    elementsSection.append(elementDiv);
    const elementTrash = elementDiv.querySelector('.element__trash');
    elementTrash.addEventListener('click', function () {
      elementTrash.closest('.element').remove();
    });
    elementDiv.querySelector('.element__image').addEventListener('click', function(event) {
      const popupTypeImage = document.querySelector('.popup_type_image');
      const popupCloseButtonImage = popupTypeImage.querySelector('.popup__close-button');

      popupTypeImage.querySelector('.popup__image').src = event.target.src;
      popupTypeImage.querySelector('.popup__image').alt = event.target.alt;
      popupTypeImage.querySelector('.popup__image-title').textContent = event.target.alt;
      popupTypeImage.classList.add('popup_opened');
      popupCloseButtonImage.addEventListener('click', function(){
        popupTypeImage.classList.remove('popup_opened');
      });
    });
  }
}

elementAdd(initialCards);

function openProfileEditPopup() {  // функция добавления данных в инпуты попапа "Редактирование профиля" из html-разметки и передачи параметра в функцию открытия попапа
  openPopup(popupTypeProfile);
  popupInputName.value = profileName.textContent;
  popupInputJob.value = profileActivity.textContent;
}

function openPlaceAddPopup() {   // функция обнуления данных в инпутах попапа "Новое место" и передачи параметра в функцию открытия попапа
  openPopup(popupTypePlace);
  popupInputTitle.value = '';
  popupInputImageLink.value = '';
}

function closeProfileEditPopup() { // функция передачи параметра в функцию закрытия попапа
  closePopup(popupTypeProfile);
}

function closePlaceAddPopup() {   //  --//--
  closePopup(popupTypePlace);
}

profileEditButton.addEventListener('click', openProfileEditPopup);
profileAddButton.addEventListener('click', openPlaceAddPopup);

popupFormProfile.addEventListener('submit', formSubmitHandler);
popupFormPlace.addEventListener('submit', formCreateHandler);

popupCloseButtonProfile.addEventListener('click', closeProfileEditPopup);
popupCloseButtonPlace.addEventListener('click', closePlaceAddPopup);

