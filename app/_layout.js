/** @format */

import { Stack } from "expo-router";
import React from "react";
import { View, StyleSheet } from "react-native";

function Layout(props) {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}

export default Layout;
