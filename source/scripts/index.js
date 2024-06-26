/* в этот файл добавляет скрипты*/
const toggle = document.querySelector ('.logo-container__toggle');
const menu = document.querySelector ('.navigation__list');

toggle.classList.add ('logo-container__toggle--closed');
menu.classList.add('navigation__list--hidden');

toggle.onclick = function() {
  toggle.classList.toggle ('logo-container__toggle--closed');
  toggle.classList.toggle ('logo-container__toggle--opened');
  menu.classList.toggle ('navigation__list--hidden');
  menu.classList.toggle ('navigation__list--visible');
};

document.querySelector('.contacts-map__pic').classList.add('visually-hidden');
document.querySelector('.contacts-map__frame').classList.remove('visually-hidden');
