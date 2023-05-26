import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  padding: 0 1rem;

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
    border-bottom: 1px solid var(--color-primary);
  }
`;
