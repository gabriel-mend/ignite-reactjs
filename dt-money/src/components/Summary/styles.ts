import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
    margin-top: -10rem;

    & div {
      background: ${theme.palette.shape};
      padding: 1.5rem 2rem;
      border-radius: 0.25rem;
      color: ${theme.palette.title};

      header {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      strong {
        display: block;
        margin-top: 1rem;
        font-size: 2rem;
        line-height: 3rem;
        font-weight: 500;
      }
    }
    & div:last-child {
      background: ${theme.palette.green};
      color: #FFF;
    }
  `}
`