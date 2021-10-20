export const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`,
}

export const render_n_insertStringLayout = (layoutWrapper, layout, layoutToWrapperPosition) => {  // so-called getTemplate() in HTMLAcademy; под шаблоном имеется в виду неотрендеренный html
  layoutWrapper.insertAdjacentHTML(layoutToWrapperPosition, layout);
};

export const insertDOMedLayout = (layoutWrapper, layout, layoutToWrapperPosition) => { // so-called getElement() in HTMLAcademy; insertRenderedLayout() would be a possible name as well // под элементом имеется в виду отрендеренный эелемент
  switch (layoutToWrapperPosition) {
    case RenderPosition.AFTERBEGIN: layoutWrapper.prepend(layout); break;
    case RenderPosition.BEFOREEND: layoutWrapper.append(layout); break;
  }
}
// 01: 48 - инфа по рендеру таска
