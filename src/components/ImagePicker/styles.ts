import styled from 'styled-components';
import { Colors, Metrics } from '../../theme';

export const Container = styled.div`
    height: 120px;
    width: 120px;
    margin: ${Metrics.margin}px;
    border: 2px solid ${Colors.secondary};
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    input {
        display: none;
    }
    img {
        border-radius: 4px;
        height: 116px;
        width: 116px;
        object-fit: contain;
    }
    &:hover {
        opacity: 0.5;
    }
`;