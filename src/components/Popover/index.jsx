import { Container, BoxTitle, BoxContent } from "./styles";

const Popover = () => {
  return (
    <Container>
      <div className="arrow" />
      <BoxTitle>
        <h2>Adicionado com Sucesso</h2>
      </BoxTitle>
      <BoxContent>
        <h3>Oferta Cheddar Bacon</h3>
        <p>Ingredientes:</p>
        <ul>
          <li>1 Carne 250gr</li>
          <li>2 Queijo Cheddar</li>
          <li>1 Bacon</li>
          <li>Molho Especial</li>
        </ul>
      </BoxContent>
    </Container>
  );
};

export { Popover };
