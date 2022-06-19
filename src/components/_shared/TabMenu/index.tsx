import React from 'react'
import * as styled from './index.styled'
type Props = {
  data: {
    id: number
    name: string
  }[]
  selectedMenu: number
  onClick: Function
}

function TabMenu({ data: menus, selectedMenu, onClick: handleClick }: Props) {
  return (
    <styled.Wrapper>
      {menus.map((menu) => (
        <styled.Menu
          key={menu.id}
          selected={menu.id === selectedMenu}
          onClick={() => handleClick(menu.id)}
        >
          {menu.name}
        </styled.Menu>
      ))}
      <styled.Glider selectedMenu={selectedMenu} />
    </styled.Wrapper>
  )
}

export default TabMenu
