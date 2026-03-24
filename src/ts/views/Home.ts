import { getData } from '../helpers/Fetch.js';
import Abstractview from './Abstractview.js';

export default class HomeView extends Abstractview {
  constructor() {
    super();
    this.setTitle('HappySwinging | Pagina principală');
  }
  override async getHtml() {
    const response = await getData(
      'https://jsonplaceholder.typicode.com/users',
    );
    console.log(response);
    const out = document.createElement('div');
    out.textContent = 'This is the home view';
    return out;
  }
}
