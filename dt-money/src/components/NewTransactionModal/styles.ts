import styled, { css } from "styled-components";
import { darken, transparentize } from 'polished'

export const Container = styled.form`
  ${({ theme }) => css`
    h2 {
      color: ${theme.palette.title};
      font-size: 1.5rem;
      margin-bottom: 2rem;
    }

    input {
      width: 100%;
      padding: 0 1.5rem;
      height: 4rem;
      border-radius: 0.25rem;
      background-color: #e7e9ee;

      border: 1px solid #d7d7d7;

      font-weight: 400;
      font-size: 1rem;

      &::placeholder {
        color: ${theme.palette.text};
      }

      & + input {
        margin-top: 1rem;
      }
    }

    button[type="submit"] {
      width: 100%;
      padding: 0 1.5rem;
      height: 4rem;
      background-color: ${theme.palette.green};

      color: #fff;
      border-radius: 0.25rem;
      border: 0;
      font-size: 1rem;
      margin-top: 1.5rem;

      transition: .2s;

      &:hover {
        filter: brightness(0.9);
      }
    }
  `}
` 

export const TransactionTypeContainer = styled.div`
  ${({ theme }) => css`
    margin: 1rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;

    button 
    }
  `}
` 

interface RadioBoxProps {
  isActive: boolean
  activeColor: 'green' | 'red'
}

const colors = {
  green: '#33CC95',
  red: '#E52E4d'
}

export const RadioBox = styled.button<RadioBoxProps>`
  ${({ theme, isActive, activeColor }) => css`
    height: 4rem;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;

    background-color: ${isActive 
      ? transparentize(0.9, colors[activeColor])
      : 'transparent'
    };

    display: flex;
    justify-content: center;
    align-items: center;

    transition: .2s;

    &:hover {
      border-color: ${darken(0.1, '#d7d7d7')};
    }

    img {
      width: 20px;
      height: 20px;
    }

    span {
      display: inline-block;
      margin-left: 1rem;
      font-size: 1rem;
      color: ${theme.palette.title};
    }
  `}
` 