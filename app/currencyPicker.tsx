import DropDownPicker from "react-native-dropdown-picker";
import { useState } from "react";
import {
  AED,
  AUD,
  CAD,
  CHF,
  CNY,
  EUR,
  GBP,
  JPY,
  NZD,
  THB,
  USD,
  ZAR,
} from "@/images/ImageLibrary";

type CurrencyItem = {
    label: string;
    value: string;
    icon ():JSX.Element;
}

DropDownPicker.setListMode("SCROLLVIEW");

export const CurrencyPicker = (props: { handleChange: any; placeholder: any; currencyValue: any; currencyData: any}) => {
    const { handleChange, placeholder, currencyValue, currencyData } = props;
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string|null>(null);
  const [items, setItems] = useState<CurrencyItem[]>([
    { label: "GBP", value: "GBP", icon: () => <GBP /> },
    { label: "AED", value: "AED", icon: () => <AED /> },
    { label: "AUD", value: "AUD", icon: () => <AUD /> },
    { label: "CAD", value: "CAD", icon: () => <CAD /> },
    { label: "CHF", value: "CHF", icon: () => <CHF /> },
    { label: "CNY", value: "CNY", icon: () => <CNY /> },
    { label: "EUR", value: "EUR", icon: () => <EUR /> },
    { label: "JPY", value: "JPY", icon: () => <JPY /> },
    { label: "NZD", value: "NZD", icon: () => <NZD /> },
    { label: "THB", value: "THB", icon: () => <THB /> },
    { label: "USD", value: "USD", icon: () => <USD /> },
    { label: "ZAR", value: "ZAR", icon: () => <ZAR /> },
  ]);
  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      {...props}
    />
  );
}
