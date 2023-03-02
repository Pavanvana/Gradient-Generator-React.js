import {Component} from 'react'

import GradientDirectionItem from '../GradientDirectionItem'

import {
  GradientGeneratorContainer,
  ResponsiveContainer,
  Heading,
  DirectionsDescription,
  GradientDirectionList,
  ColorsPickersDescription,
  ColorPickerContainer,
  CustomInputAndColorContainer,
  ColorValue,
  CustomInput,
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
    fromColorInput: '#8ae323',
    toColorInput: '#014f7b',
    gradientValue: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
    activeGradientDirection: gradientDirectionsList[0].value,
  }

  onChangeFromColorInput = event => {
    this.setState({fromColorInput: event.target.value})
  }

  onChangeToColorInput = event => {
    this.setState({toColorInput: event.target.value})
  }

  changeDirection = value => {
    this.setState({activeGradientDirection: value})
  }

  onGenerateBackgroundImage = () => {
    const {fromColorInput, toColorInput, activeGradientDirection} = this.state
    this.setState({
      gradientValue: `to ${activeGradientDirection}, ${fromColorInput}, ${toColorInput}`,
    })
  }

  render() {
    const {
      fromColorInput,
      toColorInput,
      gradientValue,
      activeGradientDirection,
    } = this.state
    return (
      <GradientGeneratorContainer
        data-testId="gradientGenerator"
        bgImage={gradientValue}
      >
        <ResponsiveContainer>
          <Heading>Generate a CSS Color Gradient</Heading>
          <DirectionsDescription>Choose Direction</DirectionsDescription>
          <GradientDirectionList>
            {gradientDirectionsList.map(eachDirection => (
              <GradientDirectionItem
                key={eachDirection.directionId}
                directionDetails={eachDirection}
                changeDirection={this.changeDirection}
                isActive={activeGradientDirection === eachDirection.value}
              />
            ))}
          </GradientDirectionList>
          <ColorsPickersDescription>Pick the Colors</ColorsPickersDescription>
          <ColorPickerContainer>
            <CustomInputAndColorContainer>
              <ColorValue>{fromColorInput}</ColorValue>
              <CustomInput
                type="color"
                onChange={this.onChangeFromColorInput}
                value={fromColorInput}
              />
            </CustomInputAndColorContainer>
            <CustomInputAndColorContainer>
              <ColorValue>{toColorInput}</ColorValue>
              <CustomInput
                type="color"
                onChange={this.onChangeToColorInput}
                value={toColorInput}
              />
            </CustomInputAndColorContainer>
          </ColorPickerContainer>
          <GenerateButton
            type="button"
            onClick={this.onGenerateBackgroundImage}
          >
            Generate
          </GenerateButton>
        </ResponsiveContainer>
      </GradientGeneratorContainer>
    )
  }
}
export default GradientGenerator
