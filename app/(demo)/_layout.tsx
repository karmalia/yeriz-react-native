import React from "react";
import { Drawer } from "expo-router/drawer";

import { GestureHandlerRootView } from "react-native-gesture-handler";

const LoginLayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "home",
            title: "overview",
          }}
        />
        <Drawer.Screen
          name="inputs" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "inputs",
            title: "inputs",
          }}
        />
        <Drawer.Screen
          name="buttons" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "buttons",
            title: "buttons",
          }}
        />
        <Drawer.Screen
          name="checkboxes" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "checkboxes",
            title: "checkboxes",
          }}
        />
        <Drawer.Screen
          name="radiobuttons" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "radiobuttons",
            title: "radiobuttons",
          }}
        />
        <Drawer.Screen
          name="switches" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "switches",
            title: "switches",
          }}
        />
        <Drawer.Screen
          name="dropdowns" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "dropdowns",
            title: "dropdowns",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
};

export default LoginLayout;
