import axios from "axios";
var pc = "78";
var laptop = "193";
const api = axios.create({
  baseURL: `http://192.168.1.${pc}:8080/api`,
  headers: {
    "Content-Type": "application/json",
  },
});

// Example values to send in POST requests
const data = [
  {
    name: "Test 1km",
    imageUrl: "https://example.com/image1.jpg",
    email: "test1@example.com",
    mobilePhone: "555-0001",
    companyPhone: "555-1001",
    city: "Örnek Şehir",
    district: "Bölge 1",
    neighborhood: "Mahalle A",
    street: "Sokak 1",
    addressDetail: "Adres detay 1",
    mapUrl: "https://maps.example.com/?q=38.442610,27.142826",
    lat: 38.44261,
    long: 27.142826,
    companyTypeName: "Şirket Tipi 1",
    companyTypeDescription: "Açıklama 1",
    companyTypeImageUrl: "https://example.com/type1.jpg",
    isActive: true,
    isDelete: false,
    environmentallyFriendly: true,
    isTrustworthy: true,
  },
  {
    name: "Test 2km",
    imageUrl: "https://example.com/image2.jpg",
    email: "test2@example.com",
    mobilePhone: "555-0002",
    companyPhone: "555-1002",
    city: "Örnek Şehir",
    district: "Bölge 2",
    neighborhood: "Mahalle B",
    street: "Sokak 2",
    addressDetail: "Adres detay 2",
    mapUrl: "https://maps.example.com/?q=38.451800,27.142826",
    lat: 38.4518,
    long: 27.142826,
    companyTypeName: "Şirket Tipi 2",
    companyTypeDescription: "Açıklama 2",
    companyTypeImageUrl: "https://example.com/type2.jpg",
    isActive: true,
    isDelete: false,
    environmentallyFriendly: true,
    isTrustworthy: true,
  },
  {
    name: "Test 3km",
    imageUrl: "https://example.com/image3.jpg",
    email: "test3@example.com",
    mobilePhone: "555-0003",
    companyPhone: "555-1003",
    city: "Örnek Şehir",
    district: "Bölge 3",
    neighborhood: "Mahalle C",
    street: "Sokak 3",
    addressDetail: "Adres detay 3",
    mapUrl: "https://maps.example.com/?q=38.460990,27.142826",
    lat: 38.46099,
    long: 27.142826,
    companyTypeName: "Şirket Tipi 3",
    companyTypeDescription: "Açıklama 3",
    companyTypeImageUrl: "https://example.com/type3.jpg",
    isActive: true,
    isDelete: false,
    environmentallyFriendly: true,
    isTrustworthy: true,
  },
  {
    name: "Test 4km",
    imageUrl: "https://example.com/image4.jpg",
    email: "test4@example.com",
    mobilePhone: "555-0004",
    companyPhone: "555-1004",
    city: "Örnek Şehir",
    district: "Bölge 4",
    neighborhood: "Mahalle D",
    street: "Sokak 4",
    addressDetail: "Adres detay 4",
    mapUrl: "https://maps.example.com/?q=38.470180,27.142826",
    lat: 38.47018,
    long: 27.142826,
    companyTypeName: "Şirket Tipi 4",
    companyTypeDescription: "Açıklama 4",
    companyTypeImageUrl: "https://example.com/type4.jpg",
    isActive: true,
    isDelete: false,
    environmentallyFriendly: true,
    isTrustworthy: true,
  },
  {
    name: "Test 5km",
    imageUrl: "https://example.com/image5.jpg",
    email: "test5@example.com",
    mobilePhone: "555-0005",
    companyPhone: "555-1005",
    city: "Örnek Şehir",
    district: "Bölge 5",
    neighborhood: "Mahalle E",
    street: "Sokak 5",
    addressDetail: "Adres detay 5",
    mapUrl: "https://maps.example.com/?q=38.479370,27.142826",
    lat: 38.47937,
    long: 27.142826,
    companyTypeName: "Şirket Tipi 5",
    companyTypeDescription: "Açıklama 5",
    companyTypeImageUrl: "https://example.com/type5.jpg",
    isActive: true,
    isDelete: false,
    environmentallyFriendly: true,
    isTrustworthy: true,
  },
  {
    name: "Test 6km",
    imageUrl: "https://example.com/image6.jpg",
    email: "test6@example.com",
    mobilePhone: "555-0006",
    companyPhone: "555-1006",
    city: "Örnek Şehir",
    district: "Bölge 6",
    neighborhood: "Mahalle F",
    street: "Sokak 6",
    addressDetail: "Adres detay 6",
    mapUrl: "https://maps.example.com/?q=38.488560,27.142826",
    lat: 38.48856,
    long: 27.142826,
    companyTypeName: "Şirket Tipi 6",
    companyTypeDescription: "Açıklama 6",
    companyTypeImageUrl: "https://example.com/type6.jpg",
    isActive: true,
    isDelete: false,
    environmentallyFriendly: true,
    isTrustworthy: true,
  },
  {
    name: "Test 7km",
    imageUrl: "https://example.com/image7.jpg",
    email: "test7@example.com",
    mobilePhone: "555-0007",
    companyPhone: "555-1007",
    city: "Örnek Şehir",
    district: "Bölge 7",
    neighborhood: "Mahalle G",
    street: "Sokak 7",
    addressDetail: "Adres detay 7",
    mapUrl: "https://maps.example.com/?q=38.497750,27.142826",
    lat: 38.49775,
    long: 27.142826,
    companyTypeName: "Şirket Tipi 7",
    companyTypeDescription: "Açıklama 7",
    companyTypeImageUrl: "https://example.com/type7.jpg",
    isActive: true,
    isDelete: false,
    environmentallyFriendly: true,
    isTrustworthy: true,
  },
  {
    name: "Test 8km",
    imageUrl: "https://example.com/image8.jpg",
    email: "test8@example.com",
    mobilePhone: "555-0008",
    companyPhone: "555-1008",
    city: "Örnek Şehir",
    district: "Bölge 8",
    neighborhood: "Mahalle H",
    street: "Sokak 8",
    addressDetail: "Adres detay 8",
    mapUrl: "https://maps.example.com/?q=38.506930,27.142826",
    lat: 38.50693,
    long: 27.142826,
    companyTypeName: "Şirket Tipi 8",
    companyTypeDescription: "Açıklama 8",
    companyTypeImageUrl: "https://example.com/type8.jpg",
    isActive: true,
    isDelete: false,
    environmentallyFriendly: true,
    isTrustworthy: true,
  },
];

// URL where the POST requests will be sent
const url = "/Companies/add"; // Replace with your endpoint

// Function to send a POST request
const sendPostRequest = async (data) => {
  try {
    const response = await api.post(url, data);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseData = await response.json();
    console.log(`Response for ID ${data.id}:`, responseData);
  } catch (error) {
    console.error(`Error sending data for ID ${data.id}:`, error);
  }
};

// For loop to iterate over the values array and send requests
const sendRequestsInLoop = async () => {
  for (const value of data) {
    await sendPostRequest(value);
  }
};

sendRequestsInLoop();
