import React from 'react'
import * as Styled from './index.styled'
interface TabMenuProps {
  data: {
    id: any
    name: string
  }[]
  selectedMenu: number
  onClick: Function
}

const TabMenu: React.FC<TabMenuProps> = ({
  data: menus,
  selectedMenu,
  onClick: handleClick,
}) => {
  return (
    <Styled.Wrapper>
      {menus.map((menu) => (
        <Styled.Menu
          key={menu.id}
          selected={menu.id === selectedMenu}
          onClick={() => handleClick(menu.id)}
        >
          {menu.name}
        </Styled.Menu>
      ))}
      <Styled.Glider selectedMenu={selectedMenu} />
    </Styled.Wrapper>
  )
}

export default TabMenu
