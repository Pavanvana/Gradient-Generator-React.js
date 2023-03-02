// Write your code here
import {ListItem, DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {directionDetails, changeDirection, isActive} = props
  const {displayText, value} = directionDetails

  const onClickDirection = () => {
    changeDirection(value)
  }

  return (
    <ListItem>
      <DirectionButton
        isActive={isActive}
        type="button"
        onClick={onClickDirection}
      >
        {displayText}
      </DirectionButton>
    </ListItem>
  )
}
export default GradientDirectionItem
