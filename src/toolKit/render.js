export const render = (layoutWrapper, layout, layoutToWrapperPosition) => {
  layoutWrapper.insertAdjacentHTML(layoutToWrapperPosition, layout);
};
