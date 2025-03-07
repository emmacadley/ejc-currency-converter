import { useEffect, useState } from "react";
import {Text, View, StyleSheet } from "react-native";
type Currency = {
  rate: number;
  name: string;
  symbol:string;}
type RatesPerGBP = {
  EUR: Currency,
  USD: Currency,
  CAD: Currency,
  JPY: Currency,
  NZD: Currency,
  THB: Currency,
  CNY: Currency,
  AUD: Currency,
  CHF: Currency,
  ZAR: Currency,
}
export default function CurrencyAPI () {
    const [currencyData, setCurrencyData] = useState<RatesPerGBP | null>(null)
  useEffect(() => {
    async function fetchCurrency() {
      let response = await fetch("http://192.168.68.185:8000/rates/gbp", {
        method: "GET",
        headers: {
          "x-api-key": "85f7ccfd-677a-4e5a-a5eb-21c19734edf7",
        },
      });
      let data = await response.json();
      console.log(data);
      setCurrencyData(data);
    }
    fetchCurrency();
  }, []);


  return (
    <View>
      {currencyData ? (
        <View>
          <Text style={styles.exchangeText}>{currencyData.AUD.symbol} {currencyData.AUD.rate} = {currencyData.EUR.symbol} {currencyData.EUR.rate}</Text>
        </View>
      ) : (
        <Text>Loading the Currency...</Text>
      )}
    </View>
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
  exchangeText: {
    fontSize: 20,
    fontWeight: 500,
    textAlign: 'center',
    padding: 15
  },
});
