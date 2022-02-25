import { css } from 'styled-components';

export const gridMixin = (columns: string, rows: string) => css`
  display: grid;
  grid-template-columns: ${columns};
  grid-template-rows: ${rows};
`;

export const flexMixin = (justify: string, align: string, direction: string) => css`
  display: flex;
  flex-direction: ${direction};
  justify-content: ${justify};
  align-items: ${align};
`;

export const maxContainer = () => css`
  height: 100%;
  width: 100%;
`;

export const customContainer = (h: string, w: string) => css`
  height: ${h}%;
  width: ${w}%;
`;