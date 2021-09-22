import styled from 'styled-components/native';

export const Clock = styled.View`
    background-color: #ff1d43;
    width: ${props => `${props.size * 90}px`};
    height: ${props => `${props.size * 90}px`};
    max-width: 400px;
    max-height: 400px; 
    align-self: center;
    margin: 100px auto;
    border-radius: ${props => `${props.size *90}px`};
    justify-content: center;
    align-items: center;
    border: 5px solid #fbebae;
    position: relative;
    overflow: hidden;
    box-shadow: 0px 4px 20px #252525;
` 

export const Setas = styled.View`
    padding: 0;
    position: absolute;
    ${props =>props.positionY ? props.positionY : ''}
    left: ${props => props.positionY ? '43.5%' : 'auto'};
    ${props => props.positionX ? props.positionX : ''};
    transform: ${props => `rotate(${props.rotate}deg)`};
`
