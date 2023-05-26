import { useEffect, useState } from "react";
import api from "../../services/api";

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
} from "./styles";

import { IngredientsExtras } from "../IngredientsExtras";

import ImageProduct from "../../assets/images/product.png";
import { Input } from "../Input";

export const Order = () => {
  const [infoProduct, setInfoProduct] = useState([]);
  const [maxIngredients, setMaxIngredients] = useState(0);

  useEffect(() => {
    api.get().then((response) => {
      setInfoProduct(response.data[0]);
      setMaxIngredients(response.data[0].ingredients[0].max_itens);
    });
  }, []);

  return (
    <Container>
      <Wrapper>
        <Product>
          <img src={ImageProduct} alt="Hamburguer" />
          <span>Oferta Picanha Cheddar Bacon</span>
          <p>{infoProduct.description}</p>
          <Price>
            <span>R${infoProduct.vl_discount}</span>
            <span>R${infoProduct.vl_price}</span>
          </Price>
        </Product>

        <Card>
          <Div>
            <Title>
              <h3>Adicionar ingredientes</h3>
              <span>Até {maxIngredients} ingredientes.</span>
            </Title>

            <IngredientsExtras />
          </Div>

          <AddOrder>
            <Input width={140} height={40} />
            <ButtonAdd>Adicionar</ButtonAdd>
          </AddOrder>
        </Card>
      </Wrapper>
    </Container>
  );
};
