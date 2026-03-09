import Abstractview from './Abstractview.js';

export default class LoginView extends Abstractview {
  constructor() {
    super();
    this.setTitle('HappySwinging | Intră în cont');
  }
  override async getHtml() {
    const out = document.createElement('div');
    out.textContent = 'This is the Log In view';
    return out;
  }
}
