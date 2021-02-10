import './sass/styles.scss';
import refs from './js/refs';
import fetchCountries from './js/fetchCountries';
import addMarkup from './js/add-markup';
import debounce from 'lodash.debounce';

refs.countryInput.addEventListener('input', debounce(countryInputHandler, 500));

function countryInputHandler(event) {
  fetchCountries(event.target.value)
    .then(countries => {
      refs.markup.innerHTML = '';
      addMarkup(countries);
    })
    .catch(error => {
      return;
    });
}