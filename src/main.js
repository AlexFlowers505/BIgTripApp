'use strict';
// imports

//  // views imports

//  //  // header
import { generateFullRouteOverallsDataLayout } from "./views/header/full-route-overalls-data-layout";
import { generateRouteDataDisplayOptionsControlsLayout } from "./views/header/route-data-display-options-controls-layout";
import { generateTripEventsSortTableLayout } from "./views/main/trip-events-sort-table-layout";

//  //  // main
import { generateRouteItemsWrapper } from "./views/main/route-items-wrapper";
import { generateFoldedRouteItemLayout } from "./views/main/folded-route-item-layout";
import { generateRouteItemEditFormLayout } from "./views/main/route-item-edit-form";
import { generateRouteItemNewForm } from "./views/main/route-item-new-form";

//  //  // routeItemInsides
import { generateRouteItemAdditionalOfferLayout } from "./views/main/route-item-insides/route-item-additional-offer";

//  // toolKit
import { mocks } from "./toolKit/mocks";
import { render } from "./toolKit/render";


// the script

//  // starting out code
const htmlRefs = {
  headerWholeDataWrapper: document.querySelector(`.trip-main`),
  routeDataDisplayOptionsControlsWrapper: document.querySelector(`.trip-main__trip-controls`),
  tripEventsSection: document.querySelector(`.trip-events`),
};


//  // the render

//  //  // header
render(htmlRefs.headerWholeDataWrapper, generateFullRouteOverallsDataLayout(), `afterbegin`);
render(htmlRefs.routeDataDisplayOptionsControlsWrapper, generateRouteDataDisplayOptionsControlsLayout(), `afterbegin`);

//  //  // main
render(htmlRefs.tripEventsSection, generateTripEventsSortTableLayout(), `beforeend`);
render(htmlRefs.tripEventsSection, generateRouteItemsWrapper(), `beforeend`);
const routeItemsWrapper = document.querySelector(`.trip-events__list`); // unable to get it before render to be put in htmlRefs
for (let i = 0; i<3; i++) { // render multiple routeItems
  let filledRoutePointData = mocks.methods.getMockFilledRoutePoint();
  render(routeItemsWrapper, generateFoldedRouteItemLayout(filledRoutePointData), `beforeend`);
  // render additional offers
  filledRoutePointData.additionalOffers.forEach( anOffer => {
      let additionalOffersLastRenderedWrapper = document.querySelectorAll(`.event__selected-offers`)[document.querySelectorAll(`.event__selected-offers`).length-1];
      render(additionalOffersLastRenderedWrapper, generateRouteItemAdditionalOfferLayout(anOffer), `beforeend`);
  })
  // define if farovite
  if (filledRoutePointData.isFavorite) {
    document.querySelectorAll(`.event__favorite-btn`)[document.querySelectorAll(`.event__favorite-btn`).length-1].classList.add(`event__favorite-btn--active`);
  }
}
//  //  // render edit form
(function renderEditForm () {
  let filledRoutePointData = mocks.methods.getMockFilledRoutePoint();
  render(routeItemsWrapper, generateRouteItemEditFormLayout(filledRoutePointData), `afterbegin`);
  filledRoutePointData.additionalOffers.forEach( anOffer => {
    if (anOffer.name == `Add luggage`) {
      document.querySelector(`#event-offer-luggage-1`).setAttribute(`checked`, ``);
    } else if (anOffer.name == `Switch to comfort Class`) {
      document.querySelector(`#event-offer-comfort-1`).setAttribute(`checked`, ``);
    } else if (anOffer.name == `Add meal`) {
      document.querySelector(`#event-offer-meal-1`).setAttribute(`checked`, ``);
    } else if (anOffer.name == `Choose seats`) {
      document.querySelector(`#event-offer-seats-1`).setAttribute(`checked`, ``);
    } else if (anOffer.name == `Travel by train`) {
      document.querySelector(`#event-offer-train-1`).setAttribute(`checked`, ``);
    }
  })
})();

// render(routeItemsWrapper, generateRouteItemNewForm(), `afterbegin`);

// 01:58
console.log(mocks.methods.getMockFilledRoutePoint());
