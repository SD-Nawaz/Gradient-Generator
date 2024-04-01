// Style your elements here
import styled from 'styled-components'

export const GradientItem = styled.li`
    display: flex;
    justify-content: space-between;
    width: 1000px;
    color: #014f7b;
    
`
export const GradientButton = styled.button`
    margin-right: 10px;
    background-color:  #ffffff;
    border-radius: 10px;
    opacity: ${props => (props.isActive ? 1 : 0.5)};
    border: none;
    width: 80px;
    height: 40px:    
`
