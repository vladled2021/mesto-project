import {profileName, popupFormPlace, popupSubmit, popupTypeImage, popupTypePlace, popupTypeProfile, popupInputJob, popupInputName, profileActivity} from './index.js';
import {openPopup, closePopup, resetFormPlaceButton} from './utils.js';

function handleProfileFormSubmit(evt) {          // функция добавления, вводимых данных в профиль
  evt.preventDefault();
  profileName.textContent = popupInputName.value;
  profileActivity.textContent = popupInputJob.value;
  closePopup(popupTypeProfile);
}

function openProfileEditPopup() {  // функция добавления данных в инпуты попапа "Редактирование профиля" из html-разметки и передачи параметра в функцию открытия попапа
  openPopup(popupTypeProfile);
  popupInputName.value = profileName.textContent;
  popupInputJob.value = profileActivity.textContent;
}

function openPlaceAddPopup() {   // функция передачи параметра в функцию открытия попапа
  openPopup(popupTypePlace);
  resetFormPlaceButton();
  popupFormPlace.reset();
}

// function closeProfileEditPopup() { // функция передачи параметра в функцию закрытия попапа
//   closePopup(popupTypeProfile);
// }

// function closePlaceAddPopup() {   //  --//--
//   closePopup(popupTypePlace);
// }

// function closePopupTypeImage() {
//   closePopup(popupTypeImage);
// }

export {handleProfileFormSubmit, openProfileEditPopup, openPlaceAddPopup};
