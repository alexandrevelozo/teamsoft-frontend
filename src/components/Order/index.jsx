import { useEffect, useState } from "react";
import api from "../../services/api";

import ImageProduct from "../../assets/images/product.png";

import { Input } from "../Input";
import { IngredientsExtras } from "../IngredientsExtras";
import { Popover } from "../Popover";
import { Spinner } from "../Spinner";

import {
  Container,
  Wrapper,
  Product,
  Price,
  Card,
  Title,
  Div,
  AddOrder,
  ButtonAdd,
  TitleCutlery,
  InputCutlery,
} from "./styles";

export const Order = () => {
  const [infoProduct, setInfoProduct] = useState([]);
  const [maxIngredients, setMaxIngredients] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const [isNoChecked, setIsNoChecked] = useState(false);
  const [isPopoverVisible, setIsPopoverVisible] = useState(false);

  useEffect(() => {
    api.get().then((response) => {
      setInfoProduct(response.data[0]);
      setMaxIngredients(response.data[0].ingredients[0].max_itens);
      setIsLoading(false);
    });
  }, []);

  const handleClickButton = () => {
    setIsPopoverVisible(true);
    setTimeout(() => {
      setIsPopoverVisible(false);
    }, 3000);
  };

  const handleChangeTrue = () => {
    setIsChecked(!isChecked);
    setIsNoChecked(false);
  };

  const handleChangeFalse = () => {
    setIsNoChecked(!isNoChecked);
    setIsChecked(false);
  };

  return (
    <Container>
      {isLoading ? (
        <Spinner />
      ) : (
        <Wrapper>
          <Product>
            <img src={ImageProduct} alt="Hamburguer" />
            <span>{infoProduct.nm_product}</span>
            <p>{infoProduct.description}</p>
            <Price>
              <span>
                R${infoProduct.vl_discount.toFixed(2).replace(".", ",")}
              </span>
              <span>R${infoProduct.vl_price.toFixed(2).replace(".", ",")}</span>
            </Price>
          </Product>
          {isPopoverVisible && <Popover />}

          <Card>
            <Div>
              <Title>
                <h3>Adicionar ingredientes</h3>
                <span>Até {maxIngredients} ingredientes.</span>
              </Title>

              <IngredientsExtras />

              <TitleCutlery>
                <span>Precisa de Talher?</span>
              </TitleCutlery>

              <InputCutlery>
                <label>
                  Sim
                  <input
                    type="radio"
                    checked={isChecked}
                    onChange={handleChangeTrue}
                  />
                </label>

                <label>
                  Não
                  <input
                    type="radio"
                    checked={isNoChecked}
                    onChange={handleChangeFalse}
                  />
                </label>
              </InputCutlery>
            </Div>

            <AddOrder>
              <Input width={140} height={40} />
              <ButtonAdd onClick={handleClickButton}>Adicionar</ButtonAdd>
            </AddOrder>
          </Card>
        </Wrapper>
      )}
    </Container>
  );
};
