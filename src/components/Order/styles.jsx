import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
  max-width: 1280px;

  margin: 0 auto;
  padding: 1.5rem 4.125rem;

  @media (max-width: 1096px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 32px;
  }
`;

export const Product = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 1rem;

  gap: 26px;

  span {
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    color: #4e4e4e;
  }

  p {
    font-weight: 400;
    color: #4e4e4e;
    font-size: 20px;
  }

  span {
  }
`;

export const Price = styled.div`
  display: flex;
  flex-direction: row;

  gap: 16px;

  span:first-child {
    font-weight: 400;
    font-size: 32px;
    color: #dc6e05;
  }

  span:last-child {
    font-weight: 400;
    font-size: 32px;
    color: #4e4e4e;
    text-decoration: line-through;
    text-decoration-thickness: 2px;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  max-width: 439px;

  /* height: 100%; */
  height: 662px;

  overflow: auto;

  border: 1px solid #686868;
  border-radius: 8px;

  padding: 32px;
  /* gap: 21px; */
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  overflow: auto;

  max-height: 544px;

  max-width: 24rem;
`;

export const Title = styled.div`
  padding: 10px 16px 6px 16px;
  margin-right: 10px;

  background: #fdd70e33;

  h3 {
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: #4e4e4e;
  }

  span {
    font-size: 0.75rem;
    line-height: 1.25rem;
    color: #e49700;
  }
`;

export const AddOrder = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;

  gap: 1rem;

  margin-top: 12px;

  /* position: sticky;
  bottom: 0;
  left: 0; */
`;

export const ButtonAdd = styled.button`
  background: var(--color-primary);
  width: 219px;
  cursor: pointer;
  color: var(--color-text-white);
  font-size: 0.75rem;
  font-weight: 500;
`;
