import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

  font-family: "Roboto Condensed";
  z-index: 100;

  .arrow {
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: var(--color-primary);
    transform: rotate(45deg);
    top: -5px;
    left: 50%;
    margin-left: -5px;
    box-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
  }
`;

export const BoxTitle = styled.div`
  background: var(--color-primary);
  padding: 10px 20px 10px 10px;
  border-radius: 4px 4px 0px 0px;

  h2 {
    font-weight: 700;
    font-size: 20px;
    color: var(--color-text-white);
    line-height: 100%;
  }
`;

export const BoxContent = styled.div`
  padding: 10px;
  background: var(--color-background-white);
  border-radius: 0px 0px 4px 4px;

  h3 {
    color: var(--color-text-red);
    font-weight: 700;
    font-size: 16px;
    line-height: 100%;
    margin-bottom: 4px;
  }

  p {
    color: var(--color-text);
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
    margin-bottom: 3px;
  }

  ul {
    list-style: disc;
    color: var(--color-text);
    margin-left: 22px;

    li {
      font-weight: 400;
      font-size: 14px;
      line-height: 100%;
      color: var(--color-text);
      margin-bottom: 3px;
    }
  }
`;
