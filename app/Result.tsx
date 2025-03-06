import React from "react";
import {
    View,
  } from "react-native";

interface ResultProps {
  result: number;
  rate: number;
  into: string;
  from: string;
  amount: number;
}

function Result({result, rate, into, from, amount}: ResultProps) {
  
  const fromField = from.split(" ")[0].trim().toUpperCase();
  const intoField = into.split(" ")[0].trim().toUpperCase();

  return (
    <View>
            <View>
              {amount} {fromField}{" "}
              <View/>
            </View>
            <View>
              {result} ({intoField.toUpperCase()}){" "}
              <View/>
            </View>
            <View>
              Rate={rate}{" "}
              <View/>
            </View>
    </View>
  );
}

export default Result;