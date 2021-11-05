import Abstract from "../../toolKit/abstract";

const generateRouteItemAdditionalOfferLayout = (dataHolder) => {
  return `<li class="event__offer">
            <span class="event__offer-title">${dataHolder.name}</span>
            &plus;${dataHolder.curency}&nbsp;
            <span class="event__offer-price">${dataHolder.price}</span>
          </li>`
}

export default class RouteItemAdditionalOfferLayout extends Abstract {
  constructor(givenRouteItem) {
    super();
    this._routeOffersData = givenRouteItem;
  }
  getStringLayout() { // so-called getTemplate
    return generateRouteItemAdditionalOfferLayout(this._routeOffersData);
  }
}
