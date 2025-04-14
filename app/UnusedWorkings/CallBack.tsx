// import { useState } from "react";
// import { Button, Text, TextInput } from "react-native";
 
// type CustomInputProps = {
//   value: string;
//   onSetValue: (text: string) => void;
// };
 
// export const CustomInput = ({ value, onSetValue }: CustomInputProps) => {
//   //const [value, setValue] = useState("");
 
//   const handleChangeText = (another: string) => {
//     //setValue(t);
//     onSetValue(another);
//   };
 
//   return (
//     <>
//       <TextInput
//         value={value}
//         onChangeText={(something) => handleChangeText(something)}
//         placeholder="Enter a value"
//       />
//     </>
//   );
// };
 
// export const Parent = () => {
//   const handlePress = () => {};
//   const [value1, setValue] = useState("");
 
//   return (
//     <>
//       <CustomInput
//         value={value1}
//         onSetValue={(text: string) => setValue(text)}
//       />
//       <Button title="Click me" onPress={handlePress} />
//       <Text>resulting text</Text>
//       <Text>{value1}</Text>
//     </>
//   );
// };
 