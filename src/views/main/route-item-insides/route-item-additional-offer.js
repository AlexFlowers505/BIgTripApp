export const generateRouteItemAdditionalOfferLayout = (dataHolder) => {
  return `
  <li class="event__offer">
    <span class="event__offer-title">${dataHolder.name}</span>
    &plus;${dataHolder.curency}&nbsp;
    <span class="event__offer-price">${dataHolder.price}</span>
  </li>`
}
