import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    margin-top: 4rem;

    table {
      width: 100%;
      border-spacing: 0 0.5rem;

      th {
        color: ${theme.palette.text};
        font-weight: 400;
        padding:  1rem 2rem;
        text-align: left;
        line-height: 1.5rem;
      }

      td {
        padding: 1rem 2rem;
        border: 0;
        background: ${theme.palette.shape};
        border-radius: 0.25rem;
        color: ${theme.palette.text};
        &:first-child {
          color: ${theme.palette.title};
        }

        &.deposit {
          color: ${theme.palette.green};
        }
        
        &.withdraw {
          color: ${theme.palette.red};
        }
      }
    }
  `}
`