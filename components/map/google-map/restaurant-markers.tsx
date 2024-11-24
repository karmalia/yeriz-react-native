import { View, Text } from "react-native";
import React from "react";

import useGoogleMapStore from "@/stores/googleMapStore";
import { useGetNearbyCompanies } from "@/api/queries/companies/get-nearby-companies";
import { Marker } from "react-native-maps";
import { useSearchedCompanies } from "@/api/queries/search/get-searched-companies";

type Props = {};

const RestaurantMarkers = (props: Props) => {
  const {
    latitude,
    longitude,
    latitudeDelta,
    longitudeDelta,
    zoomLevel,
    distanceArranged,
  } = useGoogleMapStore();

  const { isLoading, error, data, isError } = useSearchedCompanies({
    filters: {
      cuisineCategoryIds: [],
    },

    location: {
      latitude: latitude,
      longitude: longitude,
      distance: zoomLevel * 1000,
    },
  });

  if (data) {
    return (
      <>
        <Marker coordinate={{ latitude, longitude }} title="You are here" />
        {data.map((company) => (
          <Marker
            key={company.id}
            coordinate={{
              latitude: company.lat,
              longitude: company.long,
            }}
            title={company.name}
            description={company.companyTypeName + " " + company.distance}
            onPress={() => {
              // Handle marker press
              console.log(`Marker pressed: ${company.name}`);
            }}
          />
        ))}
      </>
    );
  }
};

export default RestaurantMarkers;
