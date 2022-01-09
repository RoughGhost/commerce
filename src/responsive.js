import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 368px) {
      ${props}
    }
  `;
};

export const tablet = (props) => {
  return css`
    @media only screen and (max-width: 650px) {
      ${props}
    }
  `;
};

export const large = (props) => {
  return css`
    @media screen and (max-width: 1050px) {
      ${props}
    }
  `;
};

export const smobile = (props) => {
  return css`
    @media screen and (max-width: 414px) {
      ${props}
    }
  `;
};
