import { useEffect, useState } from "react";
import api from "../../services/api";

import { Container } from "./styles";

import { Input } from "../Input";
import { Spinner } from "../Spinner";

export const IngredientsExtras = () => {
  const [groupItems, setGroupItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api.get().then((response) => {
      setGroupItems(response.data[0].ingredients[0].itens);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        groupItems.map((item) => (
          <Container key={item.id}>
            <label>{item.nm_item}</label>
            <Input width={89} height={32} />
            <legend>
              + R${item.vl_item.toFixed(2).toString().replace(".", ",")}
            </legend>
            <i />
          </Container>
        ))
      )}
    </>
  );
};
