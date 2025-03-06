import { useEffect, useState } from "react";
import {Text, View } from "react-native";


export function CurrencyAPI (fromValue: string) {
    const [currencyData, setCurrencyData] = useState(null)
  useEffect(() => {
    async function fetchCurrency() {
      let response = await fetch("http://192.168.68.185:8000/rates/gbp", {
        method: "GET",
        headers: {
          "x-api-key": "85f7ccfd-677a-4e5a-a5eb-21c19734edf7",
        },
      });
      response = await response.json();
      console.log(response);
      setCurrencyData(response);
    }
    fetchCurrency();
  }, []);

  return (
    <View>
      {currencyData ? (
        <View>
          <Text>Currency Data</Text>
          <Text>Exchange Rate: {currencyData.data}</Text>
        </View>
      ) : (
        <Text>Loading the Currency...</Text>
      )}
    </View>
  );
}