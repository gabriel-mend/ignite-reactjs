import styled, { css } from "styled-components";

export const Container = styled.main`
  ${({ theme }) => css`
    max-width: 1120px;
    margin: 0 auto;
    padding: 2.5rem 1rem;
  `}
`