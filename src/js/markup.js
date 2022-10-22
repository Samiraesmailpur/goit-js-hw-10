import { countryListEl, countryInfoEl } from './refs';
import '../css/styles.css';
function emptyMarkup() {
  countryListEl.innerHTML = '';
  countryInfoEl.innerHTML = '';
}

function countryList(country) {
  return country
    .map(({ name, flags }) => {
      return `
 <ul class='list flag-and-name'>
    <li>
      <img
        class='country-flag'
        src='${flags.svg}'
        alt='${name.official}'${name.official}
        width='30'
         <p class='country-name'>${name.official}</p>
    </li>
  </ul>
 `;
    })
    .join('');
}

export { emptyMarkup, countryList };
