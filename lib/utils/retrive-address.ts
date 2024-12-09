export function retriveAdress(
  address_components: {
    long_name: string;
    short_name: string;
    types: string[];
  }[]
) {
  const city = address_components.find(
    (item) => item.types[0] == "administrative_area_level_1"
  )?.long_name;
  const district = address_components.find(
    (item) => item.types[0] == "administrative_area_level_2"
  )?.long_name;
  const neighborhood = address_components.find(
    (item) => item.types[0] == "administrative_area_level_4"
  )?.long_name;
  const street = address_components.find(
    (item) => item.types[0] == "route"
  )?.long_name;

  return `${street ? street : ""} ${neighborhood ? neighborhood : ""} ${
    district ? district : ""
  }/${city ? city : ""}`;
}
