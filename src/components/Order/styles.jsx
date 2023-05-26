import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 7rem;

  position: relative;

  width: 100%;
  max-width: 1280px;

  margin: 0 auto;
  padding: 1.5rem 4.125rem;

  @media (max-width: 1260px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;

    max-width: 40rem;
    padding: 1rem;

    gap: 32px;
  }

  @media (max-width: 480px) {
    padding: 0;
  }
`;

export const Product = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin-top: 1rem;

  gap: 26px;

  span {
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    color: var(--color-text);
  }

  p {
    font-weight: 400;
    color: var(--color-text);
    font-size: 20px;
  }

  img {
    width: 100%;
  }

  @media (max-width: 480px) {
    width: 90%;
    margin-bottom: -2rem;

    span {
      font-size: 18px;
    }

    p {
      font-size: 16px;
    }
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
    color: var(--color-text);
    text-decoration: line-through;
    text-decoration-thickness: 2px;
  }

  @media (max-width: 480px) {
    span:first-child {
      font-size: 16px;
    }

    span:last-child {
      font-size: 16px;
    }
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  max-width: 439px;

  height: 662px;

  border: 1px solid #686868;
  border-radius: 8px;

  padding: 32px;

  @media (max-width: 768px) {
    border: none;
  }
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  overflow: auto;

  max-height: 544px;
  max-width: 24rem;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const Title = styled.div`
  padding: 10px 16px 6px 16px;
  margin-right: 10px;

  background: #fdd70e33;

  h3 {
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: var(--color-text);
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
`;

export const ButtonAdd = styled.button`
  background: var(--color-primary);
  width: 219px;
  cursor: pointer;
  color: var(--color-text-white);
  font-size: 0.75rem;
  font-weight: 500;
`;

export const TitleCutlery = styled.div`
  padding: 10px 16px 28px 16px;
  margin-right: 10px;
  background: #fdd70e33;

  span {
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: var(--color-text);
  }
`;

export const InputCutlery = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  margin-top: -5px;
  margin-right: 10px;

  label {
    display: flex;
    justify-content: space-between;
    align-items: center;

    font-size: 1rem;
    font-weight: 400;
    color: var(--color-text);
  }

  input[type="radio"] {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 1rem;
    height: 1rem;
    border: 2px solid var(--color-border-input);
    border-radius: 50%;
    background-color: var(--color-terciary);
    outline: none;
    cursor: pointer;

    &:checked {
      background-color: var(--color-primary);
      border: 2px solid var(--color-border-input);
    }
  }
`;
