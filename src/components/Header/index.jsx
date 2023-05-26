import {
  Container,
  Wrapper,
  Logo,
  BoxAdress,
  Adress,
  Search,
  BoxUser,
  BackButton,
} from "./styles";

import LogoDeliverize from "../../assets/icons/logo.png";
import IconArrowDown from "../../assets/icons/arrow_down.png";
import IconAccount from "../../assets/icons/account_circle.svg";
import IconCart from "../../assets/icons/shopping_cart.svg";
import BackIcon from "../../assets/icons/back_icon.png";

export const Header = () => {
  return (
    <Container>
      <Wrapper>
        <BackButton>
          <img
            style={{
              width: "26px",
              height: "26px",
              cursor: "pointer",
            }}
            src={BackIcon}
            alt="Voltar"
          />
        </BackButton>
        <Logo>
          <img src={LogoDeliverize} alt="Deliverize" />
        </Logo>

        <BoxAdress>
          <Adress>
            <span>Entrega:</span>
            <img
              style={{
                width: "12px",
                height: "7.4px",
                cursor: "pointer",
              }}
              src={IconArrowDown}
              alt="Icone endereço"
            />
            <span>R. Antonio Braune, 222</span>
          </Adress>
          <Search placeholder="Busque por estabelecimento ou produto" />
        </BoxAdress>

        <BoxUser>
          <button>
            <img src={IconAccount} alt="Entrar" />
            <span>Entrar</span>
          </button>
          <button>
            <div className="notification-icon">
              <img src={IconCart} alt="Carrinho" />
            </div>
            <span>Carrinho</span>
          </button>
        </BoxUser>
      </Wrapper>
    </Container>
  );
};
