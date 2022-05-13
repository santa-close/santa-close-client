import {Group, GroupItem} from './styles'

export const ToggleGroup = () => {
  return (
    <Group type="single" defaultValue="left" aria-label="Text alignment">
      <GroupItem value="left" aria-label="Left aligned">
        left
      </GroupItem>
      <GroupItem value="center" aria-label="Center aligned">
        center
      </GroupItem>
      <GroupItem value="right" aria-label="Right aligned">
        right
      </GroupItem>
    </Group>
  )
}
