function calculateDeltas(
  distanceKm: number,
  latitude: number,
  paddingFactor: number = 1.2
): { latitudeDelta: number; longitudeDelta: number } {
  const radians = (deg: number): number => (deg * Math.PI) / 180;

  // Convert latitude to radians
  const latitudeInRadians = radians(latitude);
  const paddedDistanceKm = distanceKm * paddingFactor;
  // Calculate deltas
  const latitudeDelta = paddedDistanceKm / 111.32;

  const longitudeDelta =
    (paddedDistanceKm / (111.32 * Math.cos(latitudeInRadians))) * 2;

  return {
    latitudeDelta,
    longitudeDelta,
  };
}

/*
const longitudeDelta =
    (paddedDistanceKm / (111.32 * Math.cos(latitudeInRadians))) * 2;

    if you remove "2" circle will be smaller. like 1km shows total 1km Radius instead of 2km Radius.

*/

export default calculateDeltas;
