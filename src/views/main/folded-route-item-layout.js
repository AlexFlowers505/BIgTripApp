import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
import Abstract from "../toolKit/abstract";


const generateFoldedRouteItemLayout = (dataHolder) => {
  return `<li class="trip-events__item">
              <div class="event">
              <time class="event__date" datetime="${dayjs(dataHolder.startDateTime).format(`YYYY-MM-DD`)}">${dayjs(dataHolder.startDayTime).format(`MMM DD`).toUpperCase()}</time>
              <div class="event__type">
                <img class="event__type-icon" width="42" height="42" src="img/icons/${dataHolder.type}.png" alt="Event type icon">
              </div>
                <h3 class="event__title">${dataHolder.type} ${dataHolder.destinationName}</h3>
              <div class="event__schedule">
                  <p class="event__time">
                    <time class="event__start-time" datetime="${dayjs(dataHolder.startDateTime).format(`YYYY-MM-DDTHH:mm`)}">${dayjs(dataHolder.startDateTime).format(`HH:mm`)}</time>
                    &mdash;
                    <time class="event__end-time" datetime="${dayjs(dataHolder.endDateTime).format(`YYYY-MM-DDTHH:mm`)}">${dayjs(dataHolder.endDateTime).format(`HH:mm`)}</time>
                  </p>
                  <p class="event__duration">${dayjs(dataHolder.endDateTime).diff(dayjs(dataHolder.startDateTime), `minute`)}M</p>
              </div>
                <p class="event__price">
                  &euro;&nbsp;<span class="event__price-value">${dataHolder.price}</span>
                </p>
                <h4 class="visually-hidden">Offers:</h4>
                <ul class="event__selected-offers">
                  <!-- additional offers to be put here -->
                </ul>
                <button class="event__favorite-btn" type="button">
                  <span class="visually-hidden">Add to favorite</span>
                  <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
                    <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
                  </svg>
                </button>
                <button class="event__rollup-btn" type="button">
                  <span class="visually-hidden">Open event</span>
                </button>
              </div>
  </li>`;
};

export default class FoldedRouteItemLayout extends Abstract {
  constructor(givenRouteItem) {
    super();
    this._routeData = givenRouteItem;
}
  getStringLayout() {
    return generateFoldedRouteItemLayout(this._routeData);
  }
}
