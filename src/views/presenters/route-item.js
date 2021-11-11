//  imports
//  //  views
//  // //  header
import FullRouteOverallsDataLayout from "../header/full-route-overalls-data-layout";
import RouteDataDisplayOptionsControlsLayout from "../header/route-data-display-options-controls-layout";
//  //  //  body
import TripEventsSortTableLayout from "../main/trip-events-sort-table-layout";
import EmptyRouteItemsWrapperCTA from "../main/EmptyRouteItemsWrapperCTA";
import RouteItemsWrapper from "../main/route-items-wrapper";
import RouteItemNewForm from "../main/route-item-new-form";
import RouteItemEditFormLayout from "../main/route-item-edit-form";
import FoldedRouteItemLayout from "../main/folded-route-item-layout";
import RouteItemAdditionalOfferLayout from "../main/route-item-insides/route-item-additional-offer";
//  //  render
import {insertDOMedLayout, RenderPosition, replace, remove} from "../../toolKit/render.js";


export default class RouteItem {
  constructor(dataHolder) {
    this._dataHolder = dataHolder;

    this._foldedRouteItemComponent = null;
    this._routeItemEditFormComponent = null;
  }
  init() {
    console.log(this._dataHolder);
    this._foldedRouteItemComponent = new FoldedRouteItemLayout(this._dataHolder);
    this._routeItemEditFormComponent = new RouteItemEditFormLayout(this._dataHolder);

    // function watchEditFormClick
      const onEscKeyDown = (anEvt) => {
        if (anEvt.key === `Escape` || anEvt.key === `Esc`) {
          anEvt.preventDefault();
          switchToFoldedRouteItemView(anEvt);
          document.removeEventListener(`keydown`, onEscKeyDown);
        }
      }
        const switchToEditRouteItemView = () => {
          replace(this._routeItemEditFormComponent, this._foldedRouteItemComponent);
          // matchAdditionalOffersInEditForm
          this._dataHolder.additionalOffers.forEach( anOffer => {
            switch (anOffer.name) {
              case `Add luggage` : this._routeItemEditFormComponent.getDOMedLayout().querySelector(`#event-offer-luggage-1`).setAttribute(`checked`, ``); break;  // и даже если будет открыто несколько форм, обращение по routeItemEditFormComponent.getDOMedLayout() все равно ПОЧЕМУ-то будет находить форму нужного routeItem-а
              case `Switch to comfort Class` : this._routeItemEditFormComponent.getDOMedLayout().querySelector(`#event-offer-comfort-1`).setAttribute(`checked`, ``); break;
              case `Add meal` : this._routeItemEditFormComponent.getDOMedLayout().querySelector(`#event-offer-meal-1`).setAttribute(`checked`, ``); break;
              case `Choose seats` : this._routeItemEditFormComponent.getDOMedLayout().querySelector(`#event-offer-seats-1`).setAttribute(`checked`, ``); break;
              case `Travel by train` : this._routeItemEditFormComponent.getDOMedLayout().querySelector(`#event-offer-train-1`).setAttribute(`checked`, ``); break;
            }
          })
        }
      const switchToFoldedRouteItemView = () => {
        replace(this._foldedRouteItemComponent, this._routeItemEditFormComponent);
      }
      // adding the watchers
      this._foldedRouteItemComponent.setRollOutBtnClickHandler(()=> {
        switchToEditRouteItemView();
        document.addEventListener(`keydown`, onEscKeyDown)
      })
      this._routeItemEditFormComponent.setSubmitClickHandler(()=>{
        switchToFoldedRouteItemView();
        document.removeEventListener(`keydown`, onEscKeyDown);
      })
      this._routeItemEditFormComponent.setRollUpBtnClickHandler(()=>{ // по сути прописываем коллбэк здесь, но его запуск и сохранение в переменную (и доп.команда evt.preventDefault() происходят уже в самом объекте компонента)
        switchToFoldedRouteItemView();
        document.removeEventListener(`keydown`, onEscKeyDown);
      })
    // function actuallyRenderGivenTasks
      insertDOMedLayout(document.querySelector(`.trip-events__list`), this._foldedRouteItemComponent, RenderPosition.BEFOREEND);
      // render additional offers
      this._dataHolder.additionalOffers.forEach( anOffer => {
          const additionalOffersLastRenderedWrapper = this._foldedRouteItemComponent.getDOMedLayout().querySelector(`.event__selected-offers`);
          insertDOMedLayout(additionalOffersLastRenderedWrapper, new RouteItemAdditionalOfferLayout(anOffer).getDOMedLayout(), RenderPosition.BEFOREEND);
      })
      // define if farovite
      if (this._dataHolder.isFavorite) {
        this._foldedRouteItemComponent.getDOMedLayout().querySelector(`.event__favorite-btn`).classList.add(`event__favorite-btn--active`);
      }
    }
  }
