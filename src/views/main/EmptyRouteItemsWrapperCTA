import { generateDOMedLayout } from "../../toolKit/utils";

const generateEmptyRouteItemsWrapperCTA = () => {
  return `<p class="trip-events__msg">Click New Event to create your first point</p>`;
};

export default class EmptyRouteItemsWrapperCTA {
  constructor() {
    this._DOMedLayout = null;
  }
  getStringLayout() { // so-called getTemplate
    return generateEmptyRouteItemsWrapperCTA();
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
