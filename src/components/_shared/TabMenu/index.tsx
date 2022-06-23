import React from 'react'
import { Wrapper, Menu, Glider } from './index.style'
type Props = {
  data: {
    id: any
    name: string
  }[]
  selectedMenu: number
  onClick: Function
}

function TabMenu({ data: menus, selectedMenu, onClick: handleClick }: Props) {
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
