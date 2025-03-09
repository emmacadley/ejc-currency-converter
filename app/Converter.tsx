import { useState, useEffect } from "react";
import {
  Text,
  TextInput,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import {
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

type CurrencyData = {
  [key: string]: {
    name: string;
    rate: number;
    symbol: string;
  };
};
type CurrencyItem = {
  label: string;
  value: string;
  icon(): JSX.Element;
};
type CurrencyPickerProps = {
  items: CurrencyItem[];
  value: string;
  onSetPickerValue: (text: string) => void;
};

const initialItems: CurrencyItem[] = [
  { label: "GBP", value: "gbp", icon: () => <GBP /> },
  { label: "AUD", value: "aud", icon: () => <AUD /> },
  { label: "CAD", value: "cad", icon: () => <CAD /> },
  { label: "CHF", value: "chf", icon: () => <CHF /> },
  { label: "CNY", value: "cny", icon: () => <CNY /> },
  { label: "EUR", value: "eur", icon: () => <EUR /> },
  { label: "JPY", value: "jpy", icon: () => <JPY /> },
  { label: "NZD", value: "nzd", icon: () => <NZD /> },
  { label: "THB", value: "thb", icon: () => <THB /> },
  { label: "USD", value: "usd", icon: () => <USD /> },
  { label: "ZAR", value: "zar", icon: () => <ZAR /> },
];

const CurrencyPicker = (
  { items, value, onSetPickerValue }: CurrencyPickerProps,
  props: any
) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={onSetPickerValue}
      {...props}
    />
  );
};

export const Converter = () => {
  const [fromPickerValue, setFromPickerValue] = useState<string>("gbp");
  const [toPickerValue, setToPickerValue] = useState<string>("usd");
  const [currencyData, setCurrencyData] = useState<CurrencyData | null>(null);
  const [amountToConvert, setAmountToConvert] = useState<string>("");
  const [convertedValue, setConvertedValue] = useState<string>("");

  useEffect(() => {
    async function fetchCurrency() {
      const response = await fetch(
        `http://192.168.0.15:8000/rates/${fromPickerValue}`,
        {
          method: "GET",
          headers: {
            "x-api-key": "85f7ccfd-677a-4e5a-a5eb-21c19734edf7",
          },
        }
      );
      const data = await response.json();
      console.log("Data retrieved from API:", data);
      setCurrencyData(data);
    }
    fetchCurrency();
  }, [fromPickerValue]);

  const handleConversion = () => {
    if (fromPickerValue && toPickerValue && amountToConvert && currencyData) {
      const currencyLabel = toPickerValue.toUpperCase();
      const conversionRate = currencyData[currencyLabel].rate;
      const convertedAmount = parseFloat(amountToConvert) * conversionRate;
      
      setConvertedValue(convertedAmount.toFixed(2).toString());
    }
  };

  return (
    <>
      <View>
        <CurrencyPicker
          items={initialItems}
          value={fromPickerValue}
          onSetPickerValue={setFromPickerValue}
        />
        <TextInput
          placeholder="Enter Amount to Convert"
          value={amountToConvert}
          onChangeText={(textAmount) => setAmountToConvert(textAmount)}
          style={styles.textInput}
        />
        <View style={styles.spacer1} />
        <View>
          <TouchableOpacity style={styles.button} onPress={handleConversion}>
            <Text style={styles.buttonText}>Convert</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.spacer1} />
        <CurrencyPicker
          items={initialItems}
          value={toPickerValue}
          onSetPickerValue={setToPickerValue}
        />
        <View>
          <TextInput style={styles.textInput} editable={false} placeholder= "Converted Amount">
            <Text>{convertedValue}</Text>
          </TextInput>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    padding: 20,
    height: 200,
    backgroundColor: "#fff",
  },
  textInput: {
    marginBottom: 10,
    marginTop: 30,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 8,
    backgroundColor: "#fff",
    height: 60,
    fontSize: 20,
    padding: 15,
  },
  spacer1: {
    padding: 10,
    height: 50,
  },
  spacer2: {
    padding: 12,
    height: 20,
  },
  button: {
    borderRadius: 8,
    backgroundColor: "#FF808B",
    flex: 0.3,
    padding: 10,
    borderColor: "#E40046",
    borderWidth: 2,
    height: 10,
  },
  buttonText: {
    fontSize: 25,
    fontWeight: 400,
    textAlign: "center",
  },

});
