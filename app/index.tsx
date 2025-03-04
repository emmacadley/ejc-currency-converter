import { Text, View } from "react-native";
import {SwapFrom, AED, AUD, CAD, CHF, CNY, EUR, GBP, JPY, NZD, THB, USD, ZAR } from "@/images/ImageLibrary";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to jdjdedit this screen.</Text>
      <SwapFrom />
      <AED />
      <AUD />
      <CAD />
      <CHF />
      <CNY />
      <EUR />
      <GBP />
      <JPY />
      <NZD />
      <THB />
      <USD />
      <ZAR />
    </View>
  );
}
