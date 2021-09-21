import styled from 'styled-components/native';
import { Entypo } from '@expo/vector-icons'

export const Clock = styled.View`
    background-color: #ff1d43;
    width: 80vw;
    height: 80vw;
    max-width: 700px;
    max-height: 700px;
    align-self: center;
    margin: 100px auto;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    border: 5px solid #fbebae;
    position: relative;
    overflow: hidden;
` 

export const Setas = styled.View`
    padding: 0;
    position: absolute;
    ${props =>props.positionY ? props.positionY : ''}
    left: ${props => props.positionY ? '43.5%' : 'auto'};
    ${props => props.positionX ? props.positionX : ''};
    transform: ${props => `rotate(${props.rotate}deg)`};
`
