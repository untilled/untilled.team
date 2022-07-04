import React from 'react'
import { Wrapper, Menu, Glider } from './index.style'
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
    <Wrapper>
      {menus.map((menu) => (
        <Menu
          key={menu.id}
          selected={menu.id === selectedMenu}
          onClick={() => handleClick(menu.id)}
        >
          {menu.name}
        </Menu>
      ))}
      <Glider selectedMenu={selectedMenu} />
    </Wrapper>
  )
}

export default TabMenu
