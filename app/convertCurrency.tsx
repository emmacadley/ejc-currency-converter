import React, { useState, useEffect } from "react";
import { View, Text, TextInput, StyleSheet, Button, NativeSyntheticEvent, TextInputChangeEventData, TouchableOpacity } from "react-native";
import { CurrencyPicker } from "./currencyPicker";
import CurrencyAPI from "./CurrencyAPI";


const CurrencyConverter: React.FC = () => {
  const [from, setFrom] = useState<string>("");
  const [into, setInto] = useState<string>("");
  const [amount, setAmount] = useState<number>(1);
  const [currencyResult, setCurrencyResult] = useState<string>("");
  const [amountValue, setAmountValue] = useState<number>(1);
  const [currencyData, setCurrencyData] = useState(null);
  
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
  const convertCurrency = async (
    from: string,
    into: string,
    amount: number | string
  ) => {
    const amountValue =
      typeof amount === "string" ? parseFloat(amount) : amount;

    if (amountValue === 0 || isNaN(amountValue) || amountValue < 0) {
      setCurrencyResult("no result");
      return;
    }

      const fromValue = from.split(" ")[0].trim();
      const intoValue = into.split(" ")[0].trim().toUpperCase();
    
    try {
      if (currencyData && Object.keys(currencyData).includes(fromValue)) {
        const currencyRate = currencyData[fromValue].rate;
        const currencyResult = amountValue * currencyRate;
        setCurrencyResult(currencyResult.toFixed(2));
        setAmountValue(amountValue/* .toString() */);
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

  const handleInput = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    const { text } = e.nativeEvent;
    setAmount(parseFloat(text));
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
          <View>
            <CurrencyPicker 
            handleChange={handleFrom}
            placeholder="Select a currency (From)"
            //currencyValue={from}
            >
            </CurrencyPicker>
          </View>
          <TextInput
            placeholder="Enter Amount"
            value={amount}
            onChange={handleInput}
            style={styles.textInput}
          />
          <View style={styles.spacer1}/>
          <View>
            <TouchableOpacity style={styles.button} onPress={handleSwitch}>
                <Text style={styles.buttonText}>Convert</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.title}> to </Text>
          <CurrencyAPI />
          <View style={styles.spacer2}/>
          <View>
             <CurrencyPicker 
            handleChange={handleInto}
            placeholder="Select a currency (To)"
            //currencyValue={into}
            //currencyData={currencyData}
            >
            </CurrencyPicker>
          </View>
          <View>
            <TextInput style={styles.textInput} editable={false}>
                <Text>Result = {currencyResult}</Text>
            </TextInput>
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
    marginTop: 30,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 8,
    backgroundColor: "#fff",
    height: 60,
    fontSize: 20,
    padding: 15
  },
  title: {
    fontSize: 20,
    fontWeight: 500,
    textAlign: 'center',
    padding: 15
  },
  spacer1: {
    padding: 15,
    height: 20
  },
  spacer2: {
    padding: 12,
    height: 20
  },
button: {
    borderRadius: 8,
    backgroundColor: "#FF808B",
    flex: 0.3,
    padding: 10,
    borderColor: "#E40046",
    borderWidth: 2,
    height: 60,
},
buttonText: {
    fontSize: 25,
    fontWeight: 400,
    textAlign: 'center',
}
});

export default CurrencyConverter;
