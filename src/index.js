import './css/styles.css';

import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import markup from './js/templates/markup.hbs';
import { emptyMarkup, countryList } from './js/markup';
import { inputEl, countryListEl, countryInfoEl } from './js/refs';
import fetchCountries from './js/fetchCountries';

const DEBOUNCE_DELAY = 300;

inputEl.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

function onSearch(e) {
  e.preventDefault();
  const nameCountry = inputEl.value.trim();
  emptyMarkup();
  if (nameCountry === '') {
    return;
  }

  fetchCountries(nameCountry)
    .then(countries => {
      if (countries.length > 10) {
        Notiflix.Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
      }
      if (countries.length === 1) {
        countryInfoEl.innerHTML = markup(countries);
      } else if (countries.length >= 2 && countries.length <= 10) {
        countryListEl.innerHTML = countryList(countries);
      }
    })
    .catch(error => {
      Notiflix.Notify.failure('Oops, there is no country with that name');
    });
}
