
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from "react-native";
import {
  SwapFrom,
  AED,
  AUD,
  CAD,
  CHF,
  CNY,
  EUR,
  GBP,
  JPY,
  NZD,
  THB,
  USD,
  ZAR,
} from "@/images/ImageLibrary";
import { SadDropdown } from "./Dropdown";
import Dropdowns from "./dropDowns";
import CurrencyAPI from "./CurrencyAPI";
import CurrencyConverter from "./convertCurrency";

export default function Index() {
  return (
    <SafeAreaView>
      <ScrollView>
      <CurrencyAPI />
        {/* <CurrencyConverter /> */}
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={styles.mainContainer}>
            <Text>Source amount</Text>
            <TextInput style={styles.textInput} />
            <Text>Select Source Currency</Text>
           {/*  <RNPickerSelect
            onValueChange={(selectedValue) => console.log(selectedValue)}
            items={currencyData.map(currency => ({
              label: currency,
              value: currency
            }))}
            /> */}
          </View>
          <View style={styles.mainContainer}>
            <Text>Target amount</Text>
            <TextInput style={styles.textInput} editable={false} />
            <Text>Select Target Currency</Text>
            <TextInput style={styles.textInput} />
          </View>
          <View>
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
          <SadDropdown />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    padding: 20,
    height: 200,
    backgroundColor: "#fff",
  },
  textInput: {
    marginBottom: 10,
    borderWidth: 2,
    borderColor: "red",
  },
});
