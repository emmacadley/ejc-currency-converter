import {StyleSheet, ScrollView, SafeAreaView, Text, View } from "react-native";
import {SwapFrom} from "@/images/ImageLibrary";
import CurrencyConverter from "./convertCurrency";

export default function Index() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.mainContainer}>
      <SwapFrom style={{alignSelf: 'center'}}/>
      <Text style={styles.title}> Swap from </Text>
      <View style={styles.spacer}/>
        <CurrencyConverter />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 20,
    margin: 10,
  },
  textInput: {
    marginBottom: 10,
    borderWidth: 2,
    borderColor: "red",
  },
  title: {
    fontSize: 20,
    fontWeight: 500,
    textAlign: 'center',
    padding: 15
  },
  spacer: {
    padding: 5,
    height: 5
  }

});
