import React, { useEffect } from "react";
import {
  QueryClient,
  QueryClientProvider,
  focusManager,
  onlineManager,
} from "@tanstack/react-query";
import { useReactQueryDevTools } from "@dev-plugins/react-query";
import { AppState, AppStateStatus, Platform } from "react-native";
// Create a QueryClient instance
const queryClient = new QueryClient();

// Create a QueryClientProvider component
const ClientProvider = ({ children }: { children: React.ReactNode }) => {
  function onAppStateChange(status: AppStateStatus) {
    console.log("App state changed to", status);
    if (Platform.OS !== "web") {
      focusManager.setFocused(status === "active");
    }
  }

  useEffect(() => {
    const subscription = AppState.addEventListener("change", onAppStateChange);

    return () => subscription.remove();
  }, []);

  useReactQueryDevTools(queryClient);
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default ClientProvider;
