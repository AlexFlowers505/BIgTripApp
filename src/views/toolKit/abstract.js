import { generateDOMedLayout } from "../../toolKit/render";

export default class Abstract {
  constructor() {
    if (new.target === Abstract) {
      throw new Error(`Don't use Abstract class / instances of it, use its' children with "extends" keyword`)
    }
    this._DOMedLayout = null;
    this._callbacksHolder = {};  //  будет сохранять ссылку на конкретный коллбэк для возможности его последующего удаления
  }
  getStringLayout() {
    throw new Error(`Redefine body of Abstract class's method "getStringLayout"`)
  }
  getDOMedLayout() {
    if (this._DOMedLayout === null) {
      this._DOMedLayout = generateDOMedLayout(this.getStringLayout());
    }
    return this._DOMedLayout;
  }
  clearDOMedLayoutHolder() {
    this._DOMedLayout = null;
  }
}
