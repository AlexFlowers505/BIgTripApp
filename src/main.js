'use strict';
// imports
//  //  presenters

import RouteItemsTable from "./presenters/route-items-table";
//  // views imports

//  //  // header
// import { generateFullRouteOverallsDataLayout } from "./views/header/full-route-overalls-data-layout";
import FullRouteOverallsDataLayout from "./views/header/full-route-overalls-data-layout";
import RouteDataDisplayOptionsControlsLayout from "./views/header/route-data-display-options-controls-layout";
import TripEventsSortTableLayout from "./views/main/trip-events-sort-table-layout";

//  //  // main
import RouteItemsWrapper from "./views/main/route-items-wrapper";
import EmptyRouteItemsWrapperCTA from "./views/main/EmptyRouteItemsWrapperCTA";
import FoldedRouteItemLayout from "./views/main/folded-route-item-layout";
import RouteItemAdditionalOfferLayout from "./views/main/route-item-insides/route-item-additional-offer";
import RouteItemEditFormLayout from "./views/main/route-item-edit-form";
import RouteItemNewForm from "./views/main/route-item-new-form";

//  //  // routeItemInsides
import { generateRouteItemAdditionalOfferLayout } from "./views/main/route-item-insides/route-item-additional-offer";

//  // toolKit
import { mocks } from "./toolKit/mocks";
// import { render } from "./toolKit/render";
import { insertDOMedLayout, RenderPosition, replace, remove } from "./toolKit/render";


// the script
// const routeItemsWrapperComponent = new RouteItemsWrapper().getDOMedLayout();
// function renderTask (dataHolder) {
//   const foldedRouteItemComponent = new FoldedRouteItemLayout(dataHolder);

//   (function watchEditFormClick () {
//     const routeItemEditFormComponent = new RouteItemEditFormLayout(dataHolder);
//     const currentItemData = dataHolder;
//     const onEscKeyDown = (anEvt) => {
//       if (anEvt.key === `Escape` || anEvt.key === `Esc`) {
//         anEvt.preventDefault();
//         switchToFoldedRouteItemView(anEvt);
//         document.removeEventListener(`keydown`, onEscKeyDown);
//       }
//     }
//     const switchToEditRouteItemView = () => {
//       replace(routeItemEditFormComponent, foldedRouteItemComponent);
//       (function matchAdditionalOffersInEditForm() {
//         // insertDOMedLayout(routeItemsWrapperComponent, new RouteItemEditFormLayout(givenRouteItem).getDOMedLayout(), RenderPosition.AFTERBEGIN);
//         currentItemData.additionalOffers.forEach( anOffer => {
//           switch (anOffer.name) {
//             case `Add luggage` : routeItemEditFormComponent.getDOMedLayout().querySelector(`#event-offer-luggage-1`).setAttribute(`checked`, ``); break;  // ?? ???????? ???????? ?????????? ?????????????? ?????????????????? ????????, ?????????????????? ???? routeItemEditFormComponent.getDOMedLayout() ?????? ?????????? ????????????-???? ?????????? ???????????????? ?????????? ?????????????? routeItem-??
//             case `Switch to comfort Class` : routeItemEditFormComponent.getDOMedLayout().querySelector(`#event-offer-comfort-1`).setAttribute(`checked`, ``); break;
//             case `Add meal` : routeItemEditFormComponent.getDOMedLayout().querySelector(`#event-offer-meal-1`).setAttribute(`checked`, ``); break;
//             case `Choose seats` : routeItemEditFormComponent.getDOMedLayout().querySelector(`#event-offer-seats-1`).setAttribute(`checked`, ``); break;
//             case `Travel by train` : routeItemEditFormComponent.getDOMedLayout().querySelector(`#event-offer-train-1`).setAttribute(`checked`, ``); break;
//           }
//         })
//       })();
//     }
//     const switchToFoldedRouteItemView = () => {
//       replace(foldedRouteItemComponent, routeItemEditFormComponent);
//     }

//     // adding the watchers
//     foldedRouteItemComponent.setRollOutBtnClickHandler(()=> {
//       switchToEditRouteItemView();
//       document.addEventListener(`keydown`, onEscKeyDown)
//     })
//     routeItemEditFormComponent.setSubmitClickHandler(()=>{
//       switchToFoldedRouteItemView();
//       document.removeEventListener(`keydown`, onEscKeyDown);
//     })
//     routeItemEditFormComponent.setRollUpBtnClickHandler(()=>{ // ???? ???????? ?????????????????????? ?????????????? ??????????, ???? ?????? ???????????? ?? ???????????????????? ?? ???????????????????? (?? ??????.?????????????? evt.preventDefault() ???????????????????? ?????? ?? ?????????? ?????????????? ????????????????????)
//       switchToFoldedRouteItemView();
//       document.removeEventListener(`keydown`, onEscKeyDown);
//     })

//   })();
//   (function actuallyRenderGivenTasks () {
//     insertDOMedLayout(routeItemsWrapperComponent, foldedRouteItemComponent.getDOMedLayout(), RenderPosition.BEFOREEND);
//     // render additional offers
//     dataHolder.additionalOffers.forEach( anOffer => {
//         const additionalOffersLastRenderedWrapper = foldedRouteItemComponent.getDOMedLayout().querySelector(`.event__selected-offers`);
//         insertDOMedLayout(additionalOffersLastRenderedWrapper, new RouteItemAdditionalOfferLayout(anOffer).getDOMedLayout(), RenderPosition.BEFOREEND);
//     })
//     // define if farovite
//     if (dataHolder.isFavorite) {
//       foldedRouteItemComponent.getDOMedLayout().querySelector(`.event__favorite-btn`).classList.add(`event__favorite-btn--active`);
//       // ?? ???????????? ???????? foldedRouteItemComponent.querySelector(`.event__favorite-btn`)[document.querySelectorAll(`.event__favorite-btn`).length-1]
//     }
//   })();
// }
// function renderPage (givenRouteItems) {
//   insertDOMedLayout(htmlRefs.headerWholeDataWrapper, new FullRouteOverallsDataLayout().getDOMedLayout(), RenderPosition.AFTERBEGIN);
//   insertDOMedLayout(htmlRefs.routeDataDisplayOptionsControlsWrapper, new RouteDataDisplayOptionsControlsLayout().getDOMedLayout(), RenderPosition.AFTERBEGIN);
//   insertDOMedLayout(htmlRefs.tripEventsSection, new TripEventsSortTableLayout().getDOMedLayout(), RenderPosition.BEFOREEND);

//   insertDOMedLayout(htmlRefs.tripEventsSection, routeItemsWrapperComponent, RenderPosition.BEFOREEND);
//   for (let aRouteItem of givenRouteItems) { renderTask(aRouteItem) }
//   (function checkIfNoTasks () {
//     const emptyRouteItemsWrapperCTAcomponent = new EmptyRouteItemsWrapperCTA().getDOMedLayout();
//     if (routeItemsWrapperComponent.querySelectorAll(`.trip-events__item`).length <= 0) {
//       insertDOMedLayout(routeItemsWrapperComponent, emptyRouteItemsWrapperCTAcomponent, RenderPosition.AFTERBEGIN);
//     } else {
//       emptyRouteItemsWrapperCTAcomponent.remove();
//     }
//   })();
//   // insertDOMedLayout(routeItemsWrapperComponent, new RouteItemNewForm().getDOMedLayout(), RenderPosition.AFTERBEGIN);
// };

// (function bedazzle() {
//   renderPage(mocks.methods.getMockFilledRoutePoints(5));
// })();

const RouteItemsTablePresenter = new RouteItemsTable();
RouteItemsTablePresenter.init(mocks.methods.getMockFilledRoutePoints(5));
RouteItemsTablePresenter._renderRouteItemsTable();
