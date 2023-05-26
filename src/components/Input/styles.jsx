import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.625rem;

  width: ${(props) => (props.width ? `${props.width}px` : "auto")};
  height: ${(props) => (props.height ? `${props.height}px` : "auto")};

  margin-left: auto;
  padding: 0.25rem 0.5rem;

  border: 1px solid #f09035;
  border-radius: 5px;

  .item-zerado {
    filter: sepia(100%) hue-rotate(210deg) brightness(200%);
  }

  button {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  img {
    cursor: pointer;
  }

  button:first-child {
    width: 0.75rem;
    height: 1rem;
    cursor: pointer;
  }

  input {
    width: 25px;
    color: #4e4e4e;
    text-align: center;
    font-size: 0.875rem;
  }
`;
