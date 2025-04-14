import { StyleSheet, SafeAreaView, Text, View } from "react-native";
import { ConverterLogo } from "@/images/ImageLibrary";
import { Converter } from "./Converter";

export default function Index() {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View>
        <View style={styles.logoContainer}>
          <ConverterLogo width={120} height={80} />
        </View>
        <Text style={styles.title}> Swap from </Text>
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
    backgroundColor: "#F1F7E6"
  },
  title: {
    fontSize: 25,
    fontWeight: 500,
    textAlign: "center",
    padding: 35,
  },
  logoContainer: {
    flex: 1,
    padding: 30,
    marginBottom: 50,
    alignItems: "center",
  },
});
