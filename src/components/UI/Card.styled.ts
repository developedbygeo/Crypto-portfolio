import styled, { css } from 'styled-components';
import { getLayout } from '../../shared/utils';
import { PropsLayout } from '../../shared/models/utils.model';

type IBaseProps = {
    w?: string;
    h?: string;
};

type IProps = {
    p?: string;
    bgClr?: string;
    customMargin?: string;
    textAlign?: string;
    customPosition?: string;
    top?: string;
} & IBaseProps &
    PropsLayout;

const baseCardSettings = css<IBaseProps>`
    width: ${({ w }) => w || 'auto'};
    height: ${({ h }) => h || 'auto'};
`;

export const Card = styled.div<IProps>`
    padding: ${({ p }) => p || '2rem'};
    background: ${({ theme, bgClr }) => bgClr || theme.colors.secondary};
    margin: ${({ customMargin }) => customMargin || 'auto'};
    text-align: ${({ textAlign }) => textAlign || 'initial'};
    position: ${({ customPosition }) => customPosition || 'static'};
    top: ${({ top }) => top || 'initial'};
    ${baseCardSettings};
    ${getLayout};
`;
