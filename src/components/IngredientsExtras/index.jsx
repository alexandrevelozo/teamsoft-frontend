import { useEffect, useState } from "react";
import api from "../../services/api";

import { Input } from "../Input";
import { Container, Title, InputCutlery } from "./styles";

export const IngredientsExtras = () => {
  const [groupItems, setGroupItems] = useState([]);

  useEffect(() => {
    api.get().then((response) => {
      setGroupItems(response.data[0].ingredients[0].itens);
    });
  }, []);

  return (
    <>
      {groupItems.map((item) => {
        return (
          <Container key={item.id}>
            <label>{item.nm_item}</label>
            <Input width={89} height={32} />
            <legend>+ R${item.vl_item}</legend>
            <i />
          </Container>
        );
      })}

      <Title>
        <span>Precisa de Talher?</span>
      </Title>

      <InputCutlery>
        <label>Sim</label>
        <input type="checkbox" />
      </InputCutlery>

      <InputCutlery>
        <label>Não</label>
        <input type="checkbox" />
      </InputCutlery>
    </>
  );
};
