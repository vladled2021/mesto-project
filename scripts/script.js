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
const elementsSection = document.querySelector('.elements');                              // контейнер карточек
const popupTypeImage = document.querySelector('.popup_type_image');                       // попап картинки
const popupCloseButtonImage = popupTypeImage.querySelector('.popup__close-button');
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

function openPopup(popup) {             // функция открытия попапа
  popup.classList.add('popup_opened');
}

function closePopup(popup) {            // функция закрытия попапа
  popup.classList.remove('popup_opened');
}

function handleProfileFormSubmit(evt) {          // функция добавления, вводимых данных в профиль
  evt.preventDefault();
  profileName.textContent = popupInputName.value;
  profileActivity.textContent = popupInputJob.value;
  closePopup(popupTypeProfile);
}

function createCard(item) {
  const elementTemplate = document.querySelector('#element').content;
  const cardElement = elementTemplate.querySelector('.element').cloneNode(true);
  const elementTrash = cardElement.querySelector('.element__trash');
  cardElement.querySelector('.element__like').addEventListener('click', function (event) {
    event.target.classList.toggle('element__like_active');
  });
  elementTrash.addEventListener('click', function () {
    elementTrash.closest('.element').remove();
  });
  cardElement.querySelector('.element__image').addEventListener('click', function (event) {
    popupTypeImage.querySelector('.popup__image').src = event.target.src;
    popupTypeImage.querySelector('.popup__image').alt = event.target.alt;
    popupTypeImage.querySelector('.popup__image-title').textContent = event.target.alt;
    openPopup(popupTypeImage);
  });
  return cardElement
}

function handleFormCreateCard(evt) {          // карточки с данными из попапа
  evt.preventDefault();
  const cardElement = createCard();
  cardElement.querySelector('.element__image').src = popupInputImageLink.value;
  cardElement.querySelector('.element__image').alt = popupInputTitle.value;
  cardElement.querySelector('.element__title').textContent = popupInputTitle.value;
  elementsSection.prepend(cardElement);
  closePopup(popupTypePlace);
  popupInputTitle.value = '';
  popupInputImageLink.value = '';
}

function addArrayElement(arr) {                // карточки, с данными из массива
  for (let i = 0; i < arr.length; i += 1) {
    const cardElement = createCard();
    cardElement.querySelector('.element__image').src = arr[i].link;
    cardElement.querySelector('.element__image').alt = arr[i].name;
    cardElement.querySelector('.element__title').textContent = arr[i].name;
    elementsSection.append(cardElement);
  }
}

addArrayElement(initialCards);

function openProfileEditPopup() {  // функция добавления данных в инпуты попапа "Редактирование профиля" из html-разметки и передачи параметра в функцию открытия попапа
  openPopup(popupTypeProfile);
  popupInputName.value = profileName.textContent;
  popupInputJob.value = profileActivity.textContent;
}

function openPlaceAddPopup() {   // функция передачи параметра в функцию открытия попапа
  openPopup(popupTypePlace);
}

function closeProfileEditPopup() { // функция передачи параметра в функцию закрытия попапа
  closePopup(popupTypeProfile);
}

function closePlaceAddPopup() {   //  --//--
  closePopup(popupTypePlace);
}

function closePopupTypeImage() {
  closePopup(popupTypeImage);
}

profileEditButton.addEventListener('click', openProfileEditPopup);
profileAddButton.addEventListener('click', openPlaceAddPopup);

popupFormProfile.addEventListener('submit', handleProfileFormSubmit);
popupFormPlace.addEventListener('submit', handleFormCreateCard);

popupCloseButtonProfile.addEventListener('click', closeProfileEditPopup);
popupCloseButtonPlace.addEventListener('click', closePlaceAddPopup);
popupCloseButtonImage.addEventListener('click', closePopupTypeImage);
