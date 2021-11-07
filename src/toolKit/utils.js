export const utils = {
  methods: {
      getRandomNumber(min, max) {
        return Math.floor(Math.random() * ((max + 1) - min)) + min;
      },
      getUniqueSetOfRandomNumbers(min, max, quantity) {
        const randomNumbers = new Set;
          for (let i = 0; randomNumbers.size < quantity; i++) {
            randomNumbers.add(utils.methods.getRandomNumber(min, max));
          }
        return randomNumbers;
      },
  }
}
















// imports

// import dayjs from "dayjs";
// import relativeTime from "dayjs/plugin/relativeTime";
// dayjs.extend(relativeTime);

// // the code

// export const RenderPosition = {
//     AFTERBEGIN: `afterbegin`,
//     BEFOREEND: `beforeend`
// };
// export function renderElement (tag, element, position) {
// switch (position) {
//     case RenderPosition.AFTERBEGIN :
//     tag.prepend(element);
//     break;
//     case RenderPosition.BEFOREEND:
//     tag.append(element);
//     break;
// }
// };
// export function renderTemplate (tag, template, position) {
// tag.insertAdjacentHTML(position, template);
// };

// class SiteMenuView {
//   constructor() {
//       this._element = null;
//   }
//   getTemplate() {
//       return createSiteMenuTemplate(); // типа у нас уже есть эта внешняя функция с рендером какого-то элемента, которую мы не прописываем здесь просто "чтобы не раздувать класс"
//   }
//   getElement() {
//       if (!this._element) {
//       this._element = createElement(this.getTemplate());
//       }
//       return this._element;
//   }
//   removeElement() {
//       this._element = null;
//   }
// } // и такие классы просто напросто создаются для каждого ренедерящегося элемента. и все это как бы рефакторинг и все это просто вставляется вместо тех решений, что были до этого

//   renderElement(siteHeaderElement, new SiteMenuView().getElement(), RenderPosition.BEFOREEND);
