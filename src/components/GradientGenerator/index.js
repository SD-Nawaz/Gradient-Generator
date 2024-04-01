import {Component} from 'react'

import GradientDirectionItem from '../GradientDirectionItem'

import {
  GradientContainer,
  ContentContainer,
  Heading,
  ChooseHeading,
  GradientDirectionList,
  PickUpHeading,
  PickColorContainer,
  FontColor,
  ColorInput,
  GenerateButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here
class GradientGenerator extends Component {
  state = {
    activeGradientDirection: gradientDirectionsList[0].value,
    fromColorInput: '#8ae323',
    toColorInput: '#014f7b',
    gradientValue: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
  }

  onGenerate = () => {
    const {fromColorInput, toColorInput, activeGradientDirection} = this.state
    this.setState({
      gradientValue: `to ${activeGradientDirection}, ${fromColorInput}, ${toColorInput}`,
    })
  }

  onChangeFromColor = event => {
    this.setState({fromColorInput: event.target.value})
  }

  onChangeToColor = event => {
    this.setState({toColorInput: event.target.value})
  }

  clickGradientDirectionItem = direction => {
    this.setState({activeGradientDirection: direction})
  }

  render() {
    const {
      activeGradientDirection,
      fromColorInput,
      toColorInput,
      gradientValue,
    } = this.state

    return (
      <GradientContainer
        data-testid="gradientGenerator"
        gradient={gradientValue}
      >
        <ContentContainer>
          <Heading>Generate a CSS Color Gradient</Heading>
          <ChooseHeading>Choose Direction</ChooseHeading>
          <GradientDirectionList>
            {gradientDirectionsList.map(eachGradient => (
              <GradientDirectionItem
                key={eachGradient.directionId}
                gradientDirectionsDetails={eachGradient}
                isActive={activeGradientDirection === eachGradient.value}
                clickGradientDirectionItem={this.clickGradientDirectionItem}
              />
            ))}
          </GradientDirectionList>
          <PickUpHeading>Pick the Colors</PickUpHeading>
          <PickColorContainer>
            <div>
              <FontColor>{fromColorInput}</FontColor>
              <ColorInput
                onChange={this.onChangeFromColor}
                value={fromColorInput}
                type="color"
              />
            </div>
            <div>
              <FontColor>{toColorInput}</FontColor>
              <ColorInput
                onChange={this.onChangeToColor}
                value={toColorInput}
                type="color"
              />
            </div>
          </PickColorContainer>
          <GenerateButton type="button" onClick={this.onGenerate}>
            Generate
          </GenerateButton>
        </ContentContainer>
      </GradientContainer>
    )
  }
}

export default GradientGenerator
