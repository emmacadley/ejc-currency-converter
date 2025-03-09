import { StyleSheet, SafeAreaView, Text, View } from "react-native";
import { SwapFrom } from "@/images/ImageLibrary";
import { Converter } from "./Converter";

export default function Index() {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View>
        <SwapFrom style={{ alignSelf: "center" }} />
        <Text style={styles.title}> Swap from </Text>
        <View style={styles.spacer} />
        <Converter />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 20,
    margin: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 500,
    textAlign: "center",
    padding: 15,
  },
  spacer: {
    padding: 5,
    height: 5,
  },
});
