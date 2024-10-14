/** @format */

import { MasonryFlashList } from "@shopify/flash-list";
import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { wp } from "../helpers/common";

function ImageGrid({ images }) {
  const ImageCard = ({ item, index }) => {
    return (
      <Pressable>
        <Image />
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <MasonryFlashList
        data={images}
        numColumns={2}
        initialNumToRender={500}
        estimatedItemSize={100}
        contentContainerStyle={styles.listContainerStyle}
        renderItem={({ item }) => <ImageCard item={item} index={index} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listContainerStyle: {
    paddingHorizontal: wp(4),
  },
  container: {
    minHeight: 3,
    width: wp(100),
  },
});

export default ImageGrid;
