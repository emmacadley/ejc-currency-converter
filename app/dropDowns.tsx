// // import React from "react";
// // import Select, { components } from "react-select";
// // import CurrencyAPI from "./CurrencyAPI";

// // const { Option } = components;

// //const  currencyData = {CurrencyAPI}

// // const OptionComponent: React.FC<any> = (props) => {
// //     return (
// //       <Option {...props}>
// //         <span className={`currency-flag currency-flag-${props.data.value}`} />{" "}
// //         {props.data.label}
// //       </Option>
// //     );
// //   };
  
// // const Dropdowns = (props: { handleChange: any; placeholder: any; value: any; currencyData: any}) => {
// //     const { handleChange, placeholder, value, currencyData } = props;

  
// //     //const selectValue = currencyData.find((option) => option.value === value || option.label === value);
  
// //     return (
// //       <Select
// //         options={currencyData}
// //         //onChange={handleChange}
// //         //placeholder={placeholder}
// //         //styles={customStyles}
// //         value={selectValue}
// //         components={{ Option: OptionComponent }}
// // //       />
// // //     );
// // //   };
  
// //   export default Dropdowns;


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