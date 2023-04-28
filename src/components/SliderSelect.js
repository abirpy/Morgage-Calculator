import { Stack } from "@mui/system";
import React from "react";
import SliderComponent from "./common/SliderComponent";

const SliderSelect = ({ data, setData }) => {
  const bank_limit = 10000;
  return (
    <>
      <SliderComponent
        defaultValue={50}
        min={1000}
        max={bank_limit}
        value={data.homeValue}
        step={100}
        onChange={(e, value) =>
          setData({
            ...data,
            downPayment: 0.2 * value,
            loanAmount: 0.8 * value,
            homeValue: value,
          })
        }
        label="Home Value"
        unit="$"
        amount={data.homeValue}
      />
      <SliderComponent
        defaultValue={50}
        min={0}
        max={data.homeValue}
        value={data.downPayment}
        step={100}
        onChange={(e, value) =>
          setData({
            ...data,
            downPayment: value,
            loanAmount: data.homeValue - value,
          })
        }
        label="Down Payment"
        unit="$"
        amount={data.downPayment}
      />
      <SliderComponent
        defaultValue={50}
        min={0}
        max={data.homeValue}
        value={data.loanAmount}
        step={100}
        onChange={(e, value) =>
          setData({
            ...data,
            loanAmount: value,
            downPayment: data.homeValue - value,
          })
        }
        label="Loan Amount"
        unit="$"
        amount={data.loanAmount}
      />

      <SliderComponent
        defaultValue={50}
        min={2}
        max={18}
        value={data.interestRate}
        step={0.5}
        onChange={(e, value) =>
          setData({
            ...data,
            interestRate: value,
          })
        }
        label="Interest Rate"
        unit="%"
        amount={data.interestRate}
      />
    </>
  );
};

export default SliderSelect;
