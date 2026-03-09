import Abstractview from './Abstractview.js';

export default class RegisterView extends Abstractview {
  constructor() {
    super();
    this.setTitle('HappySwinging | Creează un cont nou');
  }
  override async getHtml() {
    const out = document.createElement('div');
    out.textContent = 'This is the Register view';
    return out;
  }
}
