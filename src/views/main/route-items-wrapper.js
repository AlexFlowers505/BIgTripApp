import { generateDOMedLayout } from "../../toolKit/utils";

const generateRouteItemsWrapper = () => {
  return `<ul class="trip-events__list"></ul>`;
};

export default class RouteItemsWrapper {
  constructor() {
    this._DOMedLayout = null;
  }
  getStringLayout() { // so-called getTemplate
    return generateRouteItemsWrapper();
  }
  getDOMedLayout() {  // so-called getElement
    if (this._DOMedLayout === null) {
      this._DOMedLayout = generateDOMedLayout(this.getStringLayout());
    }
    return this._DOMedLayout;
  }
  clearDOMedLayoutHolder() {  // so-called removeElement
    this._DOMedLayout = null;
  }
}
