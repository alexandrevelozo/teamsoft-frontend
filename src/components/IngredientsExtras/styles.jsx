import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0 1rem;

  gap: 0.6rem;

  label {
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--color-text);
  }

  legend {
    font-size: 0.875rem;
    color: var(--color-primary);
  }

  i {
    border-bottom: 1px solid #f09035;
  }
`;

export const Title = styled.div`
  padding: 10px 16px 28px 16px;
  margin-right: 10px;
  background: #fdd70e33;

  span {
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: #4e4e4e;
  }
`;

export const InputCutlery = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-right: 10px;
`;
