/** @format */

import { Feather, FontAwesome6, Ionicons } from "@expo/vector-icons";
import React, { useRef, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Pressable,
  ScrollView,
  TextInput,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { theme } from "../../constants/theme";
import { hp, wp } from "../../helpers/common";
import Categories from "../../components/Categories";

function HomeScreen(props) {
  const top = useSafeAreaInsets();
  const paddingTop = top > 0 ? (top = 10) : 30;
  const [search, setSearch] = useState("");
  const searchInputRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState("");

  // change the active category
  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);

    console.log(activeCategory);
  };

  return (
    <View style={[styles.container, { paddingTop }]}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable>
          <Text style={styles.title}>Pexels</Text>
        </Pressable>
        <Pressable>
          <FontAwesome6
            name="bars-staggered"
            size={22}
            color={theme.colors.neutral(0.7)}
          />
        </Pressable>
      </View>
      {/* Scrollview */}
      <ScrollView contentContainerStyle={{ gap: 15 }}>
        {/* searchbar */}
        <View style={styles.searchbar}>
          <View style={styles.searchIcon}>
            <Feather name="search" color={theme.colors.neutral(0.4)} />
          </View>
          <TextInput
            placeholder="Search for photos"
            style={styles.searchInput}
            ref={searchInputRef}
            onChangeText={(value) => setSearch(value)}
          />
          {search && (
            <Pressable>
              <Ionicons
                name="close"
                size={24}
                color={theme.colors.neutral(0.6)}
              />
            </Pressable>
          )}
        </View>
        {/* categories */}
        <View style={styles.categories}>
          <Categories
            activeCategory={activeCategory}
            handleCategoryChange={handleCategoryChange}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 15,
  },
  header: {
    marginHorizontal: wp(4),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: hp(4),
    fontWeight: theme.fontWeights.semibold,
    color: theme.colors.neutral(4),
  },
  searchbar: {
    marginHorizontal: wp(4),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: theme.colors.grayBG,
    backgroundColor: theme.colors.white,
    padding: 6,
    borderRadius: theme.radius.lg,
    paddingLeft: 10,
  },
  searchIcon: {
    padding: 8,
  },
  searchInput: {
    flex: 1,
    borderRadius: theme.radius.sm,
    paddingVertical: 10,
    paddingHorizontal: 5,
    fontSize: hp(1.8),
  },
  searchIcon: {
    backgroundColor: theme.colors.neutral(0.1),
    padding: 10,
    borderRadius: theme.radius.sm,
  },
});

export default HomeScreen;
