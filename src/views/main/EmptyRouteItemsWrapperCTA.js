import Abstract from "../toolKit/abstract";

const generateEmptyRouteItemsWrapperCTA = () => {
  return `<p class="trip-events__msg">Click New Event to create your first point</p>`;
};

export default class EmptyRouteItemsWrapperCTA extends Abstract {
  getStringLayout() { // so-called getTemplate
    return generateEmptyRouteItemsWrapperCTA();
  }
}
