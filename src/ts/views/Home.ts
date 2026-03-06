import Abstractview from './Abstractview.js';

export default class HomeView extends Abstractview {
  constructor() {
    super();
    this.setTitle('HappySwinging | Pagina principală');
  }
  override async getHtml(): Promise<string> {
    return 'Lala Land';
  }
}
