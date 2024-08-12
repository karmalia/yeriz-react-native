function calculateDeltas(
  distanceKm: number,
  latitude: number
): { latitudeDelta: number; longitudeDelta: number } {
  const radians = (deg: number): number => (deg * Math.PI) / 180;

  // Convert latitude to radians
  const latitudeInRadians = radians(latitude);

  // Calculate deltas
  const latitudeDelta = distanceKm / 111.32;
  const longitudeDelta = distanceKm / (111.32 * Math.cos(latitudeInRadians));

  return {
    latitudeDelta,
    longitudeDelta,
  };
}

export default calculateDeltas;
