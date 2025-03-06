import React from "react";
import Select, { components } from "react-select";
//import { currency } from "../../config/currency";
import {CurrencyComponent} from "./CurrencyAPI";

const { Option } = components;

const  currencyData = {CurrencyComponent}

const OptionComponent: React.FC<any> = (props) => {
    return (
      <Option {...props}>
        <span className={`currency-flag currency-flag-${props.data.value}`} />{" "}
        {props.data.label}
      </Option>
    );
  };
  
const Dropdowns = (props: { handleChange: any; placeholder: any; value: any; }) => {
    const { handleChange, placeholder, value } = props;
  
    //const selectValue = currencyData.find((option) => option.value === value || option.label === value);
  
    return (
      <Select
        //options={currencyData}
        onChange={handleChange}
        placeholder={placeholder}
        styles={undefined}
        //value={selectValue}
        components={{ Option: OptionComponent }}
      />
    );
  };
  
  export default Dropdowns;