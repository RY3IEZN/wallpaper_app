/** @format */

import React from "react";
import { View, StyleSheet, FlatList, Text, Pressable } from "react-native";
import { data } from "../constants/data";
import { hp, wp } from "../helpers/common";
import { theme } from "../constants/theme";
import Animated, { FadeInRight } from "react-native-reanimated";

function Categories({ activeCategory, handleCategoryChange }) {
  const CategoryItem = ({ title, isActive, handleCategoryChange, index }) => {
    let textColor = isActive ? theme.colors.white : theme.colors.neutral(0.8);
    let backgroundColor = isActive
      ? theme.colors.neutral(0.8)
      : theme.colors.white;

    return (
      <Animated.View
        entering={FadeInRight.delay(index * 200)
          .duration(1000)
          .springify()
          .damping(14)}
      >
        <Pressable
          onPress={() => handleCategoryChange(isActive ? null : title)}
          style={[styles.category, { backgroundColor }]}
        >
          <Text style={[styles.title, { color: textColor }]}>{title}</Text>
        </Pressable>
      </Animated.View>
    );
  };
  return (
    <FlatList
      horizontal
      contentContainerStyle={styles.flatlistContainer}
      showsHorizontalScrollIndicator={false}
      data={data.categories}
      key={(item) => item}
      renderItem={({ item, index }) => {
        return (
          <CategoryItem
            isActive={activeCategory == item}
            handleCategoryChange={handleCategoryChange}
            title={item}
            index={index}
          />
        );
      }}
    />
  );
}
const styles = StyleSheet.create({
  flatlistContainer: {
    paddingHorizontal: wp(4),
    gap: 8,
  },
  category: {
    padding: 12,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: theme.colors.grayBG,
    backgroundColor: "white",
    borderRadius: theme.radius.lg,
    borderCurve: "continuous",
  },
  title: {
    fontSize: hp(1.8),
    fontWeight: theme.fontWeights.medium,
  },
});

export default Categories;
