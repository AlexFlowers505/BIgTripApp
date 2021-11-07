import Abstract from "../views/toolKit/abstract";

export const generateDOMedLayout = (layout) => {
  const dOMedLayout = document.createElement(`div`);
  dOMedLayout.innerHTML = layout;
  return dOMedLayout.firstChild;
}

export const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`,
}

export const insertDOMedLayout = (layoutWrapper, layout, insertionPosition) => {
  if (layoutWrapper instanceof Abstract) {  // ну тип если мы используем не просто DOMedLayout, а уже компонент...
    layoutWrapper = layoutWrapper.getDOMedLayout(); // ...то и обращаться с ним мы будем как с компонентом, в противном случае все пройдет по тому же сценарию, что и раньше
  }
  if (layout instanceof Abstract) {
    layout = layout.getDOMedLayout();
  }
  switch (insertionPosition) {
    case RenderPosition.AFTERBEGIN: layoutWrapper.prepend(layout); break;
    case RenderPosition.BEFOREEND: layoutWrapper.append(layout); break;
  }
}

export const replace = (incoming, toBeReplaced) => {  // по сути тот же встроенный .replaceChild, просто с теми же проверками на наличие в качестве аргументов именно компонентов, а не просто элементов, с внесением соответствующих изменений
  if (toBeReplaced instanceof Abstract) {
    toBeReplaced = toBeReplaced.getDOMedLayout();
  }
  if (incoming instanceof Abstract) {
    incoming = incoming.getDOMedLayout();
  }
  const parentWrapper = toBeReplaced.parentElement;
  if (parentWrapper === null || toBeReplaced === null || incoming === null) {
    throw new Error(`Either the wrapper element or the element to be replaced or the element to be placed is null`)
  }
  parentWrapper.replaceChild(incoming, toBeReplaced);
}
export const remove = (component) => {
  if (!(component instanceof Abstract)) {
    throw new Error(`Can only remove components, ${component} is not one of them`);
  }
  component.getDOMedLayout().remove();  // удаляем элемент из дома
  component.clearDOMedLayoutHolder(); // очищаем переменную, хранящую в памяти этот элемент
}

// export const render_n_insertStringLayout = (layoutWrapper, layout, layoutToWrapperPosition) => {  // so-called getTemplate() in HTMLAcademy; под шаблоном имеется в виду неотрендеренный html
//   layoutWrapper.insertAdjacentHTML(layoutToWrapperPosition, layout);
// };
