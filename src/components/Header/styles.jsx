import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  background-color: #f4f4f4;
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
    background-color: blue;
    height: 56px;
  }
`;

export const Logo = styled.div`
  cursor: pointer;
`;

export const BoxAdress = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;

  width: 100%;

  gap: 1.5rem;

  padding: 0 1.65rem 0 1.65rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Adress = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  max-width: 14rem;
  height: 3rem;

  padding: 0 1rem 0 0.5rem;

  background: #ffffff;

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

  background: #ffffff;

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
    background-color: #f09035;
    color: white;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
  }

  // media

  @media (max-width: 768px) {
    display: none;
  }
`;
