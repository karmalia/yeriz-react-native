import calculateDeltas from "@/lib/utils/calculateDelta";
import { TFood } from "@/types";
import { create } from "zustand";

interface MapState {
  distanceArranged: boolean;
  latitude: number;
  longitude: number;
  latitudeDelta: number | null;
  longitudeDelta: number | null;
  zoomLevel: number;
  changeLocation: (latitude: number, longitude: number) => void;
  changeDistanceArranged: (value: boolean) => void;
  changeZoomLevel: (zoomLevel: number) => void;
}

const useGoogleMapStore = create<MapState>((set, get) => {
  const changeLocation = (latitude: number, longitude: number) => {
    set({
      latitude,
      longitude,
      ...calculateDeltas(get().zoomLevel, longitude),
    });
  };

  const changeZoomLevel = (zoomLevel: number) => {
    let newZoomLevel = Math.floor(zoomLevel);
    set(() => ({
      zoomLevel: newZoomLevel,
    }));
  };
  const changeDistanceArranged = (value: boolean) => {
    if (!value) {
      console.log("Calculating Deltas");
      set(() => ({
        distanceArranged: value,
        ...calculateDeltas(get().zoomLevel, get().longitude),
      }));
    } else {
      set(() => ({
        distanceArranged: value,
      }));
    }
  };
  return {
    distanceArranged: false,
    latitude: 38.4231,
    longitude: 27.1405,
    zoomLevel: 10,
    latitudeDelta: null,
    longitudeDelta: null,
    changeLocation,
    changeZoomLevel,
    changeDistanceArranged,
  };
});

export default useGoogleMapStore;
