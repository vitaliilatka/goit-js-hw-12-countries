import refs from './refs';
import severalCountriesTpl from '../templates/several-countries.hbs';
import oneCountry from '../templates/one-country.hbs';
import notification from './notifications';

export default function addMarkup(countries) {
  if (!countries) return;
  if (countries.length === 1) {
    const markup = oneCountry(countries);
    refs.markup.insertAdjacentHTML('beforeend', markup);
    refs.countryInput.value = '';
    return;
  }
  if (countries.length >= 2 && countries.length <= 10) {
    const markup = severalCountriesTpl(countries);
    refs.markup.insertAdjacentHTML('beforeend', markup);
    return;
  }
  if (countries.length > 10) {
    notification.tooManyMatchesError();
    return;
  }
}