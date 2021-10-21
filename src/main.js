'use strict';
// imports

//  // views imports

//  //  // header
// import { generateFullRouteOverallsDataLayout } from "./views/header/full-route-overalls-data-layout";
import FullRouteOverallsDataLayout from "./views/header/full-route-overalls-data-layout";
import RouteDataDisplayOptionsControlsLayout from "./views/header/route-data-display-options-controls-layout";
import TripEventsSortTableLayout from "./views/main/trip-events-sort-table-layout";

//  //  // main
import RouteItemsWrapper from "./views/main/route-items-wrapper";
import FoldedRouteItemLayout from "./views/main/folded-route-item-layout";
import RouteItemEditFormLayout from "./views/main/route-item-edit-form";
import RouteItemNewForm from "./views/main/route-item-new-form";

//  //  // routeItemInsides
import { generateRouteItemAdditionalOfferLayout } from "./views/main/route-item-insides/route-item-additional-offer";

//  // toolKit
import { mocks } from "./toolKit/mocks";
// import { render } from "./toolKit/render";
import { render_n_insertStringLayout, insertDOMedLayout, RenderPosition } from "./toolKit/render";


// the script

//  // starting out code
const htmlRefs = {
  headerWholeDataWrapper: document.querySelector(`.trip-main`),
  routeDataDisplayOptionsControlsWrapper: document.querySelector(`.trip-main__trip-controls`),
  tripEventsSection: document.querySelector(`.trip-events`),
};


//  //  // main

function renderPage (givenRouteItems) {
  //  //  // header
  // render(htmlRefs.headerWholeDataWrapper, generateFullRouteOverallsDataLayout(), `afterbegin`);
  insertDOMedLayout(htmlRefs.headerWholeDataWrapper, new FullRouteOverallsDataLayout().getDOMedLayout(), RenderPosition.AFTERBEGIN);
  // теперь вставку можно осуществлять, указывая в качестве layoutWrapper-а — например, отрендеренный до этого routeItemsWrapper.
  // т.е., сначала мы рендерим этот будущий layout wrapper:
  // создаем const routeItemsWrapperComponent = new RouteItemsWrapperLayout(); (который можно переименовать в RouteItemsWrapperView)
  // далее, делаем вызов RouteItemsWrapperComponent.getDOMedLayout(), используя его вторым аргументом функции insertDOMedLayout()
  // и теперь мы можем использовать этот же RouteItemsWrapperComponent.getDOMedLayout() в качестве первого аргумента той же функции
  // т.е. этот элемент уже в ДОМе, и теперь, метод routeItemsWrapperComponent.getDOMedLayout(), будучи на месте параметра layoutWrapper будет просто-напросто указывать на этот элемент в доме по принципу действия того же document.querySelector(), вот и всё
  // я все так же хуй знает нахуй это все вообще нужно делать, но тем не менее, вот так вот это все может теперь работать

  // удаление элемента со страницы будет вьюха.getElement.remove() (стандартный метод ДОМовых элементов)
  // а удаление из этого хуй знает где находящегося виртуального рендера будет – вьюха.removeElement();

  insertDOMedLayout(htmlRefs.routeDataDisplayOptionsControlsWrapper, new RouteDataDisplayOptionsControlsLayout().getDOMedLayout(), RenderPosition.AFTERBEGIN);
  insertDOMedLayout(htmlRefs.tripEventsSection, new TripEventsSortTableLayout().getDOMedLayout(), RenderPosition.BEFOREEND);
  const routeItemsWrapperComponent = new RouteItemsWrapper().getDOMedLayout(); // почему-то работает как альтернатива `document.querySelector(`.trip-events__list`); // unable to get it before render to be put in htmlRefs`
  // видимо несмотря на слово `new`, поскольку это  `const`, все равно обращение идет каждый раз не к новому экземпляру, а все к тому же единожды созданному при инициализации переменной const. И если объявить другую переменую с такой же правой чатсью после `=`, вот это уже будет другой экземляр. Или типа того
  // соответственно, обращаясь к new RouteItemsWrapp().getDOMedLayout() вне переменной, ты, по идее, точно так же обратишься к новому, а не к существующему экземпляру
  insertDOMedLayout(htmlRefs.tripEventsSection, routeItemsWrapperComponent, RenderPosition.BEFOREEND);
    for (let aRouteItem of givenRouteItems) { // render multiple routeItems
      insertDOMedLayout(routeItemsWrapperComponent, new FoldedRouteItemLayout(aRouteItem).getDOMedLayout(), RenderPosition.BEFOREEND);
      // render additional offers
      aRouteItem.additionalOffers.forEach( anOffer => {
          let additionalOffersLastRenderedWrapper = document.querySelectorAll(`.event__selected-offers`)[document.querySelectorAll(`.event__selected-offers`).length-1];
          render_n_insertStringLayout(additionalOffersLastRenderedWrapper, generateRouteItemAdditionalOfferLayout(anOffer), `beforeend`);
      })
      // define if farovite
      if (aRouteItem.isFavorite) {
        document.querySelectorAll(`.event__favorite-btn`)[document.querySelectorAll(`.event__favorite-btn`).length-1].classList.add(`event__favorite-btn--active`);
      }
    }
  //  //  // render edit form
  function renderEditForm (givenRouteItem) {
    insertDOMedLayout(routeItemsWrapperComponent, new RouteItemEditFormLayout(givenRouteItem).getDOMedLayout(), RenderPosition.AFTERBEGIN);

    givenRouteItem.additionalOffers.forEach( anOffer => {
      switch (anOffer.name) {
        case `Add luggage` : document.querySelector(`#event-offer-luggage-1`).setAttribute(`checked`, ``); break;
        case `Switch to comfort Class` : document.querySelector(`#event-offer-comfort-1`).setAttribute(`checked`, ``); break;
        case `Add meal` : document.querySelector(`#event-offer-meal-1`).setAttribute(`checked`, ``); break;
        case `Choose seats` : document.querySelector(`#event-offer-seats-1`).setAttribute(`checked`, ``); break;
        case `Travel by train` : document.querySelector(`#event-offer-train-1`).setAttribute(`checked`, ``); break;
      }
    })
  };
  renderEditForm(givenRouteItems[0]);
  // insertDOMedLayout(routeItemsWrapperComponent, new RouteItemNewForm().getDOMedLayout(), RenderPosition.AFTERBEGIN);
};
// 01:58
renderPage(mocks.methods.getMockFilledRoutePoints(5));
console.log(mocks.methods.getMockFilledRoutePoint());
