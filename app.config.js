import "dotenv/config";

export default {
  expo: {
    name: "BizYeriz",
    slug: "bizyeriz-app",
    version: "0.0.2",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "myapp",
    userInterfaceStyle: "automatic",
    splash: {
      image: "./assets/images/splash.png",
      resizeMode: "cover",
      backgroundColor: "#ffffff",
    },
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/images/icon-android.png",
        backgroundColor: "#ffffff",
      },
      package: "com.anonymous.bizyerizapp",
      softwareKeyboardLayoutMode: "pan",
      config: {
        googleMaps: {
          apiKey: process.env.GOOGLE_MAPS_API_KEY,
        },
      },
    },
    web: {
      bundler: "metro",
      output: "static",
      favicon: "./assets/images/icon.png",
    },
    plugins: ["expo-router", "expo-font"],
    experiments: {
      typedRoutes: true,
    },
    extra: {
      router: {
        origin: false,
      },
      apiKey: process.env.GOOGLE_MAPS_API_KEY,
      eas: {
        projectId: "0dd249db-4186-4ea9-a6ed-0793955a1c58",
      },
    },
  },
};
