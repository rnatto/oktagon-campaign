import { Box, MenuItem, Paper } from '@material-ui/core';
import styled from 'styled-components';
import { Colors, Metrics } from '../../theme';

export const CustomHeader = styled(Paper)`
    height: 48px;
    border-radius: 0px !important;
    margin: 0px;
    display: flex;
    /* justify-content: space-evenly; */
    img {
        object-fit: contain;
        margin: ${Metrics.margin}px; 
    }
`;
export const ContainerMenu = styled(Paper)`
    background: ${Colors.primary} !important;
    width: 250px;
    border-radius: 0px !important;
    transform: translateX(0px);
    transition: transform .3s cubic-bezier(0.4, 0, 0.2, 1) !important;
    height: calc(100vh - 48px);
    @media only screen and (max-width: ${Metrics.sm}px) {
        position: absolute;
        transform: ${({ open }: Props) =>
        open ? 'translateX(0px)' : 'translateX(-250px)'};
    }
`;

export const Image = styled.div`
    margin-top: ${Metrics.margin * 4}px;
    margin-bottom: ${Metrics.margin * 4}px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        border: 5px solid ${Colors.contrast};
        border-radius: 8px;
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
    min-height: calc(100vh - ${Metrics.margin})px;
`;