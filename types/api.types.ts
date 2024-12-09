export interface ICompany {
  companyTypeName: string;
  createdDate: string;
  deletedDate: null;
  distance: number;
  environmentallyFriendly: boolean;
  id: string;
  imageUrl: string;
  isTrustworthy: boolean;
  lat: number;
  long: number;
  name: string;
  ratingCount: number;
  starRating: number;
  updatedDate: null;
}

const data = {
  place: "places/ChIJ60jO_uLYuxQRKmMzDImLpa8",
  placeId: "ChIJ60jO_uLYuxQRKmMzDImLpa8",
  text: {
    text: "Konak/İzmir, Türkiye",
    matches: [
      {
        endOffset: 5,
      },
    ],
  },
  structuredFormat: {
    mainText: {
      text: "Konak",
      matches: [
        {
          endOffset: 5,
        },
      ],
    },
    secondaryText: {
      text: "İzmir, Türkiye",
    },
  },
  types: ["administrative_area_level_2", "geocode", "political"],
};

export interface ISuggestion {
  placePrediction: {
    place: string;
    placeId: string;
    text: {
      text: string;
      matches: {
        endOffset: number;
      }[];
    };
    structuredFormat: {
      mainText: {
        text: string;
        matches: {
          endOffset: number;
        }[];
      };
      secondaryText: {
        text: string;
      };
    };
    types: string[];
  };
}

export interface ICompanyComment {
  id: string | number;
  starRating: number;
  comment: string;
  createdAt: string;
}

export interface ICompanyDetail {
  id: string;
  name: string;
  imageUrl: string;
  email: string;
  mobilePhone: string;
  companyPhone: string;
  starRating: number;
  ratingCount: number;
  city: string;
  district: string;
  neighborhood: string;
  street: string;
  addressDetail: string;
  mapUrl: string;
  lat: number;
  long: number;
  companyTypeName: string;
  companyTypeDescription: string;
  companyTypeImageUrl: string;
  isActive: boolean;
  isDelete: boolean;
  environmentallyFriendly: boolean;
  isTrustworthy: boolean;
}

export interface ICompanyFood {
  id: number;
  category: string;
  data: {
    id: number;
    name: string;
    originalPrice: number;
    discountedPrice: number;
    availableTime: string;
    imageUrl: string;
  }[];
}
