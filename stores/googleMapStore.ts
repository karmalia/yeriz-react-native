import calculateDeltas from "@/lib/utils/calculateDelta";
import { TFood } from "@/types";
import { Company } from "@/types/api.types";
import { create } from "zustand";

interface MapState {
  companies: Company[];
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
      ...calculateDeltas(get().zoomLevel, latitude),
    });
  };

  const changeZoomLevel = (zoomLevel: number) => {
    let newZoomLevel = Number(zoomLevel.toFixed(1));
    set(() => ({
      zoomLevel: newZoomLevel,
    }));
  };
  const changeDistanceArranged = (value: boolean) => {
    if (!value) {
      set(() => ({
        distanceArranged: value,
        ...calculateDeltas(get().zoomLevel, get().latitude),
      }));
    } else {
      set(() => ({
        distanceArranged: value,
      }));
    }
  };
  return {
    companies: [],
    distanceArranged: false,
    latitude: 38.433418,
    longitude: 27.142826,
    zoomLevel: 10,
    latitudeDelta: 0.008983111749910169,
    longitudeDelta: 0.020189670372142945,
    changeLocation,
    changeZoomLevel,
    changeDistanceArranged,
  };
});

export default useGoogleMapStore;
