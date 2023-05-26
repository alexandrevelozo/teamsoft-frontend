import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;

  background-color: #f4f4f4;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 80px;
  max-width: 1280px;

  padding: 0 2.5rem;
  margin: 0 auto;

  @media (max-width: 768px) {
    height: 56px;
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const Logo = styled.div`
  cursor: pointer;

  @media (max-width: 768px) {
    img {
      width: 150px;
      height: 32px;
    }
  }
`;

export const BackButton = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    padding: 12px;
  }
`;

export const BoxAdress = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  gap: 1.5rem;

  width: 100%;
  padding: 0 1.65rem 0 1.65rem;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const Adress = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  background: var(--color-terciary);

  width: 100%;
  height: 3rem;
  max-width: 14rem;

  padding: 0 1rem 0 0.5rem;

  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
  border-radius: 4px;

  img {
    margin-left: auto;
  }

  span:first-child {
    font-weight: 400;
    font-size: 0.75rem;
    color: #d80000;
  }

  span:last-child {
    font-weight: 700;
    font-size: 0.75rem;
    color: #656363;
  }
`;

export const Search = styled.input`
  width: 100%;
  max-width: 22rem;
  height: 3rem;

  padding: 0 1rem;

  background: var(--color-terciary);

  border: 1px solid #ed3237;
  border-radius: 4px;

  ::placeholder {
    font-weight: 400;
    font-size: 0.75rem;
    color: #656363;
  }
`;

export const BoxUser = styled.div`
  display: flex;
  flex-direction: row;
  gap: 26px;

  button {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;

    span {
      font-weight: 400;
      font-size: 1rem;
      color: #ed3237;
    }
  }

  .notification-icon {
    position: relative;
  }

  .notification-icon::after {
    content: "1";
    position: absolute;
    top: -8px;
    right: -8px;
    background-color: var(--color-primary);
    color: white;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
