import styled, { css } from 'styled-components';

interface IBtnProps {
  readonly ctaAltHover?: Boolean;
  readonly alignSelf?: string;
}

const standardHover = css`
  background: ${({ theme }) => theme.colors.mainText};
`;
const altHover = css`
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.mainBg};
  border: 1.5px solid ${({ theme }) => theme.colors.accent};
`;

const getCtaHoverClr = ({ ctaAltHover }: IBtnProps) => {
  if (ctaAltHover) {
    return altHover;
  }
  return standardHover;
};

const commonBtnStyling = css<IBtnProps>`
  letter-spacing: 0.125rem;
  text-align: center;
  max-width: 100%;
  padding: 1.5rem 2.5rem;
  max-width: 30rem;
  min-width: 2rem;
  min-height: 2rem;
  color: ${({ theme }) => theme.colors.mainText};
  align-self: ${({ alignSelf }) => alignSelf || 'inherit'};
`;

export const CtaButton = styled.button<IBtnProps>`
  border: 1.5px solid ${({ theme }) => theme.colors.mainText};
  color: ${({ theme }) => theme.colors.mainText};
  font-weight: 700;
  border-radius: 0.15rem;
  background: transparent;
  transition: all 400ms ease-in-out;
  font-size: 2.4rem;
  align-self: ${({ alignSelf }) => alignSelf || 'initial'};
  ${commonBtnStyling};
  &:hover {
    ${getCtaHoverClr};
  }
`;
