// import React, { useEffect, useRef, useState } from "react";
// import { StyleSheet, Text, View } from "react-native";
// import SelectDropdown from "react-native-select-dropdown";

// export const CurrencyDropdownOption1 = (props: { handleChange: any; placeholder: any; value: any; currencyData: any}) => {
//     const { handleChange, placeholder, value, currencyData } = props;
//   const [choice, setChoice] = useState([]);

//   useEffect(() => {
//     setTimeout(() => {
//       setChoice([
//         { title: "GBP", moods: [{ title: "AED" }, { title: "AUD" },{ title: "CAD" },{ title: "CHF" },{ title: "CNY" },{ title: "EUR" },{ title: "JPY" },{ title: "NZD" },{ title: "THB" },{ title: "USD" },{ title: "ZAR" }] },
//         { title: "AED", moods: [{ title: "Sad" }, { title: "Angry" }] },
//       ]);
//     }, 1000);
//   }, []);

//   return (
//     <View style={styles.container}>
//       <View />
//       <SelectDropdown
//         data={choice}
//         onSelect={(selectedItem, index) => {
//           console.log(selectedItem, index);
//         }}
//         renderButton={(selectedItem, isOpen) => {
//           return (
//             <View style={styles.dropdownButtonStyle}>
//               <Text style={styles.dropdownButtonTxtStyle}>
//                 {selectedItem?.title || "Select a currency"}
//               </Text>
//             </View>
//           );
//         }}
//         renderItem={(item, index, isSelected) => {
//           return (
//             <View
//               style={{
//                 ...styles.dropdownItemStyle,
//                 ...(isSelected && { backgroundColor: "#D2D9DF" }),
//               }}
//             >
//               <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
//             </View>
//           );
//         }}
//         dropdownStyle={styles.dropdownMenuStyle}
//             {...props}
//       />

//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: "column",
//     alignItems: "center",
//     paddingVertical: 50,
//     paddingHorizontal: 10,
//     justifyContent: "space-between",
//     marginTop: 40,
//     borderWidth: 4,
//   },
//   dropdownButtonStyle: {
//     flex: 1,
//     height: 50,
//     backgroundColor: "#E9ECEF",
//     borderRadius: 12,
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//     paddingHorizontal: 12,
//   },
//   dropdownButtonTxtStyle: {
//     flex: 1,
//     fontSize: 18,
//     fontWeight: "500",
//     color: "#151E26",
//     textAlign: "center",
//   },
//   dropdownMenuStyle: {
//     backgroundColor: "#E9ECEF",
//     borderRadius: 8,
//     height: 100,
//   },
//   dropdownItemStyle: {
//     width: "100%",
//     height: 50,
//     flexDirection: "row",
//     paddingHorizontal: 12,
//     justifyContent: "center",
//     alignItems: "center",
//     borderBottomWidth: 1,
//     borderBottomColor: "#B1BDC8",
//   },
//   dropdownItemTxtStyle: {
//     flex: 1,
//     fontSize: 18,
//     fontWeight: "500",
//     color: "#151E26",
//     textAlign: "center",
//   },
//   dropdownItemIconStyle: {
//     fontSize: 28,
//     marginRight: 8,
//   },
//   spacer: {
//     width: 50,
//   }
// });



// const { Option } = components;

// //const  currencyData = {CurrencyAPI}

// const OptionComponent: React.FC<any> = (props) => {
//     return (
//       <Option {...props}>
//         <span className={`currency-flag currency-flag-${props.data.value}`} />{" "}
//         {props.data.label}
//       </Option>
//     );
//   };
  
// const Dropdowns = (props: { handleChange: any; placeholder: any; value: any; currencyData: any}) => {
//     const { handleChange, placeholder, value, currencyData } = props;

  
//     //const selectValue = currencyData.find((option) => option.value === value || option.label === value);
  
//     return (
//       <Select
//         options={currencyData}
//         //onChange={handleChange}
//         //placeholder={placeholder}
//         //styles={customStyles}
//         //value={selectValue}
//         //components={{ Option: OptionComponent }}
//       />
//     );
//   };
  
//   export default Dropdowns;


//   export const customStyles = {
//     menuList: (provided: any) => ({
//       ...provided,
//       maxHeight: "226px",
//       backgroundColor: "#212529",
//       borderRadius: "7px",
//       padding: "0",
//       color: "#fff",
//       "&::-webkit-scrollbar": {
//         width: "2.5px",
//       },
//       "&::-webkit-scrollbar-thumb": {
//         backgroundColor: "#2d3338",
//       },
//     }),
//     menu: (provided: any) => ({
//       ...provided,
//       borderRadius: "15px",
//     }),
//     option: (provided: any, state: any) => ({
//       ...provided,
//       backgroundColor: state.isFocused ? "#262b30" : "",
//       cursor: "pointer",
//       alignItems: "center",
//       padding: "4px 0px 4px 10px",
//     }),
    
//     control: (provided: any, state: any) => ({
//       ...provided,
//       backgroundColor: state.isFocused ? "#262b30" : "#212529",
//       padding: "4.8px",
//       borderRadius: "7px",
//       border: state.isFocused ? 0 : 0,
//       boxShadow: state.isFocused ? 0 : 0,
//       "&:hover": {
//         border: state.isFocused ? 0 : 0,
//       },
//     }),
//     singleValue: (provided: any) => ({
//       ...provided,
//       color: "white",
//     }),
//     dropdownIndicator: (provided: any) => ({
//       ...provided,
//       color: "white",
//       "&:hover": {
//         color: "white",
//       },
//     }),
//     input: (provided: any) => ({
//       ...provided,
//       color: "white",
//     }),
//   };
