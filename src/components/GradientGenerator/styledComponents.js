import styled from 'styled-components'

export const GradientContainer = styled.div`
    background-image: linear-gradient(${props => props.gradient});
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    font-family: 'Roboto'
    
`

export const GenerateButton = styled.button`
    border: none;
    height: 30px;
    width: 80px;
    background-color: #00c9b7;
    border-radius: 10px;
`

export const ColorInput = styled.input`
    width: 90px;
    height: 40px;
    border: none;
`

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 50px ;
`
export const Heading = styled.h1`
    color:#ffffff;
    font-size: 30px;
`

export const ChooseHeading = styled.p`
    color:#ffffff79;
    font-size: 25px;
    margin: 20px;
`

export const GradientDirectionList = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    list-style-type: none;
    width: 300px;
`
export const PickUpHeading = styled.p`
    color: #ffffff79;
    font-size: 25px;
    margin: 40px;
`
export const PickColorContainer = styled.div`
    display: flex;
    color: #ffffff79;
    justify-content: space-between;
    width: 350px;
    margin:30px;
`
export const FontColor = styled.p`
    font-size: 28px;
`
