import { Box, MenuItem, Paper } from '@material-ui/core';
import styled from 'styled-components';
import { Colors, Metrics } from '../../theme';

export const CustomHeader = styled(Paper)`
    height: 48px;
    border-radius: 0px !important;
    margin: 0px;
    display: flex;
    img {
        object-fit: contain;
        margin: ${Metrics.margin}px auto; 
    }
`;
export const ContainerMenu = styled(Paper)`
    background: ${Colors.primary} !important;
    width: 250px;
    border-radius: 0px !important;
    transform: translateX(0px);
    transition: transform .3s cubic-bezier(0.4, 0, 0.2, 1) !important;
        height: auto;
    @media only screen and (max-width: ${Metrics.md}px) {
        padding-top: 48px;
        height: 100vh;
        position: fixed;
        z-index: 10;
        top: 0;
        transform: ${({ open }: Props) =>
        open ? 'translateX(0px)' : 'translateX(-250px)'};
    }
`;

export const Image = styled(Paper)`
    margin: ${Metrics.margin * 4}px ${Metrics.margin * 2}px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        margin: ${Metrics.margin * 1}px;
        border-radius: 5px;
        max-height: 210px;
        max-width: 210px
        
    }
`;
interface Props {
    open: boolean;
}

export const AppContainer = styled(Box)`
    display: flex;
`;

export const ContainerChildren = styled(Box)`
    margin: ${Metrics.margin * 4}px;
    width: 100%;
`;