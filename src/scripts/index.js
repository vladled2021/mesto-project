import '../pages/index.css';

export const popups = document.querySelectorAll('.popup');
const profileEditButton = document.querySelector('.profile__edit-button');                // Попап "Редактировать профиль"
export const popupTypeProfile = document.querySelector('.popup_type_profile');                   //
const popupCloseButtonProfile = popupTypeProfile.querySelector('.popup__close-button');   //
const popupFormProfile = popupTypeProfile.querySelector('.popup__form');                  //
export const popupInputName = popupTypeProfile.querySelector('.popup__input_type_name');         //
export const popupInputJob = popupTypeProfile.querySelector('.popup__input_type_job');           //
export const profileName = document.querySelector('.profile__name');                             //
export const profileActivity = document.querySelector('.profile__activity');                     //
const profileImage = document.querySelector('.profile__image');                           //


export const formPlace = document.forms.formPlace; // форма добавления карточки
export const formProfile = document.forms.formProfile; //форма редактирования профиля
export const popupSubmit = document.querySelector('.popup__submit');                              // кнопка создать/сохранить в попапе
const profileAddButton = document.querySelector('.profile__add-button');                  // Попап "Новое место"
export const popupTypePlace = document.querySelector('.popup_type_place');                       //
const popupCloseButtonPlace = popupTypePlace.querySelector('.popup__close-button');       //
export const popupFormPlace = popupTypePlace.querySelector('.popup__form');                      //
export const popupInputTitle = popupTypePlace.querySelector('.popup__input_type_title');         //
export const popupInputImageLink = popupTypePlace.querySelector('.popup__input_type_image-link');//
export const elementsSection = document.querySelector('.elements');                              // контейнер карточек
export const popupTypeImage = document.querySelector('.popup_type_image');                       // попап картинки
const popupCloseButtonImage = popupTypeImage.querySelector('.popup__close-button');
export const elementTemplate = document.querySelector('#element').content;                       // элемент темплейт карточки
//export const elementLike = document.querySelector('.element__like');                                    // элемент "лайк"
export const popupCardImage = popupTypeImage.querySelector('.popup__image');                     // картинка из карточки
export const popupCardImageTitle = popupTypeImage.querySelector('.popup__image-title');          // заголовок карточки
let userId = '';
// const initialCards = [
//   {
//     name: 'Архыз',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
//   },
//   {
//     name: 'Челябинская область',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
//   },
//   {
//     name: 'Иваново',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
//   },
//   {
//     name: 'Камчатка',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
//   },
//   {
//     name: 'Холмогорский район',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
//   },
//   {
//     name: 'Байкал',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
//   }
//   ];

document.addEventListener('click', function(evt) {
  if (evt.target.classList.contains('popup')){
    closePopup(popupTypeProfile);
    closePopup(popupTypePlace);
    closePopup(popupTypeImage);
  }
})

fetch('https://nomoreparties.co/v1/plus-cohort7/users/me', {
  headers: {
    authorization: 'da7fb63d-939f-4bfb-bbe1-e632a3997f26'
  }
})
  .then(res => res.json())
  .then((user) => {
    profileName.textContent = user.name;
    profileActivity.textContent = user.about;
    profileImage.src = user.avatar;
  });

  fetch('https://nomoreparties.co/v1/plus-cohort7/cards', {
  headers: {
    authorization: 'da7fb63d-939f-4bfb-bbe1-e632a3997f26'
  }
})
  .then(res => res.json())
  .then((cards) => {
    cards.forEach((card) => {
      addArrayElement(card);

    })
  });

popups.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
     if (evt.target.classList.contains('popup__close-button')) {
        closePopup(popup)
      }
  })
})

//addArrayElement(result); //вызов функции добавления карточек из объекта initialCards

profileEditButton.addEventListener('click', openProfileEditPopup);
profileAddButton.addEventListener('click', openPlaceAddPopup);

popupFormProfile.addEventListener('submit', handleProfileFormSubmit);
popupFormPlace.addEventListener('submit', handleFormCreateCard);

// popupCloseButtonProfile.addEventListener('click', closeProfileEditPopup);
// popupCloseButtonPlace.addEventListener('click', closePlaceAddPopup);
// popupCloseButtonImage.addEventListener('click', closePopupTypeImage);

export const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  errorClass: 'error-message_visible',
  inputInvalidClass: 'popup__input_type_error',
  buttonSelector: '.popup__submit',
  buttonDisabledClass: 'popup__submit_disabled',
}
import {hideInputError, showInputError, checkInputValidity, disableButton,
  enableButton, hasInvalidInput, toggleButtonState, setEventListeners,
  enableValidation} from './validate.js';

import {createCard, handleFormCreateCard, addArrayElement} from './card.js';
import {closeProfileEditPopup, closePlaceAddPopup, closePopupTypeImage, handleProfileFormSubmit, openProfileEditPopup, openPlaceAddPopup} from './modal.js';
import {openPopup, closePopup} from './utils.js';

enableValidation(validationConfig);
