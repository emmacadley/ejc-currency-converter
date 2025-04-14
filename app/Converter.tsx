import { useState, useEffect } from "react";
import {
  Text,
  TextInput,
  StyleSheet,
  View,
  TouchableOpacity,
  ViewPropsIOS,
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
  const [fromSymbol, setFromSymbol] = useState<string>("£");
  const [toSymbol, setToSymbol] = useState<string>("$");

  useEffect(() => {
    async function fetchCurrency() {
      const response = await fetch(
        `http://192.168.64.43:8000/rates/${fromPickerValue}`,
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

  useEffect(() => {
    if (fromPickerValue && currencyData) {
      const fromCurrencyLabel = fromPickerValue.toUpperCase();
      setFromSymbol(currencyData[fromCurrencyLabel].symbol);
    }
  }, [fromPickerValue]);
  useEffect(() => {
    if (toPickerValue && currencyData) {
      const toCurrencyLabel = toPickerValue.toUpperCase();
      setToSymbol(currencyData[toCurrencyLabel].symbol);
    }
  }, [toPickerValue]);

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
      <View style={styles.mainContainer}>
        <CurrencyPicker
          items={initialItems}
          value={fromPickerValue}
          onSetPickerValue={setFromPickerValue}
        />

        <View style={styles.textInputBox}>
          <Text style={styles.symbolText}>{fromSymbol}</Text>
          <TextInput
            placeholder="Enter Amount to Convert"
            value={amountToConvert}
            onChangeText={(textAmount) => setAmountToConvert(textAmount)}
            style={styles.textInputText}
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleConversion}>
            <Text style={styles.buttonText}>Convert</Text>
          </TouchableOpacity>
        </View>

        <CurrencyPicker
          items={initialItems}
          value={toPickerValue}
          onSetPickerValue={setToPickerValue}
        />

        <View>
          <TextInput
            style={styles.textInputBox}
            editable={false}
            placeholder="Converted Amount"
          >
            <Text style={styles.symbolText}>
              {toSymbol} {convertedValue}
            </Text>
          </TextInput>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    padding: 20,
    backgroundColor: "#E6F3D9",
  },
  textInputBox: {
    marginBottom: 20,
    marginTop: 20,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 8,
    backgroundColor: "#fff",
    height: 60,
    paddingLeft: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  symbolText: {
    fontSize: 20,
    textAlign: "left",
  },
  textInputText: {
    fontSize: 20,
    paddingLeft: 10,
    flex: 1,
  },
  buttonContainer: {
    marginTop: 10,
    marginBottom: 20,
  },
  button: {
    borderRadius: 8,
    borderWidth: 2,
    backgroundColor: "#D0F0C0",
    borderColor: "#7BB163",
    padding: 15,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
