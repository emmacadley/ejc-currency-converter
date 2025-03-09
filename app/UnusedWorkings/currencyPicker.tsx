// import DropDownPicker from "react-native-dropdown-picker";
// import { useState} from "react";
// import {
//   AED,
//   AUD,
//   CAD,
//   CHF,
//   CNY,
//   EUR,
//   GBP,
//   JPY,
//   NZD,
//   THB,
//   USD,
//   ZAR,
// } from "@/images/ImageLibrary";

// type CurrencyItem = {
//     label: string;
//     value: number;
//     icon ():JSX.Element;
// }

// export const CurrencyPicker = (props: { handleChange:any, placeholder: any; /* currencyValue: any */}) => {
//     const {handleChange, placeholder, /* currencyValue */} = props;
//   const [open, setOpen] = useState<boolean>(false);
//   const [value, setValue] = useState<null>(null);
//   const [items, setItems] = useState<CurrencyItem[]>([
//     { label: "GBP", value: 1,         icon: () => <GBP /> },
//     { label: "AUD", value: 1.9147731, icon: () => <AUD /> },
//     { label: "CAD", value: 1.7173866, icon: () => <CAD /> },
//     { label: "CHF", value: 1.1399409, icon: () => <CHF /> },
//     { label: "CNY", value: 9.1417166, icon: () => <CNY /> },
//     { label: "EUR", value: 1.1661482, icon: () => <EUR /> },
//     { label: "JPY", value: 191.63238, icon: () => <JPY /> },
//     { label: "NZD", value: 2.1018546, icon: () => <NZD /> },
//     { label: "THB", value: 46.45587, icon: () => <THB /> },
//     { label: "USD", value: 1.2638436, icon: () => <USD /> },
//     { label: "ZAR", value: 23.606591, icon: () => <ZAR /> },
//   ]);
//   return (
//     <DropDownPicker
//       open={open}
//       value={value}
//       items={items}
//       setOpen={setOpen}
//       setValue={setValue}
//       setItems={setItems}
//       {...props}
//     />
//   );
// }
