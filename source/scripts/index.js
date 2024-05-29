/* в этот файл добавляет скрипты*/
const toggle = document.querySelector ('.logo-container__toggle');
const menu = document.querySelector ('.navigation__list');

menu.classList.add('navigation__list--hidden');
toggle.onclick = function() {
  menu.classList.toggle ('navigation__list--hidden');
  toggle.classList.toggle ('logo-container__toggle--closed');
  toggle.classList.toggle ('logo-container__toggle--opened');
};

document.querySelector('.contacts-map__pic').classList.add('visually-hidden');
document.querySelector('.contacts-map__frame').classList.remove('visually-hidden');
