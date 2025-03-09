import { useState } from "react";
import { Button, Text, TextInput } from "react-native";
 
type CustomInputProps = {
  value: string;
  onSetValue: (text:string) => void;
  onSetOutput: (text: string) => void;
};
 
export const CustomInput = ({ value, onSetValue, onSetOutput }: CustomInputProps) => {
  
    const handleChangeText = (another: string) => {
    onSetValue(another)
    onSetOutput(another + "change");
  };
 
  return (
    <>
      <TextInput
        value={value}
        onChangeText={(something) => handleChangeText(something)}
        placeholder="Enter a value"
      />
    </>
  );
};
 
export const SecondParent = () => {
  const handlePress = () => {};
  const [value1, setValue] = useState("");
  const [output, setOutput] = useState("");
  
 
  return (
    <>
      <CustomInput
        value={value1}
        onSetValue={(text1: string) => setValue(text1)}
        onSetOutput={(text2: string) => setOutput(text2)}
      />
      <Button title="Click me" onPress={handlePress} />
      <Text>New changed text</Text>
      <Text>{output}</Text>
    </>
  );
};
 