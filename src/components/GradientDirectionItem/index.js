// Write your code here
import {GradientItem, GradientButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {gradientDirectionsDetails, isActive, clickGradientDirectionItem} =
    props
  const {displayText, value} = gradientDirectionsDetails

  const onClickGradientDirectioonItem = () => {
    clickGradientDirectionItem(value)
  }

  return (
    <GradientItem>
      <GradientButton
        isActive={isActive}
        type="button"
        onClick={onClickGradientDirectioonItem}
      >
        {displayText}
      </GradientButton>
    </GradientItem>
  )
}
export default GradientDirectionItem
