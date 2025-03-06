import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SelectDropdown from "react-native-select-dropdown";


const CurrencyList = 
[
    { title: "AED" , icon: "aed"}, 
    { title: "AUD" , icon: "aed"},
    { title: "CAD" , icon: "cad"},
    { title: "CHF" , icon: "chf"},
    { title: "CNY" , icon: "cny"},
    { title: "EUR" , icon: "eur"},
    { title: "GBP" , icon: "gbp"},
    { title: "JPY" , icon: "jpy"},
    { title: "NZD" , icon: "nzd"},
    { title: "THB" , icon: "thb"},
    { title: "USD" , icon: "usd"},
    { title: "ZAR" , icon: "zar"}
] 
export const SadDropdown = () => {
  const [feelings, setFeelings] = useState([]);
  const [moods, setMoods] = useState([]);

  const moodDropdownRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      setFeelings([
        { title: "GBP", moods: [{ title: "AED" }, { title: "AUD" },{ title: "CAD" },{ title: "CHF" },{ title: "CNY" },{ title: "EUR" },{ title: "JPY" },{ title: "NZD" },{ title: "THB" },{ title: "USD" },{ title: "ZAR" }] },
        { title: "AED", moods: [{ title: "Sad" }, { title: "Angry" }] },
      ]);
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <View />
      <SelectDropdown
        data={feelings}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
          moodDropdownRef.current.reset();
          setMoods([]);
          setMoods(selectedItem.moods);
        }}
        renderButton={(selectedItem, isOpen) => {
          return (
            <View style={styles.dropdownButtonStyle}>
              <Text style={styles.dropdownButtonTxtStyle}>
                {selectedItem?.title || "Select a feeling"}
              </Text>
            </View>
          );
        }}
        renderItem={(item, index, isSelected) => {
          return (
            <View
              style={{
                ...styles.dropdownItemStyle,
                ...(isSelected && { backgroundColor: "#D2D9DF" }),
              }}
            >
              <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
            </View>
          );
        }}
        dropdownStyle={styles.dropdownMenuStyle}
      />
      <View style={{ width: 8 }} />
      <View style={styles.spacer} />
      <SelectDropdown
        ref={moodDropdownRef}
        data={moods}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
        }}
        renderButton={(selectedItem, isOpen) => {
          return (
            <View style={styles.dropdownButtonStyle}>
              <Text style={styles.dropdownButtonTxtStyle}>
                {selectedItem?.title || "Select a mood"}
              </Text>
            </View>
          );
        }}
        renderItem={(item, index, isSelected) => {
          return (
            <View
              style={{
                ...styles.dropdownItemStyle,
                ...(isSelected && { backgroundColor: "#D2D9DF" }),
              }}
            >
              <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
            </View>
          );
        }}
        dropdownStyle={styles.dropdownMenuStyle}
      />
      <View style={{ width: 16 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    paddingVertical: 50,
    paddingHorizontal: 10,
    justifyContent: "space-between",
    marginTop: 40,
    borderWidth: 4,
  },
  dropdownButtonStyle: {
    flex: 1,
    height: 50,
    backgroundColor: "#E9ECEF",
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12,
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "500",
    color: "#151E26",
    textAlign: "center",
  },
  dropdownMenuStyle: {
    backgroundColor: "#E9ECEF",
    borderRadius: 8,
    height: 100,
  },
  dropdownItemStyle: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    paddingHorizontal: 12,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#B1BDC8",
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "500",
    color: "#151E26",
    textAlign: "center",
  },
  dropdownItemIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
  spacer: {
    width: 50,
  }
});
