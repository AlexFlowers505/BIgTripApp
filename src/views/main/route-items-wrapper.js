import Abstract from "../toolKit/abstract";

const generateRouteItemsWrapper = () => {
  return `<ul class="trip-events__list"></ul>`;
};

export default class RouteItemsWrapper extends Abstract {
  getStringLayout() { // so-called getTemplate
    return generateRouteItemsWrapper();
  }
}
