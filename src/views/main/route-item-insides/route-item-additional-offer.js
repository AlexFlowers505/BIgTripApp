import { generateDOMedLayout } from "../../../toolKit/utils"


const generateRouteItemAdditionalOfferLayout = (dataHolder) => {
  return `<li class="event__offer">
            <span class="event__offer-title">${dataHolder.name}</span>
            &plus;${dataHolder.curency}&nbsp;
            <span class="event__offer-price">${dataHolder.price}</span>
          </li>`
}

export default class RouteItemAdditionalOfferLayout {
  constructor(givenRouteItem) {
    this._DOMedLayout = null;
    this._routeOffersData = givenRouteItem;
  }
  getStringLayout() { // so-called getTemplate
    return generateRouteItemAdditionalOfferLayout(this._routeOffersData);
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

// export default class FoldedRouteItemLayout {
//   constructor(givenRouteItem) {
//     this._DOMedLayout = null;
//     this._routeData = givenRouteItem;
//   }
//   getStringLayout() { // so-called getTemplate
//     return generateFoldedRouteItemLayout(this._routeData);
//   }
//   getDOMedLayout() {  // so-called getElement
//     if (this._DOMedLayout === null) {
//       this._DOMedLayout = generateDOMedLayout(this.getStringLayout());
//     }
//     return this._DOMedLayout;
//   }
//   clearDOMedLayoutHolder() {  // so-called removeElement
//     this._DOMedLayout = null;
//   }
// }
