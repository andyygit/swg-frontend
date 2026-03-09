export default class Abstractview {
  constructor() {}
  setTitle(title: string): void {
    document.title = title;
  }
  async getHtml(): Promise<HTMLElement> {
    return document.createElement('div');
  }
}
