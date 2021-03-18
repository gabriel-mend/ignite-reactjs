import styled, { css } from "styled-components";

export const Container = styled.header`
  ${({ theme }) => css`
    background-color: ${theme.palette.blue};
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    max-width: 1120px;
    margin: 0 auto;

    padding: 2rem 1rem 12rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      font-size: 1rem;
      color: #fff;
      background: ${theme.palette.blueLight};
      border: 0;
      border-radius: 0.25rem;
      padding: 0 2rem;
      height: 3rem;
      transition: filter 0.2s;
      &:hover {
        filter: brightness(0.9);
      }
    }
  `}
`