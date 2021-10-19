// inports
import { utils } from "./utils";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

// the code
export const mocks = {
  mockData: {
    descriptionChunks: [
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      `Cras aliquet varius magna, non porta ligula feugiat eget.`,
      `Fusce tristique felis at fermentum pharetra.`,
      `Aliquam id orci ut lectus varius viverra.`,
      `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
      `Sed sed nisi sed augue convallis suscipit in sed felis.`,
      `Aliquam erat volutpat.`,
      `Nunc fermentum tortor ac porta dapibus.`,
      `In rutrum ac purus sit amet tempus.`
    ],
    routePointTypes: [`taxi`, `bus`, `train`, `ship`, `transport`, `drive`, `flight`, `check-in`, `sightseeing`, `restaurant`],
    destinationNames: [`Amsterdam`, `Chamonix`, `Geneva`],
    additionalOffers: [
      {
        name: `Add luggage`,
        price: 30,
        curency: `€`
      },
      {
        name: `Switch to comfort Class`,
        price: 100,
        curency: `€`
      },
      {
        name: `Add meal`,
        price: 15,
        curency: `€`
      },
      {
        name: `Choose seats`,
        price: 5,
        curency: `€`
      },
      {
        name: `Travel by train`,
        price: 40,
        curency: `€`
      }
    ]
  },
  routePointTemplate: {
    type: ``,
    destinationName: ``,
    additionalOffers: [],
    description: ``,
    photos: [],
    startDateTime: ``,
    endDateTime: ``,
    price: ``,
    isFavorite: false
  },
  noMagic: {
    additionalOffersLimit: 4,
    routePointsQnt: 5
  },
  methods: {
    getRoutePointRandomDescription(minSentences, maxSentences, sentences) {
      const description = [];
      const sentenceIndexes = [...utils.methods.getUniqueSetOfRandomNumbers(0, sentences.length-1, utils.methods.getRandomNumber(minSentences, maxSentences))];
      for (let i = 0; i < sentenceIndexes.length; i++) {
        description.push(sentences[sentenceIndexes[i]]);
      }
      return description.join(` `);
    },
    getRoutePointRandomPhotosLinks(minPhotos, maxPhotos) {
      const minPhotoSrcNumber = 1;
      const maxPhotoSrcNumber = 10;
      const photoSrc = `http://picsum.photos/248/152?r=`
      const photoSrcNumbers = [...utils.methods.getUniqueSetOfRandomNumbers(minPhotoSrcNumber, maxPhotoSrcNumber, utils.methods.getRandomNumber(minPhotos, maxPhotos))];
      const photos = [];
      for (let i = 0; i < photoSrcNumbers.length; i++) {
        photos.push(`${photoSrc}${photoSrcNumbers[i]}`)
      }
      return photos;
    },
    getSpecifiedRandomDescription() {
      return mocks.methods.getRoutePointRandomDescription(1, 5, mocks.mockData.descriptionChunks);
    },
    getSpecifiedRandomPhotosLinks() {
      return mocks.methods.getRoutePointRandomPhotosLinks(1,5);
    },
    getMockRouteType() {
      return mocks.mockData.routePointTypes[utils.methods.getRandomNumber(0, mocks.mockData.routePointTypes.length-1)];
    },
    getMockDestinationName() {
      return mocks.mockData.destinationNames[utils.methods.getRandomNumber(0, mocks.mockData.destinationNames)];
    },
    getRandomAdditionalOffers(additionalOffersLimit) {
      const mockAdditionalOffersRandomIndexes =  [...utils.methods.getUniqueSetOfRandomNumbers(0, mocks.mockData.additionalOffers.length-1, utils.methods.getRandomNumber(0, additionalOffersLimit))];
      const additionalRandomOffers = [];
      for (let i = 0; i < mockAdditionalOffersRandomIndexes.length; i++) {
        additionalRandomOffers.push(mocks.mockData.additionalOffers[mockAdditionalOffersRandomIndexes[i]]);
      };
      return additionalRandomOffers;
    },
    getMockFilledRoutePoint() {
      const mockRoutePoint = Object.assign({}, mocks.routePointTemplate);
      mockRoutePoint.type = mocks.mockData.routePointTypes[utils.methods.getRandomNumber(0, mocks.mockData.routePointTypes.length-1)];
      mockRoutePoint.destinationName = mocks.mockData.destinationNames[utils.methods.getRandomNumber(0, mocks.mockData.destinationNames.length-1)];
      mockRoutePoint.additionalOffers = mocks.methods.getRandomAdditionalOffers(mocks.noMagic.additionalOffersLimit);
      mockRoutePoint.description = mocks.methods.getSpecifiedRandomDescription();
      mockRoutePoint.photos = mocks.methods.getSpecifiedRandomPhotosLinks();
      mockRoutePoint.price = utils.methods.getRandomNumber(20, 100),
      mockRoutePoint.isFavorite = Boolean(utils.methods.getRandomNumber(0,1))
      mockRoutePoint.startDateTime = dayjs().add(utils.methods.getRandomNumber(1, 20), `day`).toDate();
      mockRoutePoint.endDateTime = dayjs(mockRoutePoint.startDateTime).add(utils.methods.getRandomNumber(5, 100), `minute`).toDate();
      return mockRoutePoint;
    },
    getMockFilledRoutePoints(qnt) {
      const mockRoutePoints = [];
      for (let i = 0; i < qnt; i++) {
        mockRoutePoints.push(mocks.methods.getMockFilledRoutePoint());
      }
      console.log(mockRoutePoints);
      return mockRoutePoints;
    }
  }
}

