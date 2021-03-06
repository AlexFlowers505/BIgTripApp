//  imports
//  //  views
//  // //  header
import FullRouteOverallsDataLayout from "../views/header/full-route-overalls-data-layout";
import RouteDataDisplayOptionsControlsLayout from "../views/header/route-data-display-options-controls-layout";
//  //  //  body
import TripEventsSortTableLayout from "../views/main/trip-events-sort-table-layout";
import EmptyRouteItemsWrapperCTA from "../views/main/EmptyRouteItemsWrapperCTA";
import RouteItemsWrapper from "../views/main/route-items-wrapper";
import RouteItemNewForm from "../views/main/route-item-new-form";
import RouteItemEditFormLayout from "../views/main/route-item-edit-form";
import FoldedRouteItemLayout from "../views/main/folded-route-item-layout";
import RouteItemAdditionalOfferLayout from "../views/main/route-item-insides/route-item-additional-offer";
//  //  presenters
import RouteItem from "./route-item";
//  //  render
import {insertDOMedLayout, RenderPosition, replace, remove} from "../toolKit/render.js";

// export
export default class RouteItemsTable {
  constructor() {
    // this._tableContainer = tableContainer;
    this._mockRouteItemsQnt = 5;

    this._headerWholeDataWrapper = document.querySelector(`.trip-main`);
    this._routeDataDisplayOptionsControlsWrapper = document.querySelector(`.trip-main__trip-controls`);
    this._tripEventsSection = document.querySelector(`.trip-events`);

    this._routeItemsIDs = {};
    this._handleRouteItemChange = this._handleRouteItemChange.bind(this);

    this._fullRouteOverallsDataLayoutComponent = new FullRouteOverallsDataLayout();
    this._routeDataDisplayOptionsControlsLayoutComponent = new RouteDataDisplayOptionsControlsLayout();

    this._tripEventsSortTableLayoutComponent = new TripEventsSortTableLayout();
    this._emptyRouteItemsWrapperCTAComponent = new EmptyRouteItemsWrapperCTA();
    this._routeItemsWrapperComponent = new RouteItemsWrapper();
    this._routeItemNewFormComponent = new RouteItemNewForm();
    this._routeItemEditFormLayoutComponent = new RouteItemEditFormLayout();
    this._foldedRouteItemLayoutComponent = new FoldedRouteItemLayout();
    this._routeItemAdditionalOfferLayoutComponent = new RouteItemAdditionalOfferLayout();
  }
  init(routeItems) {
    this._routeItems = routeItems.slice();  // .slice() ?????? ???????????????????? ???????????????????? ???????????????????? ?????????? ??????????????
    insertDOMedLayout(this._tripEventsSection, this._routeItemsWrapperComponent, RenderPosition.BEFOREEND);
  }
  _renderActivityStatusBlock() {
    insertDOMedLayout(this._routeDataDisplayOptionsControlsWrapper, this._routeDataDisplayOptionsControlsLayoutComponent, RenderPosition.AFTERBEGIN);
  }
  _renderSortingBlock() {
    insertDOMedLayout(this._tripEventsSection, this._tripEventsSortTableLayoutComponent, RenderPosition.AFTERBEGIN);
  };
  // _renderRouteItem(dataHolder) {
  //   const foldedRouteItemComponent = new FoldedRouteItemLayout(dataHolder);
  //   // function watchEditFormClick
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
  //   // function actuallyRenderGivenTasks
  //     insertDOMedLayout(this._routeItemsWrapperComponent, foldedRouteItemComponent.getDOMedLayout(), RenderPosition.BEFOREEND);
  //     // render additional offers
  //     dataHolder.additionalOffers.forEach( anOffer => {
  //         const additionalOffersLastRenderedWrapper = foldedRouteItemComponent.getDOMedLayout().querySelector(`.event__selected-offers`);
  //         insertDOMedLayout(additionalOffersLastRenderedWrapper, new RouteItemAdditionalOfferLayout(anOffer).getDOMedLayout(), RenderPosition.BEFOREEND);
  //     })
  //     // define if farovite
  //     if (dataHolder.isFavorite) {
  //       foldedRouteItemComponent.getDOMedLayout().querySelector(`.event__favorite-btn`).classList.add(`event__favorite-btn--active`);
  //     }
  // };
  _renderRouteItem(dataHolder) {
    const routeItemPresenter = new RouteItem(dataHolder);
    routeItemPresenter.init();
    this._routeItemsIDs[dataHolder.id] = routeItemPresenter;
  }
  _renderRouteItems() {
    this._routeItems.slice().forEach((anItem)=>this._renderRouteItem(anItem));
  };
  _clearRouteItemsWrapper() {
    Object
    .values(this._routeItemsIDs)
    .forEach((presenter)=> presenter.destroy());
    this._routeItemsIDs = {};
  }
  _renderEmptyRouteItemsWrapperCTA() {
      insertDOMedLayout(this._routeItemsWrapperComponent, this._emptyRouteItemsWrapperCTAComponent, RenderPosition.AFTERBEGIN);
  };
  _handleRouteItemChange(updatedItem) {
    this._routeItems = updateItem(this._routeItems, updatedItem);
    this.routePresenter[updatedItem.id].init(updatedItem);
  }
  _renderRouteItemsTable() {
    if (this._routeItems.length < 1) {
      this._renderEmptyRouteItemsWrapperCTA();
      return;
    }
    insertDOMedLayout(this._headerWholeDataWrapper, this._fullRouteOverallsDataLayoutComponent, RenderPosition.AFTERBEGIN);
    this._renderActivityStatusBlock();
    this._renderSortingBlock();
    this._renderRouteItems();
    // this._renderFoldedRouteItems(mocks.methods.getMockFilledRoutePoints(5));
  }
}
