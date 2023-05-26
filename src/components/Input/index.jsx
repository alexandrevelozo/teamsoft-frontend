import { useState } from "react";

import { Container } from "./styles";

import IconPlus from "../../assets/icons/plus.svg";
import IconMinus from "../../assets/icons/minus.svg";

const Input = ({ width, height }) => {
  const [value, setValue] = useState(0);

  const increment = () => {
    setValue(value + 1);
  };

  const decrement = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };

  const itemClasses = value === 0 ? "item-reset" : "";

  return (
    <Container width={width} height={height}>
      <button onClick={decrement}>
        <img className={itemClasses} src={IconMinus} alt="Tirar" />
      </button>
      <input type="text" value={value} readOnly />
      <button onClick={increment}>
        <img src={IconPlus} alt="Adicionar" />
      </button>
    </Container>
  );
};

export { Input };
