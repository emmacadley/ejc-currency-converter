import React, { useState, useEffect } from "react";
import { View, TextInput, StyleSheet, Button } from "react-native";
//import axios from "axios";
import Result from "./Result";
import Dropdowns from "./dropDowns";

const CurrencyConverter: React.FC = () => {
  const [from, setFrom] = useState<string>("GBP");
  const [into, setInto] = useState<string>("USD");
  const [amount, setAmount] = useState<number>(1);
  const [currencyResult, setCurrencyResult] = useState<string>("");
  const [currencyRate, setCurrencyRate] = useState<string>("");
  const [amountValue, setAmountValue] = useState<string>("");
  
  const convertCurrency = async (
    from: string,
    into: string,
    amount: number | string
  ) => {
    const amountValue =
      typeof amount === "string" ? parseFloat(amount) : amount;

    if (amountValue === 0 || isNaN(amountValue) || amountValue < 0) {
      setCurrencyResult("");
      setCurrencyRate("");
      return;
    }
    const [currencyData, setCurrencyData] = useState("GBP");
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

    const fromValue = from.split(" ")[0].trim();
    const intoValue = into.split(" ")[0].trim().toUpperCase();
    //const url = convertCurrency(fromValue);
    
    try {
        const currencyResponse = setCurrencyData(fromValue)
      const parsedData = currencyResponse.data;
      if (intoValue in parsedData.conversion_rates) {
        const currencyRate = parsedData.conversion_rates[intoValue];
        const currencyResult = amountValue * currencyRate;
        setCurrencyRate(currencyRate.toFixed(2));
        setCurrencyResult(currencyResult.toFixed(2));
        setAmountValue(amountValue.toString());
      } else {
        console.error("Error while converting currency: Invalid data");
      }
    } catch (error) {
      console.error("Error while converting currency:", error);
    } finally {
      console.log("Completed rate exchange");
    }
  };

  useEffect(() => {
    if (from && into) {
      convertCurrency(from, into, amount);
    }
  }, [from, into, amount]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setAmount(parseFloat(value));
  };

  const handleFrom = (selectedOption: any) => {
    setFrom(selectedOption.value);
  };

  const handleInto = (selectedOption: any) => {
    setInto(selectedOption.value);
  };

  const handleSwitch = () => {
    setFrom(into);
    setInto(from);
  };

  return (
    <View>
      <View>
        <View>
          <TextInput
            placeholder="Enter Amount"
            value={amount}
            onChange={handleInput}
            style={styles.textInput}
          />
          <View>
            <Dropdowns
              handleChange={handleFrom}
              placeholder="Select a currency (From)"
              value={from}
            ></Dropdowns>
          </View>
          <View>
            <Button title="convert-button" onClick={handleSwitch} />
          </View>
          <View>
            <Dropdowns
              handleChange={handleInto}
              placeholder="Select a currency (To)"
              value={into}
            ></Dropdowns>
          </View>
          <View>
            <Result
              result={parseFloat(currencyResult)}
              rate={parseFloat(currencyRate)}
              into={into}
              from={from}
              amount={parseFloat(amountValue)}
            />
          </View>
        </View>
      </View>
    </View>
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
    borderWidth: 2,
    borderColor: "red",
  },
});

export default CurrencyConverter;
